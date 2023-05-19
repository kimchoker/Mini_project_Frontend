import React from "react";
import { styled } from "styled-components";

const NewsNaviListContainer = styled.div`
  display: flex;
  list-style: none;
  gap: 37px;
  font-family: 'Nanum_Gothic';
  font-weight: bold;
  font-size: x-large;

  li {
    color: black;
    border-right: 5px solid #395144;
    padding-right: 30px;
    padding-bottom: 10px;
    position: relative;
    display: inline-block;
  }

  li:last-child {
    border: none;
  }

  li:hover {
    cursor: pointer;
    color: #395144;
    transform: scale(1.05);
  }
`;

const NewsNaviDivs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  input {
  width: 580px;
  height: 70px;
  font-size: 15px;
  border: 0;
  border-radius: 15px;
  outline: none;
  padding-left: 10px;
  background-color: #f6f6f6;
  text-align: center;
}
`;

const NewsNavi = ({ onSelect, category, onEnter }) => {
  
  const newsMenu = [
    { name: "All", value: "전체 보기" },
    { name: "LatestNews", value: "최신순" },
    { name: "LikeNews", value: "좋아요순" },
    { name: "ComentNews", value: "댓글순" },
  ];

  return (
    <NewsNaviDivs>
    <NewsNaviListContainer>
        {newsMenu.map((newsItem) => (
              <li key={newsItem.name} onClick={() => onSelect(newsItem.name)}>
                {newsItem.value}
              </li>
            )
        )}
      </NewsNaviListContainer>
      <input type="text" placeholder="검색" onKeyPress={(event) => {
          if (event.key === "Enter") {
            onEnter(event.target.value);
          }
        }}
      />
      </NewsNaviDivs>
  );
};

export default NewsNavi;
