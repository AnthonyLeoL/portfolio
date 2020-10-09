import React from "react";

import "./Footer.css";
import github_logo from "../icons/github_logo.png";
import linkedin_logo from "../icons/linkedin_logo.png";
import location_logo from "../icons/location_icon.png";
interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="footer">
      <img className="logo" src={github_logo} alt="logo" />

      <img className="logo" src={linkedin_logo} alt="logo" />
      <span>
        <img className="logo" src={location_logo} alt="logo" /> LA, California
      </span>
    </div>
  );
};
export default Footer;
