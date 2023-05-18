import React from "react";
import styled from "styled-components";

const NewsBlock = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
    background-color: #f6f6f6;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    padding: 40px;
  h1{
    font-family: 'Nanum_Gothic';
    border-bottom: 2px solid black;
    padding-bottom: 40px;
  }
  p{
    font-family: 'Nanum_Gothic';
  }
`;

const NewsDetailPage = (props) => {
    return(
        <NewsBlock>
            <h1>{props.exp.news_Title}</h1>
            <img src={props.exp.news_Image_Url}alt="Error" />
            <p>{props.exp.news_Long_Content}</p>
        </NewsBlock>
    );
}

export default NewsDetailPage;