import React from "react";
import styled from "styled-components";

const NewsBlock = styled.div`
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

const NewsDetailPage = (props) => {
    return(
        <NewsBlock>
            <h1>{props.exp.news_Title}</h1>
            <img src="https://firebasestorage.googleapis.com/v0/b/miniproject-5e4db.appspot.com/o/Img01.jpg?alt=media&token=fbfe0360-0873-4e3d-9dbe-1077bf52f415" alt="Error" />
            <p>{props.exp.news_Content}</p>
        </NewsBlock>
    );
}

export default NewsDetailPage;