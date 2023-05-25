import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLayoutEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import NewsHome from "./pages/NewsHome";
import Schedule from "./pages/Schedule";
import HomePlate from "./pages/HomePlate";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import UserStore from "./context/UserStore";
import SignUp from "./pages/SignUp";
import FindPw from "./pages/FindPassword";
import View from "./pages/NewsView";
import MyPage from "./pages/MyPage";

export default function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <UserStore>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<>
          <Navigation />
          <Home />
          <Footer />
        </>} />
        <Route path="/newshome" element={<>
          <Navigation />
          <NewsHome />
          <Footer />
        </>} />
        <Route path="/newshome/View" element={<>
          <Navigation />
          <View />
          <Footer />
        </>} />
        <Route path="/homeplate" element={<>
          <Navigation />
          <HomePlate />
          <Footer />
        </>} />
        <Route path="/signup" element={<>
          <Navigation />
          <SignUp />
        </>} />
        <Route path="/findpw" element={ windowWidth > 768 ? (
        <>
          <Navigation />
          <FindPw />
        </>
        ) : ( 
            <FindPw />
        )} />
        <Route path="/newshome/view" element={<>
          <Navigation />
          <View />
          <Footer />
        </>} />
        <Route path="/mypage" element={windowWidth > 768 ? (
        <>
          <Navigation />
          <MyPage />
        </>
      ) : (
        <MyPage />
      )} />
          </Routes>
      </BrowserRouter>
    </UserStore>
  );
}
