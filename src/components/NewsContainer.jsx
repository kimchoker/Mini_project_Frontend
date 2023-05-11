import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";

const NewsBlock = styled.div`
  width: auto;
  height: auto;
  display: flex;
  background-color: white;
  box-shadow: 10px 10px 10px rgb(180, 180, 180);
  
  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    box-shadow: 15px 15px 15px rgb(200, 200, 200);
  }
`;


const Images = styled.img`
  width: 200px;
  height: 120px;
  margin: 10px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    display: inline-block;
    position: relative;
  }

  h2:hover {
    color: #6f2727;
  }
`;





const NewsContainer = (props) => {
  const navigate = useNavigate();
  
  const getTheValue = (id) => {
    console.log(id);
    navigate("/newshome/View",{state:{id:id}});
  };
  
  return (
    <NewsBlock>
      <Images
        src={props.exp.news_Image_Url}
        alt=""
      />
      <Text onClick={()=>{getTheValue(props.exp.news_No)}}>
        <h2><b>{props.exp.news_Title}</b></h2>
        <p>{props.exp.news_Short_Content}</p>
      </Text>
    </NewsBlock>
  );
};

export default NewsContainer;
