import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import AxiosApi from "../Api/AxiosApi";



const ContentBlock = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    width: 800px;
    height: 650px;
    background-color: #f3f3f3;
    border: 2px solid #ccc;
    padding: 10px;
    margin: 10px auto;

    .back {
        text-align: right;
    }

    .back button {
        justify-content: flex-end;
        width: 100px;
        height: 30px;
        background-color: #008CBA;
        color: #fff;
        border: none;
        border-radius: 5%;
        cursor: pointer;
        font-size: 15px;
    }
    
    h3 {
        font-size: 25px;
    }
    h4 {
        font-size: 20px;
    }
    p {
        font-size: 30px;
    }
`;


const HomeContent = () => {
    const navigate = useNavigate("");

    const {selectBoardNo} = useParams();

    const [board, setBoard] = useState([]);

    // const [boardNo, setBoardNo] = useState("");
    const [boardContent, setBoardContent] = useState([]);
    const [boardTitle, setBoardTitle] = useState("");
    const [boardDate, setBoardDate] = useState("");

    useEffect(()=> {
        const board = async() => {
            const rsp = await AxiosApi.HomeContent(selectBoardNo);
            if(rsp.status === 200) {
                const board = rsp.data;
                setBoard(board);
                setBoardContent(board.map((board)=>board.boardContent));
            }
        };
        board();
    }, []);

    const handleBack = () => {
        navigate('/homeplate');
    }


    return(
        <ContentBlock>
            {board.map((boardItem) => (
                <div key={boardItem.boardNo}>
                    <h3>글번호 : {boardItem.boardNo}</h3>
                    <h3>제목 : {boardItem.boardTitle}</h3>
                    <h3>날짜 : {boardItem.boardDate}</h3>
                    <h4>내용</h4>
                    <hr />
                    <p>{boardItem.boardContent}</p>
                </div>
            ))}
        
            <footer>
                <div className="back">
                    <button onClick={handleBack}>목록 보기</button>
                </div>
            </footer>
        </ContentBlock>
    );
};

export default HomeContent;