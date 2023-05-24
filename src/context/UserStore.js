import { createContext, useState } from "react";
import { useEffect } from "react";
import TokenAxiosApi from "../Api/TokenAxiosApi";
import { Navigate } from "react-router-dom";
import Modal from "../utils/Modal";


export const UserContext = createContext(null);

const UserStore = (props) => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 중인지
    const [favTeam, setFavTeam] = useState("");
    const [nickname, setNickname]  = useState("");

    const [modalOpen, setModalOpen] = useState(false);
		const [modalText, setModalText] = useState("");


    const restoreSession = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const response = await TokenAxiosApi.userInfo(token);
          setUserId(response.data[0].id);
          setPassword(response.data[0].pwd);
          setNickname(response.data[0].nickname);
          setFavTeam(response.data[0].favTeam);
          handleLogin();          // restoreSession 처리 완료 후 handleLogin 호출
        } catch (error) {
          console.log("세션 복구 중 오류 발생 : ", error);
          handleLogout();
          Navigate("/");
        }
      }
    };

    

    const handleLogin = () => {
          setIsLoggedIn(true);
    };

    useEffect(() => {
      const fetchData = async () => {
        await restoreSession(); // restoreSession 비동기로 처리
      }
      fetchData(); // fetchData 함수 호출
    }, []); 
  
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      setUserId("");
      setPassword("");
      
    };
  
    return (
      <UserContext.Provider
        value={{ userId, setUserId, password, setPassword, favTeam, setFavTeam, nickname, setNickname, isLoggedIn, handleLogin, handleLogout }}
      >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserStore;