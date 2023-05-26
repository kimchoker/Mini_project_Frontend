import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import AxiosApi from "../Api/AxiosApi";
import Modal from "../utils/Modal";
import { UserContext } from "../context/UserStore";
import TokenAxiosApi from "../Api/TokenAxiosApi";

const BoardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 150px;
  margin-bottom: 100px;
  width: auto;
  height: auto;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Noto Sans KR', sans-serif;
  gap: 50px;
  .Board {
    font-size: 25px;
    color: #395144;
  }
  .write_header{
    display: flex;
    gap: 20px;
    }
    button{
    width: 80px;
    height: 40px;
    font-size: 12px;
    
    border: 1px solid #c6c6c6;
    border-radius: 15px;
    outline: none;
    
    background-color: #395144;
    color: white;
    cursor: pointer;
    }
    .input_title {
        width: 600px;
        height: 30px;
        font-size: 13px;
        font-weight: bold;
        border-radius: 15px;
        margin-left: 20px;
        border: 1px solid #c6c6c6;
        padding-left: 8px;
    }

    .contents {
    width: 800px; 
    height: 300px; 
    padding: 10px;
    font-size: 16px;
    border-radius: 15px;
    border: 1px solid #ccc;
    resize: none;
    font-family: 'Noto Sans KR', sans-serif;
    outline: none;
  }
`;



const Write = () => {
    const navigate = useNavigate();
    const [boardTitle, setBoardTitle] = useState("");
    const [boardContent, setBoardContent] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [modalText, setModalText] = useState("작성이 완료되었습니다.");
    const [type, setType] = useState("");
    const context = useContext(UserContext);
    const { memberNo, setMemberNo } = context;
    
    
    const restoreSession = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await TokenAxiosApi.userInfo(token);
            setMemberNo(response.data[0].memberNo);
          
        } catch (error) {
          console.error("세션 복구 중 오류 발생 : ", error);
        }
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        await restoreSession(); // restoreSession 비동기로 처리
      }
      fetchData(); // fetchData 함수 호출
    }, []); 

    const openModal = () => {
        setModalOpen(true);
    }
    
    const closeModal = () => {
        setModalOpen(false);
        
    }
    
    const nav = () => {
        navigate('/homeplate');
    }

    const handleBack = () => {
        setType("open");
        setModalText("작성중인 글은 저장되지 않습니다. 목록으로 이동하시겠습니까?");
        setModalOpen(true);
        
    }
    
    const writeGo = async() => {
        console.log("this is board title : " + boardTitle);
        console.log("this is board Contnet : " + boardContent);
        const board = await AxiosApi.writeBoard(memberNo, boardTitle, boardContent)
        if(board.data === true){
            navigate("/");
        }else{
            setModalOpen(true);
            setModalText("잘못 사용");
        }
    }

    const handleTitle = (event) =>{
        setBoardTitle(event.target.value);
    }

    const handleContent = (event) =>{
        setBoardContent(event.target.value);
    }

    return(
        <BoardBlock>
            <h3 className="Board">글쓰기</h3>
                <div className="write_header">
                    <input type="text" class="input_title" placeholder="제목을 입력하세요." value={boardTitle} onChange={handleTitle}/>
                        <button type="submit" onClick={writeGo}>작성 완료</button>
                        <button onClick={handleBack}>목록 보기</button>
                        <Modal open={modalOpen} type={type} close={closeModal} confirm={nav} header="BENCH CLEARING">
                            {modalText}
                        </Modal>
                </div>
                    <textarea class="contents" placeholder="글 내용" value={boardContent} onChange={handleContent}></textarea>
                    
            
            </BoardBlock>
    );
};

export default Write;