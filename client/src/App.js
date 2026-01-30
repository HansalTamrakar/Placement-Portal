import logo from "./logo.svg";

import "./index.css";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import Freelance from "./Pages/Freelance";
import DailyPost from "./Pages/DailyPost";
import About from "./Pages/About";
import HomePage from "./Pages/HomePage";
import AuthModal from "./Components/Auth";
import ArchStudioGallery from "./Pages/Selection";
import { Activity } from "lucide-react";
import Dashboard from "./Pages/Dashboard";
import Connections from "./Components/Connection";
import InfiniteScroll from "./Components/InfiniteScrolling";
import JobFeed from "./Components/JobFeed";
import Messages from "./Components/Messages";
import MarioRoadMap from "./Components/CurvedRoadmap";
import CurvedRoadmap from "./Components/CurvedRoadmap";
import RoadMapPage from "./Components/RoadMapPage";
import LandscapeRoadmap from "./Components/CurvedRoadmap";

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
        <Route path="/signin" element={<ArchStudioGallery />} />
        <Route path="/dashboard/posts" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="jobs" element={<JobFeed />} />
          <Route path="" element={<InfiniteScroll />} />
          <Route path="connections" element={<Connections />} />
        </Route>
        <Route path="/dashboard/roadmap" element={<RoadMapPage />} >

        </Route>
          <Route path="/dashboard/roadmap/java" element={<LandscapeRoadmap type={"java"} />} />
          <Route path="/dashboard/roadmap/java" element={<LandscapeRoadmap type={"mern"} />} />
          <Route path="/dashboard/roadmap/mlai" element={<LandscapeRoadmap type={"mlai"} />} />
          <Route path="/dashboard/roadmap/app" element={<LandscapeRoadmap  type={"app"}/>} />
          <Route path="/dashboard/roadmap/datascience" element={<LandscapeRoadmap type={"datascience"} />} />
          {/* <Route path="/kio" element={<LandscapeRoadmap />} /> */}
      </Routes>
    </>
  );
};

export default App;
