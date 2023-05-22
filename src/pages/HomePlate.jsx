import React, { useEffect, useState } from "react";
import AxiosApi from "../Api/AxiosApi";
import styled from "styled-components";
import search from "../images/search.png";
import { useNavigate } from "react-router-dom";

const HomeContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    margin-bottom: 100px;
    width: auto;
    height: auto;
    justify-content: center;
    align-items: center;
    gap: 5px;
    @font-face {
        font-family: "inter";
        src: url(./fonts/Inter/Inter-VariableFont_slnt,wght.ttf);
    }
    .Homeplate {
        font-family: "inter";
        font-size: 45px;
        transform: skew(-10deg);
        color: #6f2727;
    }
    input {
        width: 160px;
        height: 30px;
    }
    img {
        width: 30px;
        height: 30px;
    }
    `;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    table {
        border-collapse: collapse;
        width: 1000px;
        border: 1px solid black;
    }

    th, td {
        padding: 8px;
        text-align: left;
        border-collapse: collapse;
        border: 1px solid black;
        border-bottom: 1px solid black;
    }

    td {
        text-align: center;
    }

    th {
        background-color: #f2f2f2;
        text-align: center;
    }

    .boardNo {
        width: 120px;
    }

    .boardTitle {
        width: 350px;
    }

    .boardDate {
        width: 250px;
    }

    tr:hover {
        background-color: #f5f5f5;
        cursor: pointer;
    }
    
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    align-items: center; 
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;

    input {
        width: 180px;
        height: 30px;
    }
    .image {
        height: 30px;
    }
    button {
        width:50px;
        background-color: #008CBA;
        border: none;
        border-radius: 5px;
        padding: 2px 2px;
        cursor: pointer;
    }
`;

const WriteButton = styled.div`
    margin-left: auto;
    button {
        width: 100px;
        height: 35px;
        background-color: #008CBA;
        font-size: 16px;
        border-radius: 5px;
        border: none;
        color: white;
        padding: 5px 5px;
        cursor: pointer;
    }
`;


const Homeplate = () => {
    const navigate = useNavigate("");

    const [board, setBoard] = useState();
    const [word, setWord] = useState("");
    const [filterBoard, setFilterBoard] = useState([]); // 필터링된 결과 저장하는 배열

    useEffect(()=> {
        const board = async() => {
            const rsp = await AxiosApi.Homeplate("ALL");
            if(rsp.status === 200) {
                setBoard(rsp.data);
                setFilterBoard(rsp.data);
            }
        };
        board();
    }, []);

    const getBoardNo = (selectBoardNo) => {
        navigate(`/homeplate/contents/${selectBoardNo}`);
   }

   const handleSearch = () => {
        const filtered = board.filter((item) => item.boardTitle.toLowerCase().includes(word.toLowerCase()));
        setFilterBoard(filtered);
    };

    const handleClick = (event) => {
        if(event.key === 'Enter') {
            handleSearch();
        }
    }

    const handleChnage = (event) => {
        setWord(event.target.value);
    }

    return (
        <HomeContentDiv>
        <h3 className="Homeplate">HOME PLATE</h3>
        <Container>
            <table>
                <thead>
                    <tr>
                        <th className="boardNo">글번호</th>
                        <th className="boardTitle">제목</th>
                        <th className="boardDate">날짜</th>
                    </tr>
                </thead>
            <tbody>
                {filterBoard.map((item) => (
                    <tr key={item.boardNo} onClick={() => getBoardNo(item.boardNo)}>
                        <td>{item.boardNo}</td>
                        <td>{item.boardTitle}</td>
                        <td>{item.boardDate}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </Container>
        <ButtonContainer>
            <InputContainer>
                <div>
                    <input type="text" value={word} placeholder="검색어를 입력하세요." onChange={handleChnage} onKeyDown={handleClick}/>
                </div>

                <div className="search">   
                    <button onClick={handleSearch}>
                        <img src={search} alt="/homeplate" className="image" />
                    </button>
                </div>  
            </InputContainer>
            <WriteButton>
                <button onClick={()=>navigate('/homeplate/write')}>글쓰기</button>
            </WriteButton>
        </ButtonContainer>
        </HomeContentDiv>
    );
};
export default Homeplate;