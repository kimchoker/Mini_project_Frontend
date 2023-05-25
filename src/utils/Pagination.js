import React, { useState } from "react";
import styled from "styled-components";

const PageNaviUl = styled.ul`
  display: flex;
  gap: 30px;
  li {
    font-family: 'Noto Sans KR', sans-serif;
    list-style: none;
    font-size: 20px;
    font-weight: bold;
    border-right: 3px solid #395144;
    padding-right: 30px;
    cursor: pointer;
  }
  li:last-child {
    border-right: none;
  }
  li:hover {
    transform: scale(1.05);
  }
  .selected {
    color: #395144;
  }
`;

const Pagination = ({ currentPage, totalData, setCurrentPage}) => {
  const [pageNumberLimit, setPagerNumberLimit] = useState(5);
  const pages = [];
  const TotalPage = Math.ceil(totalData / 10);



  for (let i = 1; i <= TotalPage; i++) {
    pages.push(i);
  }

  const handleClick = (event) => {
    setCurrentPage(event.target.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getMaxBoundaries = () => {
    for(let i = 1; i < Math.ceil(TotalPage / pageNumberLimit) ; i++){
      if(currentPage < i * pageNumberLimit){
        return i * pageNumberLimit;
      }
    }
  }
  const maxPageNumberLimit = getMaxBoundaries();
  const minPageNumberLimit = getMaxBoundaries() - pageNumberLimit;

  const renderPageNumber = pages.map((number) => {
    console.log(maxPageNumberLimit);
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      const isCurrentPage = number === parseInt(currentPage);
      return (
        <li
          key={number}
          id={number}
          className={isCurrentPage ? "selected" : ""}
          onClick={handleClick}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  const handleNext = () => {
    if (TotalPage >= minPageNumberLimit + pageNumberLimit) {
      setCurrentPage(maxPageNumberLimit + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  const handlePrev = () => {
    if (minPageNumberLimit - pageNumberLimit >= 0) {
      setCurrentPage(minPageNumberLimit - pageNumberLimit + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <PageNaviUl>
      <li onClick={handlePrev}>&lt;</li>
      {renderPageNumber}
      <li onClick={handleNext}>&gt;</li>
    </PageNaviUl>
  );
};

export default Pagination;
