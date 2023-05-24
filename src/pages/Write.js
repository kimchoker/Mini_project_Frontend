import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Modal from "../utils/Modal";


const Container = styled.div`
    width: 800px;
    height: 750px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f3f3f3;
    border: 1px solid #ccc;
    border-radius: 2px;

    .write_header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;

        button {
            margin-left: 10px;
        }
    }
    .input_title {
        width: 300px;
        height: 40px;
        padding: 10px;
        font-size: 20px;
        font-weight: bold;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-sizing: border-box;
        margin-right: 10px;
    }
    input[type="file"] {
        border-radius: 2px;
        color: darkblue;
        width: 250px;
        height: 30px;
        cursor: pointer;
    }
    
    .category {
        width: 150px;
        height: 30px;
        border: 2px solid black;
    }

    button {
        width: 100px;
        height: 30px;
        background-color: #008CBA;
        color: #fff;
        border: none;
        border-radius: 5%;
        cursor: pointer;
        font-size: 15px;
    }

    .contents {
        width: 795px;
        height: 500px;
    }
    .fontSize {
        width: 150px;
        height: 30px;
        margin-right: 5px;
        margin-left: 5px;
        border: 2px solid black;
    }

    .color {
        width: 80px;
        height: 30px;
        margin-right: 5px;
        margin-left: 5px;
        border: 2px solid black;
    }
    
    p {
        @font-face {
        font-family: "inter";
        src: url(./fonts/Inter/Inter-VariableFont_slnt,wght.ttf);
    }
        color: #6f2727;
    }

    .back {
        text-align: right;
    }

    .form-wrraper {
        height: 5px;
    }

    .modal button {
        width: 100px;
        height: 30px;
        background-color: #008CBA;
        color: #fff;
        border: none;
        border-radius: 5%;
        cursor: pointer;
        font-size: 15px;
    }
`;

const Write = () => {
    const navigate = useNavigate();
    
    // 모달
    const [modalOpen, setModalOpen] = useState(false);
    const [modalText, setModalText] = useState("작성이 완료되었습니다.");

    const openModal = () => {
        setModalOpen(true);
    }
    
    // 모달(팝업)
    const closeModal = () => {
        setModalOpen(false);
        navigate('/homeplate');
    }

    // 목록 보기
    const handleBack = () => {
        navigate('/homeplate');
    }
       
    const [fontSize, setFontSize] = useState('10px');
    const [fontFamily, setFontFamily] = useState('Malgun Gothic');
    const [color, setColor] = useState("black");

    // 색깔변경
    const handleColorChange = (e) => {
        const selectedValue = e.target.value;
        setColor(selectedValue);
    }

    // 폰트변경
    const handleFontChange = (e) => {
        const selectedValue = e.target.value;
        setFontFamily(selectedValue);
    }

    // 글자크기변경
    const handleSizeChange = (e) => {
        const selectedValue = e.target.value;
        setFontSize(selectedValue);
    }

    return(
        <Container>
            <h5>.</h5>
            <p>HOME PLATE</p>
                <div className="write_header">
                    <input type="text" class="input_title" placeholder="제목을 입력하세요." />

                    <select className="color" onChange={handleColorChange} value={color}>
                        <option value="black">Black</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="green">Green</option>
                        <option value="purple">Purple</option>
                        <option value="orange">Orange</option>
                        <option value="gray">Gray</option>
                        <option value="brown">Brown</option>
                        <option value="navy">Navy</option>
                    </select>

                    <select class="category" onChange={handleFontChange} value={fontFamily}>
                        <option value>글꼴</option>
                        <option value="Malgun Gothic" style={{ fontFamily: 'Malgun Gothic, sans-serif'  }}>맑은 고딕</option>
                        <option value="Dotum" style={{ fontFamily: 'Dotum, sans-serif' }}>돋움</option>
                        <option value="Gulim" style={{ fontFamily: 'Gulim, sans-serif' }}>굴림</option>
                        <option value="Roboto" style={{fontFamily: 'Roboto, sans-serif'}}>Roboto</option>
                        <option value="Verdana" style={{ fontFamily: 'Verdana, sans-serif' }}>Verdana</option>
                        <option value="Fantasy" style={{fontFamily:'Fantasy, sans-serif'}}>Fantasy</option>
                        <option value="Signle Day" style={{fontFamily: 'Single Day, sans-serif'}}>Single Day</option>
                    </select>

                    <select class="fontSize" onChange={handleSizeChange} value={fontSize}>
                        <option value>크기</option>
                        <option value="10px" style={{fontSize:'10px'}}>10px</option>
                        <option value="12px" style={{fontSize:'12px'}}>12px</option>
                        <option value="14px" style={{fontSize:'14px'}}>14px</option>
                        <option value="16px" style={{fontSize:'16px'}}>16px</option>
                        <option value="18px" style={{fontSize:'18px'}}>18px</option>
                        <option value="20px" style={{fontSize:'20px'}}>20px</option>
                    </select>

                    <div className="modal">
                        <button type="submit" onClick={openModal}>작성 완료</button>
                        <Modal open={modalOpen} close={closeModal} header="알림">
                            {modalText}
                        </Modal>
                    </div>
                </div>
               
                <div className="content">
                    <textarea class="contents" placeholder="글 내용" style={{fontFamily : fontFamily, fontSize : fontSize, color : color}}></textarea>
                </div>
                <br />
                
                <div className="back">
                    <button onClick={handleBack}>목록 보기</button>
                </div>
            </Container>
    );
};

export default Write;