import styled from "styled-components";
import Doosan from "../images/Doosan.png"
import SSG from "../images/SSG.png"
import Hamhwa from "../images/Hanhwa.png"
import Heroes from "../images/Heroes.png"
import KIA from "../images/KIA.png"
import KT from "../images/KT.png"
import LG from "../images/LG.png"
import NC from "../images/NC.png"
import Samsung from "../images/Samsung.png"
import Lotte from "../images/Lotte.png"
import { useState } from "react";
import { useEffect } from "react";
import AxiosApi from "../Api/AxiosApi";
import SimpleSlider from "../components/Slick";

const Homeblock = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  display: block;
  text-align: center;
  width: 100vw;
  min-width: 1500px;
  height: 1000px;
  margin-top: 50px;
 `;

const DesktopHomeBlock = styled.div`
    @media(max-width: 768px) {
    display: none;
  }
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	margin: 175px 100px 0;
`;

const NoticeBlock = styled.div`
  width: 440px;
  min-width: 440px;
  height: 600px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid #c6c6c6;
  border-radius: 8px;
  position: absolute;
  left: 900px;

  h3{
    
    top: 10px;
    
  }

  .noticeNew {
    width: 400px;
    height: 460px;
    display: inline-block;
    position: absolute;
    top: 20px;
    right: 20px;

    .tr {
      width: 350px;
      text-align: center;
    }
  }  
`;

const WeeklyLineup = styled.div`
  width: 600px;
  height: 600px;
  border: 1px solid #c6c6c6;
  border-radius: 8px;
  position: absolute;
  left: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const TeamShortcut = styled.div`
  position: absolute;
  top: 850px; /* 원하는 수직 위치를 여기에 설정하세요 */
  left: 51%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  
  .image {
    width: 90px;
    height: 65px;
    margin-right: 2vw;
  }
`;

const MobileHomeBlock = styled.div`
    @media(min-width: 768px) {
        display: none;
    }
    display: flex;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;



const Home = () => {
  const [latestBoard, setLatestBoard] = useState();

  useEffect(()=>{
    const getLatestBoard = async() =>{
      const rsp = await AxiosApi.getLatestBoard("All");
      if(rsp.status === 200) setLatestBoard(rsp.data);
    }
    getLatestBoard();
    console.log("LatestBoard active")
  },[])
  

     return (
        <Homeblock>
            <DesktopHomeBlock>
                <Container>
                  <WeeklyLineup>
                    <SimpleSlider>

                    </SimpleSlider>
                  </WeeklyLineup>
                    <NoticeBlock>
                    <h3>홈플레이트 최신글 보기</h3>
                        <div className="noticeNew">
                            
                            <table>
                              <thead>
                                <tr>
                                  <th></th>
                                </tr>
                              </thead>
                              <tbody>
                              {latestBoard && latestBoard.map((latestBoard) => {
                                return (
                                  <tr key={latestBoard.boardNo}>
                                    <th>{latestBoard.boardNo}</th>
                                    <th>{latestBoard.boardTitle}</th>
                                    <th>{latestBoard.nickName}</th>
                                    <th>{latestBoard.boardDate}</th>
                                  </tr>
                                );
                              })}
                              </tbody>
                            </table>                            
                        </div>
                    </NoticeBlock>

                </Container>
                <TeamShortcut>
                    <a href="https://www.ssglanders.com/main" ><img src={SSG} alt="" className="image" /></a>
                    <a href="http://www.heroesbaseball.co.kr/index.do" ><img src={Heroes} alt="" className="image" /></a>
                    <a href="https://www.lgtwins.com/service/html.ncd?view=/pc_twins/twins_main/twins_main" ><img src={LG} alt="" className="image" /></a>
                    <a href="https://www.ktwiz.co.kr/sports/site/baseball/main.do" ><img src={KT} alt="" className="image" /></a>
                    <a href="https://tigers.co.kr/" ><img src={KIA} alt="" className="image" /></a>
                    <a href="https://www.ncdinos.com/" ><img src={NC} alt="" className="image" /></a>
                    <a href="http://www.samsunglions.com/" ><img src={Samsung} alt="" className="image" /></a>
                    <a href="https://www.giantsclub.com/html/index.asp?" ><img src={Lotte} alt="" className="image" /></a>
                    <a href="https://www.doosanbears.com/" ><img src={Doosan} alt="" className="image" /></a>
                    <a href="https://www.hanwhaeagles.co.kr/index.do" ><img src={Hamhwa} alt="" className="image" /></a>
                </TeamShortcut>
            </DesktopHomeBlock>

            <MobileHomeBlock>
            
            </MobileHomeBlock>
        </Homeblock>
    )
}
export default Home;