import React, { useEffect, useState } from "react";
import AxiosApi from "../Api/AxiosApi";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import Pageination from "../utils/Pagination";


const BoardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  margin-bottom: 100px;
  width: auto;
  height: auto;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  .Board {
    font-family: 'inter';
    font-size: 45px;
    transform: skew(-10deg);
    color: #395144;
  }
`;

const BoardGrey = styled.table`
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

const BoardNaviDiv = styled.ul`
  display: flex;
  gap: 40px;
  li{
    list-style: none;
  }
  li:hover{
    cursor: pointer;
  }
`;

const HomePlate = () => {

  return (
    <>
        <h1>This is the baord page</h1>
        <h1>This is the baord page</h1>
        <h1>This is the baord page</h1>
        <h1>This is the baord page</h1>
        <h1>This is the baord page</h1>
        <h1>This is the baord page</h1>
        <h1>This is the baord page</h1>
    </>
  )
};
  
  export default HomePlate;
  