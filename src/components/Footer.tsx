import React from "react";
import "./Footer.css";
import github_logo from "../resources/icons/github_logo.png";
import linkedin_logo from "../resources/icons/linkedin_logo.png";
import location_logo from "../resources/icons/location_icon.png";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <a href="https://www.github.com/AnthonyLeoL">
        <img className="logo" src={github_logo} alt="github logo" />
      </a>

      <a href="https://www.linkedin.com/in/anthony-lisa">
        <img className="logo" src={linkedin_logo} alt="linkedin logo" />
      </a>
      <span>
        <a href="https://www.google.com/maps/place/Los+Angeles">
          <img className="logo" src={location_logo} alt="pin point logo" />
        </a>{" "}
        LA, California
      </span>
    </div>
  );
};
export default Footer;
