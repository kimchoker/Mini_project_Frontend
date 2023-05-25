import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AxiosApi from "../Api/AxiosApi";

const WeeklyDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 100px;
    width: auto;
    height: auto;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    @font-face {
        font-family: "inter";
        src: url(./fonts/Inter/Inter-VariableFont_slnt,wght.ttf);
    }
    
    .weekBest {
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        gap: 30px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .month {
        width: 80px;
        height: 30px;
        text-align: center;
        border-radius: 5px;
    }

    h2 {
        color: #6f2727;
        transform: skew(-10deg);
        font-size: 30px;
    }

    .image-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        gap: 30px;
        font-size: 20px;
    }
    
    .date-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 10px;
    }

    .image {
        padding: 30px;
        width: 200px;
        height: 180px;
        margin-right: 20px;
        object-fit: cover;
        transition: transform 0.5s ease;
    }

    .image:hover {
        transform: scale(2.05);
    }
`;


const Weekly = () => {

    const [weekly, setWeekly] = useState([]);
    const [monthFilter, setMonthFilter] = useState(4);

    useEffect(()=> {
        const weeklyMonth = async() => {
            const rsp = await AxiosApi.getWeekly(monthFilter);
            if(rsp.status === 200) setWeekly(rsp.data);
        }
        weeklyMonth();
    }, [monthFilter])

    return (
        <WeeklyDiv>
            <h2>Weekly Best Line-Up</h2>
            <br />
            
            <select className="month" value={monthFilter} onChange={(e)=>setMonthFilter(e.target.value)}>
                <option value="4">4월</option>
                <option value="5">5월</option>
            </select>
            
                <div className="image-container">
                    {weekly.map((weeklyItem) => (
                        <div key={weeklyItem.id} className="date-container">
                            <div>{weeklyItem.weeklyDate}</div>
                            <img src={weeklyItem.weekURL1} alt="/weekly" className="image"/>
                            <img src={weeklyItem.weekURL2} alt="/weekly" className="image"/>
                            <img src={weeklyItem.weekURL3} alt="/weekly" className="image"/>
                            <img src={weeklyItem.weekURL4} alt="/weekly" className="image"/>
                        </div>
                    ))}
                </div>
        </WeeklyDiv>
    )
}
export default Weekly;