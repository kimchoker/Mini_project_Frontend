import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import AxiosApi from "../Api/AxiosApi";
import NewsDetailContainer from "../components/NewsDetailContainer";

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

  .News {
    font-family: 'inter';
    font-size: 45px;
    transform: skew(-10deg);
    color: #395144;
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

const NewsViewNavi = styled.div`
  display: flex;
  list-style: none;
  gap: 80px;
  font-size: 25px;
  font-weight: bold;
  color: #395144;
  cursor: pointer;

  li:hover {
    transform: scale(1.05);
  }
`;

const View = () => {
  const location = useLocation();
  const [news, setNews] = useState([]);
  const navigate = useNavigate();
  const [newsId, setNewsId] = useState(location.state.id);

  useEffect(() => {
    const fetchNews = async () => {
      const rsp = await AxiosApi.getLongDetailNews(newsId);
      if (rsp.status === 200) setNews(rsp.data);
    };
    fetchNews();
  }, [newsId]);

  const goBacktoNews = () => {
    navigate("/newshome");
  };

  const goBack = () => {
    setNewsId(newsId - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goForward = () => {
    setNewsId(newsId + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <NewsBlock>
      <h1 className="News">NEWS</h1>
      {news.length === 0 ? (
        <h1>해당 기사가 없습니다</h1>
      ) : (
        <NewsGrey>
          <NewsDetailContainer
            exp={{
              news_Title: news[0].news_Title,
              news_Image_Url: news[0].news_Image_Url,
              news_Long_Content: news[0].news_Long_Content,
            }}
          />
          <NewsViewNavi>
            <li onClick={goBack}>&lt;</li>
            <li onClick={goBacktoNews}>목록으로 가기</li>
            <li onClick={goForward}>&gt;</li>
          </NewsViewNavi>
        </NewsGrey>
      )}
    </NewsBlock>
  );
};

export default View;
