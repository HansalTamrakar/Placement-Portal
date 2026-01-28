import logo from "./logo.svg";

import "./index.css";
import {  Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import Freelance from "./Pages/Freelance";
import DailyPost from "./Pages/DailyPost";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import AuthModal from "./Components/Auth";
import ArchStudioGallery from "./Pages/Selection";
import { Activity } from "lucide-react";




const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}>
          <Route path="" element={<HomePage />} />
          <Route path="freelance" element={<Freelance />} />
          <Route path="dailypost" element={<DailyPost />} />
          <Route path="about" element={<About />} />
          <Route path="auth" element={<AuthModal />} />
         
        </Route>
        <Route path="/signin" element={ <ArchStudioGallery  />}>
          <Route path="" element={<HomePage />} />
          <Route path="freelance" element={<Freelance />} />
          <Route path="dailypost" element={<DailyPost />} />
          <Route path="about" element={<About />} />
          <Route path="auth" element={<AuthModal />} />
         
        </Route>
       
      </Routes>
     
     
    </>
  );
};

export default App;
