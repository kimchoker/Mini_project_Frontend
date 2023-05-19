import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchImg from "../images/search.png"
import NoficationImg from "../images/nofication.png";
import { useContext } from "react";
import { UserContext } from "../context/UserStore";
import LoginImg from "../images/login.png"
import MypageImg from "../images/mypage.png"


    const FooterBlock = styled.div`
        
    `;

    const DesktopFooter = styled.div`
        width: 100vw;
        height: 150px;
        background-color: #704F4F;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: white;

        @media(max-width: 768px) {
            display: none;
        }
    `;

    const FooterNaviBar = styled.div`
        display: flex;
        position: fixed;
        background-color: #704F4F;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 70px;
        justify-content: space-between;
        align-items: center;

        .search {
            margin-left: 50px;
            width: 40px;
            height: 40px;
            
            
        }
        .nofication {
            width: 40px;
            height: 40px;
            
           
        }
        .login {
            width: 40px;
            height: 40px;
            margin-right: 50px;
            
        }
        .mypage {
            width: 40px;
            height: 40px;
            margin-right: 50px;
            
        }

        @media(min-width: 768px) {
            display: none;
        }
    `;


const Footer = () => {

    const { isLoggedIn, handleLogout } = useContext(UserContext);
    

    return(
        <FooterBlock>
            <DesktopFooter>
                <p>Copyright by Bench Clearing. All rights reserved. Since 2023</p>
            </DesktopFooter>

            <FooterNaviBar>
                <Link to="/search">
                    <img src={SearchImg} alt="search" className="search"/>
                </Link>
                <Link to="/nofication">
                    <img src={NoficationImg} alt="nofication" className="nofication" />
                </Link>
                {isLoggedIn ? (
                    <Link to="/mypage">
                        <img src={MypageImg} alt="mypage" className="mypage"/>
                    </Link>
                        ) : (
                    <Link to="/login">
                        <img src={LoginImg} alt="login" className="login" />
                    </Link>
                )}    
            </FooterNaviBar>
        </FooterBlock>

        
    );
};

export default Footer;