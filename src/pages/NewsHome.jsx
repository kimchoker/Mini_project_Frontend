import React, { useCallback } from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import AxiosApi from "../Api/AxiosApi";
import NewsContainer from"../components/NewsContainer";
import NewsNavi from "../components/NewsNavi";
import Test from "./Navbar"
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import Pagination from "../components/Paginatoin";
const NewsBlock = styled.div`

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
    src: url(./fonts/Inter/Inter-VariableFont_slnt\,wght.ttf);
    }
    .News {
        font-family: 'inter';
        font-size: 45px;
        transform: skew(-10deg);
        color: #6f2727;
    }
    
`;

const NewsGrey = styled.div`
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


const NewsHome = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('All');
  const [resetNews, setResetNews] = useState(false);
  const [totalPage, setTotlaPage] = useState(0);
  useEffect(() => {
    const News = async () => {
      const rsp = await AxiosApi.getShortDetailNews(category ,1);
      if (rsp.status === 200) setNews(rsp.data);
    }
    News();
  }, [category,resetNews]);

  useEffect(() => {
    const getTotalPage = async () => {
      const rsp = await AxiosApi.getNewsSize(category);
      if(rsp.status===200)  setTotlaPage(rsp.data);
    }
    getTotalPage();
  },[category,resetNews]);

  const onSelect = useCallback(category => {
    setCategory(category);
    setResetNews(true); 
  }, []);
  const onEnter = useCallback(category =>{
      setCategory(category);
      setResetNews(true)
  },[])
  
  return (
    <NewsBlock>
      <h1 className="News">NEWS</h1>
      <NewsNavi category={category} onSelect={onSelect} onEnter={onEnter}/>
      <NewsGrey>
      {news.length === 0 ? (
        <h2>{category}와 일치하는 검색결과는 없습니다.</h2>
          ) : (
          news.map((newsItem) => (
          <NewsContainer
            key={newsItem.news_No}
              exp={{
                news_No: newsItem.news_No,
                news_Title: newsItem.news_Title,
                news_Image_Url: newsItem.news_Image_Url,
                news_Short_Content: newsItem.news_Short_Content
            }}
          />
        ))
      )}
      </NewsGrey>
      <Pagination value={totalPage}/>
    </NewsBlock>
  );
}

export default NewsHome;
  