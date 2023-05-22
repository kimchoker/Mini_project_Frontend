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
  @font-face {
    font-family: "inter";
    src: url(./fonts/Inter/Inter-VariableFont_slnt,wght.ttf);
  }

  .schedule {
    font-family: "inter";
    font-size: 35px;
    transform: skew(-10deg);
    text-align: center;
    color: #6f2727;
  }

  table {
    width: 1000px;
    border-collapse: collapse;
    border: 1px solid black;
    margin-left: auto;
    margin-right: auto;
  }

  th, td {
    text-align: center;
    border: 1px solid black;
    font-size: 18px;
  }
  
  th.date, td.date {
    background-color: #F0CB85;
  }
  
  th.time, td.time {
    background-color: #A0DFE1;
  }
  
  th.score, td.score {
    background-color: #A48654;
  }
  
  th.stadium, td.stadium {
    background-color: #c8e6c9;
  }

  td.scheduleDate {
    background-color: #F0CB85;
  }
  
  td.scheduleTime {
    background-color: #A0DFE1;
  }

  td.scheduleScore {
    background-color: #A48654;
  }

  td.scheduleStadium {
    background-color: #c8e6c9;
  }

  .date, .time, .score, .stadium {
    width: 200px;
  } 

  h2 {
    transform: skew(-10deg);
  }

  .optionMon {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: #6f2727;
  }

  .month {
    width: 80px;
    height: 30px;
    cursor: pointer;
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

    const handleMonth = (e) => {
      const selectMonth = e.target.value;
      setMonthFilter(selectMonth);
    }

  return(
        <ScheduleDiv>
            <div>
                <h3 className="schedule">SCHEDULE</h3>

                <div className="optionMon">
                    <h2>2023</h2>

                    <select className="month" value={monthFilter} onChange={handleMonth}>
                        <option value="4">4월</option>
                        <option value="5">5월</option>
                        <option value="6">6월</option>
                        <option value="7">7월</option>
                        <option value="8">8월</option>
                        <option value="9">9월</option>
                    </select>
                </div>

                <br />
                <table>
                    <thead>
                        <tr>
                            <th className="date">날짜</th>
                            <th className="time">시간</th>
                            <th className="score">경기</th>
                            <th className="stadium">구장</th>
                        </tr>
                    </thead>
                    <tbody>
                      {schedule.map((scheduleItem) => (
                        <tr key={scheduleItem.id}>
                          <td className="scheduleDate">{scheduleItem.scheduleDate}</td>
                          <td className="scheduleTime">{scheduleItem.scheduleTime}</td>
                          <td className="scheduleScore">{scheduleItem.scheduleScore}</td>
                          <td className="scheduleStadium">{scheduleItem.location}</td>
                        </tr>
                      ))}
                  </tbody>

                  </table>
            </div>
        </ScheduleDiv>
    );
}
export default Schedule;