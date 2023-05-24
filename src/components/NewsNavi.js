import React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";

const NewsNaviDiv = styled.div`
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
  }
`;

const NewsNavi = ({ onSelect, category, onEnter }) => {
  const location = useLocation();
  const isNewsHomeRoute = location.pathname === "/newshome";

  const newsMenu = [
    { name: "All", value: "전체 보기" },
    { name: "LatestNews", value: "최신순" },
    { name: "LikeNews", value: "좋아요순" },
    { name: "ComentNews", value: "댓글순" },
  ];

  return (
    <NewsNaviDiv>
      <ul>
        {newsMenu.map((newsItem) => (
          <li key={newsItem.name}>
            {isNewsHomeRoute ? (
              <span onClick={() => onSelect(newsItem.name)}>
                {newsItem.value}
              </span>
            ) : (
              <Link to="/NewsHome" onClick={() => onSelect(newsItem.name)}>
                {newsItem.value}
              </Link>
            )}
          </li>
        ))}
      </ul>
      <input
        type="text"
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            onEnter(event.target.value);
          }
        }}
      />
    </NewsNaviDiv>
  );
};

export default NewsNavi;
