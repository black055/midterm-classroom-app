import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { default as NavBar } from "../ClassDashBoard";
import ChangePassWord from "./ChangePassWord";
import Profile from "./Profile";

function ProfileRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" />
        <Route path="/profile" element={<Profile />} />
        <Route path="/password" element={<ChangePassWord />} />
      </Routes>
    </Router>
  );
}

export default ProfileRouter;
