import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserStore = (props) => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 중인지

    const handleLogin = () => {
      // 로그인 처리 로직
      setIsLoggedIn(true);
      console.log("로그인 성공");
    };
  
    const handleLogout = () => {
      // 로그아웃 처리 로직
      setIsLoggedIn(false);
      setUserId("");
      setPassword("");
      console.log("로그아웃 완료");
    };
  
    return (
      <UserContext.Provider
        value={{ userId, setUserId, password, setPassword, isLoggedIn, handleLogin, handleLogout }}
      >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserStore;