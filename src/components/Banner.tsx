import { NavLink } from "react-router-dom";
import "./Banner.css";
import Logo from "../assets/smithsbbq.svg?react";

export default function Banner() {
  return (
    <div>
      <div className="banner">
        <Logo width={"100px"} />
        <div className="nav-bar ">
          <NavLink to={"/"} className={"nav-item"}>
            Home
          </NavLink>
          <NavLink to={"/services"} className={"nav-item"}>
            Services
          </NavLink>
          <NavLink to={"/contact"} className={"nav-item"}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
