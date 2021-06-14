import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

function Navbar({ title }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <h2 className="nav-bar-title">{title}</h2>
        <Link to="#" className="menu-bars">
          <Button onClick={logOut}>
            <RiIcons.RiLogoutCircleRLine />
          </Button>
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}

export default Navbar;
