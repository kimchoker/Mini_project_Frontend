import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate} from "react-router-dom";
import AxiosApi from "../Api/AxiosApi";
import Modal from "../utils/Modal";

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
    const [modalOpen, setModalOpen] = useState(false);
    const [modalText, setModalText] = useState("작성이 완료되었습니다.");
    const [type, setType] = useState("");
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
    
    const writeGo = () => {
        
    }

    return(
        <BoardBlock>
            <h3 className="Board">글쓰기</h3>
                <div className="write_header">
                    <input type="text" class="input_title" placeholder="제목을 입력하세요." />
                        <button type="submit" onClick={writeGo}>작성 완료</button>
                        <button onClick={handleBack}>목록 보기</button>
                        <Modal open={modalOpen} type={type} close={closeModal} confirm={nav} header="BENCH CLEARING">
                            {modalText}
                        </Modal>
                </div>
                    <textarea class="contents" placeholder="글 내용"></textarea>
                    
            
            </BoardBlock>
    );
};

export default Write;