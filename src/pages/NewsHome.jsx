import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import AxiosApi from "../Api/AxiosApi";
import NewsContainer from"../components/NewsContainer";
import Pagination from "../utils/Pagination";

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
        transform: skew(-10deg);
        color: #6f2727;
    }
    
`;

const NewsGrey = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 1000px;
    background-color: #d6d6d6;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px;
`;

const NewsHome = () => {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerpage, setPosetPerPage] = useState(8);
   
    useEffect (()=>{
        const news = async() => {
            const rsp = await AxiosApi.getNews("ALL");
            if(rsp.status === 200)  setNews(rsp.data);
        }
        news();
    },[])

    const lastPostIndex = currentPage * postPerpage;
    const firtPostIndex = lastPostIndex - postPerpage
    const currentPost = news.slice(firtPostIndex, lastPostIndex);
    
    return (
        <NewsBlock> 
            <h1 className="News">NEWS</h1>
            <NewsGrey>  
                {currentPost && currentPost.map(news => {
                    return(
                        <NewsContainer  exp = {{news_No : news.news_No,
                             news_Title : news.news_Title}} />
                    )
                })}
            </NewsGrey>
            <Pagination totalPosts={news.length} postsPerPage={postPerpage} setCurrentPage={setCurrentPage}/>
        </NewsBlock> 
    )
}
export default NewsHome;