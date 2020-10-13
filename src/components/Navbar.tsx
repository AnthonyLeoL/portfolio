import React from "react";
import { NavLink } from "react-router-dom";
import menu from "../resources/icons/hamburger_menu.png";
import Home from "../resources/icons/house-512.png";
import "./NavBar.css";
interface NavbarProps {
  status: boolean;
  isDark: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setColor: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({
  status,
  setStatus,
  setColor,
  isDark,
}) => {
  return (
    <div className="header">
      <img
        alt="menu bar"
        onClick={() => {
          setStatus(!status);
        }}
        className="menu_icon"
        src={menu}
      ></img>

      <NavLink className="home_icon" to="/">
        <img className="logo" src={Home} alt="home icon" />
      </NavLink>
      <div className={`${status ? `open` : ``}`}>
        <div className={`navBar  sidebar-left-nav`}>
          <NavLink
            className="navbar-item"
            exact
            activeClassName="current-tab"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="current-tab"
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="current-tab"
            to="/resume"
          >
            Resume
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="current-tab"
            to="/tutoring"
          >
            Tutoring
          </NavLink>
          <div
            className={`navbar-item toggle ${isDark ? `color` : `dark`}`}
            onClick={() => {
              setColor(!isDark);
            }}
          >
            Change background!
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
