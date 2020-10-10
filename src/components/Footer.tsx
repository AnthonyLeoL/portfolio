import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import github_logo from "../icons/github_logo.png";
import linkedin_logo from "../icons/linkedin_logo.png";
import location_logo from "../icons/location_icon.png";
interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div className="footer">
      <a href="https://www.github.com/AnthonyLeoL">
        <img className="logo" src={github_logo} alt="logo" />
      </a>

      <a href="https://www.linkedin.com/in/anthony-lisa">
        <img className="logo" src={linkedin_logo} alt="logo" />
      </a>
      <span>
        <a href="https://www.google.com/maps/place/Los+Angeles">
          <img className="logo" src={location_logo} alt="logo" />
        </a>{" "}
        LA, California
      </span>
    </div>
  );
};
export default Footer;
