import React, { useState } from "react";
import styled from "styled-components";

const PageNaviUl = styled.ul`
  display: flex;
  gap: 30px;
  li{
    font-family: 'Noto Sans KR', sans-serif;
    list-style: none;
    font-size: 20px;
    font-weight: bold;
    border-right: 3px solid #395144;
    padding-right: 30px;
  }
  li:last-child{
    border-right: none;
  }
  li:hover{
    transform: scale(1.05);
    cursor: pointer;
  }
  
`;

const Pagination = ({totalData, setCurrentPage}) => {
    
  const [pageNumberLimit, setPagerNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);
  const pages = [];
  const TotalPage = Math.ceil(totalData/10);

  for(let i = 1; i<=TotalPage; i++){
    pages.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(event.target.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const renderPageNumber = pages.map((number)=>{
    if(number < maxPageNumberLimit+1 && number>minPageNumberLimit){
      return(<li key={number} id={number} onClick={handleClick}>{number}</li>)
    }else{
      return null;
    }})

  const handleNext= () =>{
    if(TotalPage >= minPageNumberLimit+pageNumberLimit){
      setCurrentPage(maxPageNumberLimit + 1);
      setMinPageNumberLimit(maxPageNumberLimit);
      setMaxPageNumberLimit(maxPageNumberLimit+pageNumberLimit);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
  const handlePrev = () => {
    if(minPageNumberLimit-pageNumberLimit >= 0){
      setCurrentPage(minPageNumberLimit - pageNumberLimit + 1);
      setMinPageNumberLimit(minPageNumberLimit-pageNumberLimit);
      setMaxPageNumberLimit(minPageNumberLimit);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  return (
    <PageNaviUl>
      <li onClick={handlePrev}>&lt;</li>
        {renderPageNumber}   
      <li onClick={handleNext}>&gt;</li>
    </PageNaviUl>
  );
}

export default Pagination;