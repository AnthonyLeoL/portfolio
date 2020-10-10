import React from "react";

import Profile from "../icons/cartoon_profile.jpg";
import "./Home.css";
interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className="profile-frame">
      <img className="profile" src={Profile}></img>
      <div className="infobar">
        <div>
          <strong>Front-end </strong> ◇<strong> Full-stack </strong> ◇
          <strong> Mobile</strong>
        </div>
      </div>
      <span className="dev">Developer</span>
    </div>
  );
};
export default Home;
