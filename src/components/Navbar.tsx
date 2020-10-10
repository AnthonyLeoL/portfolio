import React from "react";
import { NavLink } from "react-router-dom";
import menu from "../icons/hamburger_menu.png";
import Home from "../icons/house-512.png";
import "./NavBar.css";
interface NavbarProps {
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ status, setStatus }) => {
  return (
    <div className="header">
      <img
        onClick={() => {
          setStatus(!status);
        }}
        className="menu_icon"
        src={menu}
      ></img>
      <NavLink className="home_icon" to="/">
        <img className="logo" src={Home} />
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
            {" "}
            Resume{" "}
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="current-tab"
            to="/refdsfsume"
          >
            placeholder
          </NavLink>
          <NavLink
            className="navbar-item"
            activeClassName="current-tab"
            to="/resdfsume"
          >
            placeholder2
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
