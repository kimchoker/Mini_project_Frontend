import React, { useEffect, useState} from "react";
import { useLocation} from "react-router-dom";
import styled from "styled-components";
import AxiosApi from "../Api/AxiosApi";
import NewsDetailContainer from "../components/NewsDetailContainer";
import NewsNavi from "../components/NewsNavi";

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
        src: url(./fonts/Inter/Inter-VariableFont_slnt,wght.ttf);
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


const View = () => {
  const location = useLocation();
  const newsId = location.state.id;
  const [news, setNews] = useState([0]);

  useEffect(()=>{
    const news = async()=>{
      const rsp = await AxiosApi.getLongDetailNews(newsId);
      if(rsp.status === 200) setNews(rsp.data);
    }
    news();
  },[newsId])



    return (
      <NewsBlock>
        <h1 className="News">NEWS</h1>
        <NewsGrey>
            <NewsDetailContainer exp={{news_Title : news[0].news_Title, news_Image_Url : news[0].news_Image_Url, news_Long_Content : news[0].news_Long_Content}}/>
        </NewsGrey>
      </NewsBlock>
  );
};

export default View;