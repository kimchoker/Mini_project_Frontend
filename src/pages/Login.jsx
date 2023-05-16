import React from "react"
import styled from "styled-components"
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AxiosApi from "../Api/AxiosApi";
import { UserContext } from "../context/UserStore";
import Modal from "../utils/Modal";


    const LoginBlock = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 600px;
    
    `;

    const LoginBox = styled.div`
    @font-face {
        font-family: "nanum";
        src: url(./components/styles/fonts/NanumGothic/NanumGothic-Regular.ttf);
    }
        margin-top: 105px;
        width: 400px;
        height: 325px;
       

        .login_button{
            margin-left: 75px;
            margin-top: 50px;
            width: 305px; /* 원하는 너비 설정 */
            height: 45px; /* 높이값 초기화 */
            line-height : normal; /* line-height 초기화 */
            
            font-family: inherit; /* 폰트 상속 */
            border: 1px solid #c6c6c6;
            border-radius: 5px; /* iSO 둥근모서리 제거 */
            outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            background-color: #395144;
            color: white;
        }
        .login_button:active {
            background-color: #c7c7c7;
        }

        .elseLink1 {
            margin-left: 80px;
            text-decoration: none;
            color: black;
            font-family: 'nanum';
            font-size: 10px;
            
        }
        .elseLink2 {
            text-decoration: none;
            color: black;
            margin-left: 190px;
            
            transform: skew(-10deg);
            font-size: 10px;
            
        }
    `;


    const Input = styled.input`

        
        margin-left: 75px;
        margin-top: 20px;
        width: 300px; /* 원하는 너비 설정 */
        height: 40px; /* 높이값 초기화 */
        line-height : normal; /* line-height 초기화 */
        
        font-family: inherit; /* 폰트 상속 */
        border: 1px solid #c6c6c6;
        border-radius: 5px; /* iSO 둥근모서리 제거 */
        outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
        font-size: 16px;
        font-weight: bold;
        
        &::placeholder {
        color: #c6c6c6;
        }
       
    `;
    

    const Login = () => {

        const context = useContext(UserContext);
        const { setUserId, setPassword, handleLogin } = context;
        const navigate = useNavigate(); // 라우터 이동을 하기 위해서 

        // 키보드 입력 
        const [inputId, setInputId] = useState("");
        const [inputPw, setInputPw] = useState("");

        // 오류 메시지 출력
        const [idMsg, setIdMsg] = useState("");
        const [pwMsg, setPwMsg] = useState("");

        //팝업 처리
        const [modalOpen, setModalopen] = useState(false);
        const closeModal = () => {
            setModalopen(false);
        }

        const onClickLogin = async() => {
            // 로그인을 위한 axios 호출
            const response = await AxiosApi.memberLogin(inputId, inputPw);
            console.log(response.data);
            if(response.data === true) {
      
              setUserId(inputId);
              setPassword(inputPw);
              handleLogin();
              navigate("/");
            } else {
                console.log("로그인 에러");
                setModalopen(true);
            }
          }

          const onChangeId = (e) => {
            setInputId(e.target.value);
        }
    
        const onChangePw = (e) => {
            const passwordCurrent = e.target.value;
            setInputPw(passwordCurrent)
          }


        return (
            <LoginBlock>
                
                <LoginBox>
                <div className="item2">
                    <Input placeholder="아이디" value ={inputId} onChange={onChangeId} />
                   
                </div>

                <div className="item2">
                    <Input placeholder="비밀번호"  value ={inputPw} onChange={onChangePw} />
                </div>
                <div className="item2">
                    <button className="login_button"  onClick={onClickLogin}>LOGIN</button>
                </div>
                <div className="else">
                    <Link to="/findpw" className="elseLink1" >비밀번호 찾기</Link>
                    <Link to="/signup" className="elseLink2">회원가입</Link>
                </div>
                </LoginBox>
                <Modal open={modalOpen} close={closeModal} header="오류">
              아이디 및 패스워드를 확인하세요 
            </Modal>
            </LoginBlock>
        )
    }
    export default Login;