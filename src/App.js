import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import NewsHome from "./pages/NewsHome";
import Schedule from "./pages/Schedule";
import Standings from "./pages/Standings";
import HomePlate from "./pages/HomePlate";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import UserStore from "./context/UserStore";
import SignUp from "./pages/SignUp";
import FindPw from "./pages/FindPassword";
import View from "./pages/View";
import Write from "./pages/Write";
import Search from "./pages/HomePlateSearch";
import HomeContent from "./pages/HomeContents";
import MyPage from "./pages/MyPage";


export default function App() {
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
        <Route path="/standings" element={<>
          <Navigation />
          <Standings />
          <Footer />
        </>} />
        <Route path="/schedule" element={<>
          <Navigation />
          <Schedule />
          <Footer />
        </>} />
        <Route path="/signup" element={<>
          <Navigation />
          <SignUp />
          <Footer /> 
        </>} />
        <Route path="/findpw" element={<>
          <Navigation />
          <FindPw />
          <Footer />
        </>} />
        <Route path="/newshome/view" element={<>
          <Navigation />
          <View />
          <Footer />
        </>} />
        <Route path="/mypage" element={<>
          <Navigation />
          <MyPage />
        </>} />
          </Routes>
      </BrowserRouter>
    </UserStore>
  );
}
