import React, { useEffect, useState, useCallback } from "react";
import AxiosApi from "../Api/AxiosApi";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import Pageination from "../utils/Pagination";
import HomePlateNavi from "../components/HomePlateNavi";
import HomePlateContainer from "../components/HomePlateContainer";

const BoardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  margin-bottom: 100px;
  width: auto;
  height: auto;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  gap: 50px;
  .Board {
    font-family: 'inter';
    font-size: 45px;
    transform: skew(-10deg);
    color: #395144;
  }
`;


const BoardTable = styled.table`
  width: 1200px;
  height: auto;
  border-radius: 8px;
  border-collapse: collapse;
  padding: 30px;
  font-family: 'Noto Sans KR', sans-serif;

  tr {
    border-bottom: 5px solid #395144;
  }

  thead {
    font-size: 20px;
    background-color: #395144;
    color: #f0ebce;
    margin-bottom: 100px; // Apply margin-bottom to the thead element
  }

  tbody tr:last-child {
    border: none;
  }

  h2 {
    align-items: center;
  }
`;


const HomePlate = () => {
  const [board, setBoard] = useState([]);
  const [category, setCategory] = useState('All');
  const [totalData, setTotlaData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  
  useEffect(() => {
    const getShortDetailNews = async () => {
      const rsp = await AxiosApi.getBoard(category ,currentPage);
      if (rsp.status === 200) setBoard(rsp.data);
    }
    getShortDetailNews();
  }, [category, currentPage]);

  useEffect(() => {
    const getNewsPages = async () => {
      const rsp = await AxiosApi.getBoardPage(category);
      if(rsp.status===200)  setTotlaData(rsp.data);
    }
    getNewsPages();
  },[category]);
  
  const onSelect = useCallback(category => {
    setCategory(category);
    setCurrentPage(1);
    setMaxPageNumberLimit(5);
    setMinPageNumberLimit(0);
  }, []);

  const onEnter = useCallback(category =>{
      setCategory(category);
      setCurrentPage(1);
      setMaxPageNumberLimit(5);
      setMinPageNumberLimit(0);
  },[]);

return (
    <BoardBlock>
      <h1 className="Board">HOMEPLATE</h1>
      <HomePlateNavi category={category} onSelect={onSelect} onEnter={onEnter}/>
      <BoardTable>
        <thead>
          <tr>
            <th>보드 번호</th>
            <th colSpan={3}>글 제목</th>
            <th>글 쓴이</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
        {board.length === 0 ? (
            <tr style={{ textAlign: "center", fontSize: "24px" }}>
              <td colSpan={6}>{`${category}와 일치하는 검색결과는 없습니다.`}</td>
            </tr>
          ) : (
          board.map((boardItem) => (
          <HomePlateContainer
            key={boardItem.boardNo}
              exp={{
                boardNo: boardItem.boardNo,
                boardTitle: boardItem.boardTitle,
                nickName: boardItem.nickName,
                boardDate: boardItem.boardDate
            }}
          />
        ))
      )}
      </tbody>
      </BoardTable>
      <Pageination 
        currentPage={currentPage} 
        totalData={totalData} 
        setCurrentPage={setCurrentPage} 
        maxPageNumberLimit={maxPageNumberLimit} 
        minPageNumberLimit={minPageNumberLimit} 
        setMaxPageNumberLimit={setMaxPageNumberLimit} 
        setMinPageNumberLimit={setMinPageNumberLimit}/>
    </BoardBlock>
    

  )
};
  
  export default HomePlate;
  