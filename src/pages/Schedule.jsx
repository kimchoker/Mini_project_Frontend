import React, {useEffect, useState} from "react";
import AxiosApi from "../Api/AxiosApi";
import styled from "styled-components";
import { useParams } from "react-router-dom";

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

  th,
  td {
    text-align: center;
    border: 1px solid black;
  }

  .date {
    width: 180px;
  }

  .time {
    width: 180px;
  }

  .score {
    width: 180px;
  }

  .stadium {
    width: 180px;
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
  }
`;


const Schedule = () => {
    const [schedule, setSchedule] = useState([]);
    const { month } = useParams();

      
    const [selectMonth, setSelectMonth] = useState("전체보기");
      
    const handleMonth = (e) => {
        const selectMonth = e.target.value;
        setSelectMonth(selectMonth);
    };

    useEffect(()=> {
        const schedule = async() => {
            const rsp = await AxiosApi.Schedule(month);
            if(rsp.status === 200) setSchedule(rsp.data);
        }
        schedule();
    }, []);


    const filteredSchedule = schedule.filter((item) =>
            item.scheduleDate.startsWith(selectMonth)
    );
      
    return(
        <ScheduleDiv>
            <div>
                <h3 className="schedule">SCHEDULE</h3>

                <div className="optionMon">
                    <h2>2023</h2>
                    <select className="month" onChange={handleMonth} value={selectMonth}>
                        <option value="ALL">전체보기</option>
                        <option value="April">4월</option>
                        <option value="May">5월</option>
                        <option value="June">6월</option>
                        <option value="July">7월</option>
                        <option value="August">8월</option>
                        <option value="September">9월</option>
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
                        {filteredSchedule.map((item) => ( // 배열에서 아이템 매핑
                        <tr key={item.scheduleDate}>
                            <td>{item.scheduleDate}</td>
                            <td>{item.scheduleTime}</td>
                            <td>{item.scheduleScore}</td>
                            <td>{item.stadium}</td>
                        </tr>
                        ))}
                    </tbody>
                  </table>
            </div>
        </ScheduleDiv>
    );
}
export default Schedule;