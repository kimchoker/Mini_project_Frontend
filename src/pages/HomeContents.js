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
        <>
            <h1>아자아자 화이팅</h1>
        </>
    );
};  

export default HomeContent;