import React, {useState, useEffect} from 'react';
import { useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import AxiosApi from '../Api/AxiosApi';

const BoardBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 150px;
    margin-bottom: 100px;
    width: auto;
    height: auto;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    .HomePlate {
        font-family: 'inter';
        font-size: 45px;
        transform: skew(-10deg);
        color: #395144;
    }
    h2{
        font-size: 30px; 
    }
    h2:hover{
        cursor: pointer;
        transform: scale(1.15);
        color: #395144;
    }
`;

const BoardInfoDive = styled.div`
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    gap: 100px;
    border-bottom: 3px solid #395144;
    li{
        list-style: none;
        font-size: 20px;
        font-weight: bold;
        padding-right: 60px;
        border-right: 3px solid #395144;
    }
    li:last-child{
        border-right:none;
    }
`;

const BoardGrey = styled.div`
    border-radius: 8px;
    margin-left: auto;
    margin-right: auto;
    width: 1200px;
    background-color: #f6f6f6;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;
    padding: 40px;
    img{
        width: 700px;
        height: 800px;
    }
`;

const HomePlateView = () =>{
    const location = useLocation();
    const [boardNo, setboardNo] = useState(location.state.id);
    const [longBoard , setLongBoard] = useState([0]);
    const navigate = useNavigate();


    useEffect(()=>{
        const getLongBoard = async() =>{
            const rsp = await AxiosApi.getLongBoard(boardNo)
            if(rsp.status === 200) setLongBoard(rsp.data)
        }   
        getLongBoard();
    },[boardNo])
    
    const backToNews = () => {
        navigate("/Homeplate"); 
    }
    return (
        <BoardBlock>
            <h1 className="HomePlate">HOMEPLATE</h1>
            {console.log(longBoard)}
            {console.log(boardNo)}
            <BoardGrey>
            <BoardInfoDive>
                <li>제목 : {longBoard[0].boardTitle}</li>
                <li>사용자 : {longBoard[0].nickName}</li>
                <li>날짜 : {longBoard[0].boardDate}</li>
            </BoardInfoDive>
            {longBoard[0].boardImgUrl && (
                <img src={longBoard[0].boardImgUrl} alt="Error" />
            )}
            <p>{longBoard[0].boardContent}</p>
            <h2 onClick={backToNews}>목록으로 가기</h2>
            </BoardGrey>
        </BoardBlock>
    ); 
};

export default HomePlateView;
