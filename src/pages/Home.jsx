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

const Homeblock = styled.div`
  display: block;
  text-align: center;
  width: 100vw;
  min-width: 1500px;
  height: 1000px;
  margin-top: 50px;
 `;

const Container = styled.div`
	display: flex;
	justify-content: center;
	margin: 175px 100px 0;
`;

const NoticeBlock = styled.div`
  width: 800px;
  height: 500px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid #c6c6c6;
  border-radius: 8px;
  position: relative;

  .noticeHot {
    width: 370px;
    height: 460px;
    background-color: #f6f6f6;
    display: inline-block;
    position: absolute;
    top: 20px;
    left: 20px;
    margin-right: 20px;
  }

  .noticeFight {
    width: 370px;
    height: 460px;
    background-color: #f6f6f6;
    display: inline-block;
    position: absolute;
    top: 20px;
    right: 20px;
    margin-left: 20px;
  }
`;

const StandingBlock = styled.div`
  width: 450px;
  height: 500px;
  margin-left: 50px;
  border: 1px solid #c6c6c6;
  border-radius: 8px;

	.indexTable { 
            width: 450px;
            height: 45px;
            border-collapse: collapse;
        }

        .index {
            height: 45px;
            border-bottom: 1px solid #c6c6c6;
        }
        
        tr {
            height: 45px;
        }
        th {
            height: 45px;
        }
`;

    const TeamShortcut = styled.div`
        position: absolute;
        top: 700px;
        right: 100px;
        width: 80vw;
        display: inline-block;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        
        .image {
            width: 90px;
            height: 65px;
            margin-right: 2vw;
            
        }

    `;

const Home = () => {

     return (
        <Homeblock>
            <Container>
                <NoticeBlock>
                    <div className="noticeHot">
                        <h3>홈플레이트 오늘의 인기글</h3>
                    </div>
                    <div className="noticeFight">
                        <h3>홈플레이트 오늘의 투기장</h3>
                    </div>
                </NoticeBlock>
                <StandingBlock>
                    <table className="indexTable">
                        <tr className="index">
                            <th>팀 이름</th>
                            <th>승</th>
                            <th>무</th>
                            <th>패</th>
                            <th>승률</th>
                            <th>승차</th>
                        </tr>
                    </table>
                </StandingBlock>
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
        </Homeblock>
        
    )
}
export default Home;