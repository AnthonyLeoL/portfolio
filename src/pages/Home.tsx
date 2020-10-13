import React from "react";

import Profile from "../resources/icons/cartoon_profile.jpg";
import "./Home.css";

interface HomeProps {
  isDark: boolean;
  setTheme: React.Dispatch<React.SetStateAction<boolean>>;
}
const Home: React.FC<HomeProps> = ({ isDark, setTheme }) => {
  return (
    <div className="profile-frame">
      <img className="profile" src={Profile} alt="cartoon profile"></img>
      <div className="infobar">
        <div>
          <strong>Anthony Lisa</strong>
        </div>
        <div>
          <strong>Front-end </strong> ◇<strong> Full-stack </strong> ◇
          <strong> Mobile</strong>
        </div>
        <span className="dev">Developer</span>
      </div>
    </div>
  );
};
export default Home;
