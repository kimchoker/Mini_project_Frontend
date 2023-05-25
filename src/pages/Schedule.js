import React, {useEffect, useState} from "react";
import AxiosApi from "../Api/AxiosApi";
import styled from "styled-components";


const ScheduleDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 100px;
  width: auto;
  height: auto;
  justify-content: center;
  align-items: center;
  gap: 30px;
  font-family: 'Noto Sans KR', sans-serif;
  

  .schedule {
    font-family: 'Inter', sans-serif;
    color: #395144;
    font-size: 45px;
    transform: skew(-10deg);
    text-align: center;
  }

  table {
    width: 1000px;
    border-collapse: collapse;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
  }
  thead{
    background-color: #6f2727;
    color: white;
  }

  th, td {
    text-align: center;
    border: 1px solid black;
    font-size: 18px;
  }
  .date, .time, .score, .stadium {
    width: 200px;
  } 
  .optionMon {
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 50px;
    font-weight: bold;
    font-size: x-large;
    margin-bottom: 30px;

    li{
        border-right: 5px solid #395144;
        padding-right: 40px;
    }
    li:last-child{
        border: none;
    }
    li:hover{
        cursor: pointer;
        color: #395144;
        transform: scale(1.05);
    }
  }

  .month {
    width: 80px;
    height: 30px;
    cursor: pointer;
  }

  .scheduleDate {
    font-weight: bold;
    background-color: #f2f2f2;
  }

  .scheduleGroup {
    border-top: 2px solid #000;
    margin-top: 20px;
  }

  th {
    background-color: #395144;
    color: white;
  }
  
  .date, .time, .match, .stadium {
     width: 200px;
  }
`;

const Schedule = () => {
    const [schedule, setSchedule] = useState([]);

    const [monthFilter, setMonthFilter] = useState(4);
    
    useEffect(()=> {
        const scheduleMonth = async() => {
            const rsp = await AxiosApi.getSchedule(monthFilter);
            if(rsp.status === 200) setSchedule(rsp.data);

        }
        scheduleMonth();
    }, [monthFilter]);

    const getTheValue = (value) => {
        setMonthFilter(value);
    }

    return(
        <ScheduleDiv>
                <h1 className="schedule">SCHEDULE</h1>
                <div className="optionMon">
                    <li onClick={() => getTheValue(4)}>4월</li>
                    <li onClick={() => getTheValue(5)}>5월</li>
                    <li onClick={() => getTheValue(6)}>6월</li>
                    <li onClick={() => getTheValue(7)}>7월</li>
                    <li onClick={() => getTheValue(8)}>8월</li>
                    <li onClick={() => getTheValue(9)}>9월</li>
                </div>
                <table>

                  <tbody>
                    {schedule.map((scheduleItem, index) => {
                      const isGroupStart = index % 5 === 0;
                      const scheduleGroupClass = isGroupStart ? 'scheduleGroup' : '';

                      return (
                        <React.Fragment key={scheduleItem.id}>
                              {isGroupStart && (
                                <tr className={scheduleGroupClass}>
                                  <th className="date">날짜</th>
                                  <th className="time">시간</th>
                                  <th className="match">경기</th>
                                  <th className="stadium">구장</th>
                                </tr>
                              )}
                              <tr>
                                {isGroupStart && (
                                  <td className="scheduleDate" rowSpan={5}>{scheduleItem.scheduleDate}</td>
                                )}
                                <td className="scheduleTime">{scheduleItem.scheduleTime}</td>
                                <td className="scheduleScore">{scheduleItem.scheduleScore}</td>
                                <td className="scheduleStadium">{scheduleItem.location}</td>
                              </tr>
                        </React.Fragment>
                          );
                        })}
                  </tbody>
              </table>
        </ScheduleDiv>
    );
}
export default Schedule;