import logo from "./logo.svg";
import "./App.css";
import LoginPage from "./Components/Loginpage/LoginPage";
import { Routes, Route } from "react-router-dom";
import { Button } from "@material-ui/core";
import Navbar from "./Components/UserProfile/Navbar";
import UserBasicDetails from "./Components/UserProfile/UserProfileDetails";
import ProfileWall from "./Components/UserWall/ProfileWall";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/userprofile/:name" element={<ProfileWall />} />
      </Routes>
      {/* <SimpleAcordial /> */}
    </>
  );
}

export default App;
