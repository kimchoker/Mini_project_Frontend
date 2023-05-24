import React from "react";
import { styled } from "styled-components";

const NewsNaviDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 35px;
  li {
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: bold;
    list-style: none;
    font-size: 20px;
  }
  li:hover {
    cursor: pointer;
    transform: scale(1.05);
    cursor: pointer;
  }
  input{
    width: 200px;
    height: 32px;
    font-size: 15px;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
  }
`;

const HomePlateNavi = ({ onSelect, onEnter }) => {

  const newsMenu = [
    { name: "All", value: "전체 보기" },
    { name: "Latest", value: "최신순" },
    { name: "Latest", value: "글쓰기" },
  ];

  return (
    <NewsNaviDiv>
      {newsMenu.map((newsItem) => (
        <ul key={newsItem.name}>
            <div>
              <li onClick={() => onSelect(newsItem.name)}>
                {newsItem.value}
              </li>
            </div>
        </ul>
      ))}
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

export default HomePlateNavi;
