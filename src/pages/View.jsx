import React, { useEffect, useState} from "react";
import { useLocation, useNavigate} from "react-router-dom";
import styled from "styled-components";
import AxiosApi from "../Api/AxiosApi";
import NewsDetailContainer from "../components/NewsDetailContainer";
import Next from "../images/next.png"
import Previous from "../images/previous.png"

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

const DetailNewsNaviDiv = styled.ul`
    display: flex;
    flex-direction: rows;
    justify-content: center;
    align-items: center;
    gap: 100px;
    font-family: 'Nanum_Gothic';
    font-weight: bold;
    font-size: 30px;
    text-align: center;
  li{
    list-style: none;
  }
  li {
    color: black;
    border-right: 5px solid #395144;
  }
  li:nth-child(odd){
    padding-left: 100px;
    padding-right: 100px;
  }
  li:nth-child(2){
    border-right: none;
  }
  li:last-child {
      border-left: 5px solid #395144;
      border-right: none;
  }
  li:hover {
    cursor: pointer;
    color: #395144;
    transform: scale(1.10);
  }
`;

const LikeDislikeDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  gap: 150px;
  h2{
    font-family: 'inter';
    font-size: 30px;
    transform: skew(-10deg);
    color: #395144;

  }
  h2:hover{
    cursor: pointer;
    transform: scale(1.15);
  }
`;


const View = () => {
  const location = useLocation();
  const [newsId, setNewsId] = useState(location.state.id);
  const [resetNews, setResetNews] = useState(false);
  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  // 좋아요 싫어요 테스트 중
  const [like, setLike] = useState(12);
  const [dislike, setDislike] = useState(10);

  useEffect(()=>{
    const news = async()=>{
      const rsp = await AxiosApi.getLongDetailNews(newsId);
      if(rsp.status === 200) setNews(rsp.data);
    }
    news();
  },[newsId,resetNews])

  const previousNews = () => {
    setNewsId(newsId - 1);
    setResetNews(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextNews = () => {
    setNewsId(newsId + 1);
    setResetNews(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToNews = () => {
    navigate("/NewsHome"); 
  }
 
  const increaseValue = () =>{
    setLike(like+1);
  }
  const decreaseValue = () =>{
    setDislike(dislike+1);
  }
    return (
      <NewsBlock>
        <h1 className="News">NEWS</h1>
        <NewsGrey>
        {news.length === 0 ? (
        <h1>해당 기사 가 없습니다!!!</h1>
          ) : (
          news.map((news) => (
          <NewsDetailContainer
            key={news.news_Title}
              exp={{
                news_Title : news.news_Title,
                news_Image_Url : news.news_Image_Url,
                news_Long_Content : news.news_Long_Content
            }}
          />
        ))
      )}
      <DetailNewsNaviDiv>
        <li onClick={previousNews}>&lt;</li>
        <li onClick={backToNews}>목록으로 가기 </li>
        <li onClick={nextNews}>&gt;</li>
      </DetailNewsNaviDiv>
      <LikeDislikeDiv>
        <h2 onClick={increaseValue}>Like : {like}</h2>
        <h2 onClick={decreaseValue}>DisLike : {dislike}</h2>
      </LikeDislikeDiv>
      </NewsGrey>
      </NewsBlock>
  );
};

export default View;