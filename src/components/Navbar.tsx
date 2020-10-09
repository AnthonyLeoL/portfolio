import React from "react";
import { NavLink } from "react-router-dom";
import menu from "../icons/hamburger_menu.png";
import "./NavBar.css";
interface NavbarProps {
  status: boolean;
  setStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar: React.FC<NavbarProps> = ({ status, setStatus }) => {
  return (
    <div>
      <img
        onClick={() => {
          setStatus(!status);
        }}
        className="logo"
        src={menu}
      ></img>
      <div className={`${status ? `closed` : ``}`}>
        <div className={`navBar  sidebar-left-nav`}>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/resume"> resume </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
