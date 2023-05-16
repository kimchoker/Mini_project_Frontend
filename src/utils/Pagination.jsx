import React from "react";
import styled from "styled-components";



const ButtonBox = styled.div`
  display: flex;
  gap: 30px;
  button {
    border: none;
    background-color: transparent;
    font-family: 'inter';
    transform: skew(-10deg);
    font-weight: bold;
    color: #395144;
    font-family: 'inter';
    font-weight: 800;
    font-size: 30px;
    transform: skew(-10deg);
  }
  button:hover{
    transition: all 0.1s linear;
    font-size: 35px;
    text-shadow: white 2px 2px;
  }
`;


const Pagination = (props) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pages.push(i);
  }
  
  return (
    <ButtonBox>
      {pages.map((page, index) => (
        <button key={index} onClick={() => props.setCurrentPage(page)}>{page}</button>
      ))}
    </ButtonBox>
  );
};

export default Pagination;
