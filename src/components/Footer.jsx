import React from "react";
import styled from "styled-components";

function Footer() {

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
        background-color: #6f2727;
        bottom: 0;
        left: 0;
        width: 100vw;
        height: 110px;

        .image {

        }

        @media(min-width: 768px) {
            display: none;
        }
    `;

    return(
        <FooterBlock>
            <DesktopFooter>
                <p>Copyright by Bench Clearing. All rights reserved. Since 2023</p>
            </DesktopFooter>

            <FooterNaviBar>

            </FooterNaviBar>
        </FooterBlock>

        
    );
};

export default Footer;