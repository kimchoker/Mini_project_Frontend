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


export default function App() {
  return (
    <UserStore>
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/newshome" element={<NewsHome />} />
            <Route path="/newshome/View" element={<View />} />
            <Route path="/homeplate" element={<HomePlate />} />
            <Route path="/standings" element={<Standings />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/findpw" element={<FindPw />} />
            <Route path="/newshome/view" element={<View/>} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </UserStore>
  );
}
