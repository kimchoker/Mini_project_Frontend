import React, { useEffect, useState, useCallback } from "react";
import AxiosApi from "../Api/AxiosApi";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import Pageination from "../utils/Pagination";
import HomePlateNavi from "../components/HomePlateNavi";


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

const NewsNavi = styled.div`
  display: flex;
  gap: 30px;
  list-style: none;
`;

const BoardTable = styled.table`
    width: 1200px;
    height: auto;
    border-radius: 8px;
    border-collapse: collapse;
    padding: 30px;
    font-family: 'Noto Sans KR', sans-serif;
    tr{
        border-bottom: 5px solid #395144;
    }
    thead tr{
      font-size: 20px;
      background-color: #395144;
      color: #F0EBCE;
    }
    tbody tr:last-child{
      border: none;
    }
`;


const HomePlate = () => {
  const [shortBoard, setShortBoard] = useState([]);
  const [totalData, setTotalData] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [cat , setCat] = useState("All");
  const [search, setSearch] = useState();

  const onSelect = useCallback(category => {
    setCat(category);
    setSearch("")
    setCurrentPage(1);
  }, []);
  const onEnter = useCallback(search =>{
    setCat("");
    setSearch(search);
    setCurrentPage(1);
  },[])

return (
  <BoardBlock>
    {cat}
    {search}
    <HomePlateNavi onSelect={onSelect} onEnter={onEnter}/>
    <BoardTable>
      <thead>
        <tr>
          <th>보드 번호</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>날짜</th>
        </tr>
      </thead>
    </BoardTable>
    <Pageination totalData = {totalData}  setCurrentPage = {setCurrentPage}/>
  </BoardBlock>
  )
};
  
  export default HomePlate;
  