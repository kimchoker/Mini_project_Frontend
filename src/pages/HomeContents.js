import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import AxiosApi from "../Api/AxiosApi";

const HomeContentDiv = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 100px;
    width: auto;
    height: auto;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    @font-face {
        font-family: "inter";
        src: url(./fonts/Inter/Inter-VariableFont_slnt,wght.ttf);
    }
    .Homeplate {
        font-family: 'inter';
        font-size: 45px;
        transform: skew(-10deg);
        color: #6f2727;
    }
    
`;

const ContentGrey = styled.div`
    border-radius: 8px;
    margin-left: auto;
    margin-right: auto;
    width: 1200px;
    background-color: #f6f6f6;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px;
`;

const DivContents =styled.div`
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
    align-items: center;
    p{
        border-right: 1px solid black;
        padding-right: 40px;
    }
    p:last-child{
        border-right: none;
    }
`;

const Button = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    &:hover{
        color: #6f2727;
    }
`;
const HomeContent = () => {
    const navigate = useNavigate("");
    const {selectBoardNo} = useParams();
    const [board, setBoard] = useState([]);

    useEffect(()=> {
        const board = async() => {
            const rsp = await AxiosApi.HomeContent(selectBoardNo);
            if(rsp.status === 200) {
                const board = rsp.data;
                setBoard(board);
            }
        };
        board();
    }, []);

    const backToHomePlate = () => {
        navigate("/homeplate");
    }

    return( 
        <HomeContentDiv>
            <h3 className="Homeplate">HOME PLATE</h3>
            <ContentGrey>
            {board.map((boardItem) => (
                <div key={boardItem.boardNo}>
                    <h1>{boardItem.boardTitle}</h1>
                    <DivContents>      
                        <p>글번호 : {boardItem.boardNo}</p>
                        <p>날짜 : {boardItem.boardDate}</p>
                        <p>사용자 : 아직없음</p>
                    </DivContents>
                    <hr/>
                    <p>{boardItem.boardContent}</p>
                </div>
            ))}
            <Button onClick={backToHomePlate}><h3>목록으로 가기</h3></Button>
            </ContentGrey>
        </HomeContentDiv>
    );
};  

export default HomeContent;