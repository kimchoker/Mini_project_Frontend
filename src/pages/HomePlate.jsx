import React, { useEffect, useState } from "react";
import AxiosApi from "../Api/AxiosApi";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import search from "../images/search.png";
import Pagination from "../utils/Pagination";
import axios from "axios";
import Home from "./Home";


const Container = styled.div`

    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;

    .index #container .contents .left_cont {
        position: relative;
        float: left;
        margin-bottom: 15px;
        width: 700px;
    }

    tr {
        border-bottom : 2px solid black;
        border-left: 2px solid black;
        border-right: 2px solid black;
    }

    th {
        text-align: center;
        height: 40px;
    }

    th, td {
        border: 2px solid black;
    }


    tr:hover {
        cursor: pointer;
    }

    thead td {
        border-collapse: collapse;
        border: 2px solid black;
        text-align: right;
    }

    colgroup {
        display: table-column-group;
    }

    table, div {
        border-collapse: collapse;
    }

    .tbl_type {
        width: 100%;
        margin-bottom: 10px;
        background: #fff;
        border: 1px solid #ced0d7;
    }
    .tbl_box {
        padding-left: 100px;
        padding-right: 50px;
    }

    .tbl_type td {
        border-left: 2px solid black;
        border-right: 2px solid black;
        padding: 5px;
    }  

    .tbl_type td:first-child {
        border-left: none;
    }

    .tbl_type td:last-child {
        border-right: none;
    }

    .tbl_type thead td {
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        font-weight: bold;
    }

    .tbl_type thead tr td {
        text-align: center;
    }

    tbody {
        border-collapse: collapse;
    }

    .contents {
        width: 1300px;
        height: 800px;
        box-sizing: border-box;
    }
    
    thead {
        display: table-header-group;
        vertical-align: middle;
        box-sizing: border-box;
        border: 2px solid black;
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
    }
    
    .write button {
        width: 90px;
        height: 35px;
        background-color:#008CBA;
        color: #fff;
        border: none;
        padding: 5px 5px;
        margin: 5px 5px;
        border-radius: 5px;
        margin-left : 2px;
        margin-right: 2px;
        cursor: pointer;
    }

    p {
        @font-face {
        font-family: "inter";
        src: url(./fonts/Inter/Inter-VariableFont_slnt,wght.ttf);
    }
        color: #6f2727;
    }

    .search-container {
        display: flex;
        align-items: center;
    }
    
    .search-container button {
        width: 40px;
        height: 40px;
        background-color: #008CBA;
        border: 1px solid #ccc;
        border-radius : 5px;
        padding: 5px 10px;
        margin-left: 2px;
        cursor: pointer;
    }

    .search-container input {
        width: 180px;
        height: 35px;
        padding: 0 10px;
        border: 2px solid black;
        border-radius: 4px;
        margin-right: 2px;
        margin-left: 2px;
        margin-bottom: 2px;
    }

    .search-container img {
        width: 20px;
        height: 20px;
    }

    .homeplate {
        font-family: 'inter';
        transform: skew(-10deg);
        color: #6f2727;
        text-align: center;
    }
`;



const Homeplate = () => {
    const navigate = useNavigate("");

    const [board, setBoard] = useState([]);
    const [boardNo, setBoardNo] = useState("");
    const [boardTitle, setBoardTitle] = useState("");
    const [boardDate, setBoardDate] = useState("");
    const [boardContent, setBoardContent] = useState("");

    const [word, setWord] = useState("");

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(5);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPost = board.slice(firstPostIndex, lastPostIndex);


    useEffect(()=> {
        const board = async() => {
            const rsp = await AxiosApi.Homeplate("ALL");
            if(rsp.status === 200) {
                const board = rsp.data;
                const boardNo = board.map(boardTitle => boardTitle.boardNo);
                const boardTitle = board.map(boardTitle => boardTitle.boardTitle);
                const boardDate = board.map(boardTitle => boardTitle.boardDate);
                setBoardNo(boardNo);
                setBoardTitle(boardTitle);
                setBoardDate(boardDate);
            }
        };
        board();
    }, []);

    // 검색창
    const onSubmit = async () => {
       if(word.trim() === "") {
            return;
    }
        navigate(`/homeplate/search/${word}`);
    };

    const getBoardNo = (selectBoardNo) => {
        navigate(`/homeplate/contents/${selectBoardNo}`);
   }

    return (
        <Container>
            <h1>.</h1>
            <br />
            <h1 className="homeplate">HOME PLATE</h1>
            <div>
                <div className="contents">
                    <div className="left_cont">
                        <div className="tbl_box">
                            <table className="tbl_type">
                                <colgroup>
                                    <col width="100px"/>
                                    <col width="400px"/>
                                    <col width="200px"/>
                                </colgroup>
                                <thead>
                                    <tr>
                                        <td>글번호</td>
                                        <td>제목</td>
                                        <td>날짜</td>
                                    </tr>
                                </thead>
                            <tbody>
                                {boardNo && boardNo.map((boardNo, index)=>(
                                    <tr key = {index} onClick={()=>getBoardNo(boardNo)}>
                                        <th>{boardNo}</th>
                                        <th>{boardTitle[index]}</th>
                                        <th>{boardDate[index]}</th>
                                    </tr>
                                ))}
                            </tbody>

                               </table>
                           </div>
                    </div>
                </div>
            </div>
            <footer>

             <div className="search-container">
                <input onChange={(e) => {
                    setWord(e.target.value);
                }} 
                onKeyPress={(e)=>{
                    if(e.key === 'Enter') {
                        onSubmit();
                    }
                }}placeholder="검색어를 입력하세요." value={word}/>

                <button type="submit" onClick={()=> {
                    onSubmit();
                }}>
                    <img src = {search} alt="/homeplate" className="image"/>
                </button>
            </div>

            {currentPost && currentPost.map(board => ({
                boardNo: board.boardNo,
                boardTitle: board.boardTitle,
                boardDate: board.boardDate,
            }))}
            
            <Pagination totalPosts={board.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>

                <div className="write">
                    <button onClick={()=>navigate('/homeplate/write')}>글쓰기</button>
                </div>
            </footer>
        </Container> 
       
    );
};
export default Homeplate;