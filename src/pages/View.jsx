import React, { useEffect, useState } from "react";
import { useLocation} from "react-router-dom";
import styled from "styled-components";
import AxiosApi from "../Api/AxiosApi";
import NewsDetailPage from "../components/NewsDetailPage";

const NewsBlock = styled.div`

    display: flex;
    flex-direction: column;
    margin-top: 200px;
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
    
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  button{
    border: none;
    background-color: transparent;
    font-family: 'inter';
    transform: skew(-10deg);
    font-weight: bold;
    color: #6f2727;
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
`

const CommentDiv = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
    background-color: #d6d6d6;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    padding: 40px;
`;

const CommnetBlock = styled.div`
  width: 800px;
  height: auto;
  display: flex;
  background-color: white;
  box-shadow: 10px 10px 10px rgb(180, 180, 180);
`;

const View = () => {
  const location = useLocation();
  const newsId = location.state.id;
  const [news, setNews] = useState([]);

  useEffect(()=>{
    const news = async()=>{
      const rsp = await AxiosApi.getNewsInfo(newsId);
      if(rsp.status === 200) setNews(rsp.data);
    }
    news();
  },[])

  console.log(newsId); 
  console.log(news);
    return (
      <NewsBlock>
        {
          news.map((news) =>(
              <NewsDetailPage exp={{news_Title : news.news_Title, news_Img : news.news_Img, news_Content : news.news_Content}}/>
          ))
        }
        <ButtonBox>
          <button><p>10</p>Like</button>
          <button><p>5</p>Dislike</button>
        </ButtonBox>
        <CommentDiv>
          <CommnetBlock><h3>아 노젬 뭐야</h3></CommnetBlock>
          <CommnetBlock><h3>저팀 정말 못한다</h3></CommnetBlock>
          <CommnetBlock><h3>아 진짜</h3></CommnetBlock>
          <CommnetBlock><h3>아 진짜</h3></CommnetBlock>
          <CommnetBlock><h3>아 진짜</h3></CommnetBlock>
          <CommnetBlock><h3>아 진짜</h3></CommnetBlock>
          <textarea></textarea>
        </CommentDiv>
      </NewsBlock>
    
  );
};

export default View;