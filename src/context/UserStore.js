import { createContext, useState } from "react";
import { useEffect } from "react";
import AxiosApi from "../Api/AxiosApi";
import TokenAxiosApi from "../Api/TokenAxiosApi";


export const UserContext = createContext(null);

const UserStore = (props) => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 중인지
    const [favTeam, setFavTeam] = useState("");
    const [nickname, setNickname]  = useState("");


    useEffect(() => {
      const restoreSession = async () => {
        const token = localStorage.getItem('token');
        if (token) {
          try {
            const userInfoResponse = await TokenAxiosApi.userInfo(token);
            const userData = userInfoResponse.data[0];
  
            setUserId(userData.id);
            setPassword(userData.pwd);
            setFavTeam(userData.favTeam);
            setNickname(userData.nickname);
            handleLogin();
          } catch (error) {
            console.error("세션 복구 중 오류 발생 : ", error);
          }
        }
      };
      restoreSession();
    }, []);
  

    const handleLogin = async() => {
          setIsLoggedIn(true);
      console.log("로그인 성공");
    };
  
    const handleLogout = () => {
      localStorage.removeItem('token');
      setIsLoggedIn(false);
      setUserId("");
      setPassword("");
      console.log("로그아웃 완료");
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