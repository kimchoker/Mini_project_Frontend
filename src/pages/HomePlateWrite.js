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
    font-family: 'inter';
    font-size: 45px;
    transform: skew(-10deg);
    color: #395144;
  }
  .write_header{
    display: flex;
    gap: 50px;
    }
    button{
    width: 120px;
    height: 60px;
    font-size: 15px;
    font-weight: bold;
    border: 0;
    border-radius: 15px;
    outline: none;
    padding-left: 10px;
    background-color: rgb(233, 233, 233);
    cursor: pointer;
    }
    .input_title {
        width: 300px;
        height: 60px;
        font-size: 20px;
        font-weight: bold;
        border-radius: 15px;
    }

`;



const Write = () => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const [modalText, setModalText] = useState("작성이 완료되었습니다.");
    const openModal = () => {
        setModalOpen(true);
    }
    
    const closeModal = () => {
        setModalOpen(false);
        navigate('/homeplate');
    }

    const handleBack = () => {
        navigate('/homeplate');
    }
    

    return(
        <BoardBlock>
            <h1 className="Board">HOME PLATE</h1>
                <div className="write_header">
                    <input type="text" class="input_title" placeholder="제목을 입력하세요." />
                        <button type="submit" onClick={openModal}>작성 완료</button>
                        <button onClick={handleBack}>목록 보기</button>
                        <Modal open={modalOpen} close={closeModal} header="알림">
                            {modalText}
                        </Modal>
                </div>
                    <textarea class="contents" placeholder="글 내용"></textarea>
                    
            </BoardBlock>
    );
};

export default Write;