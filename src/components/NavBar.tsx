import { NavLink } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="flex flex-col gap-y-10 lg:flex-row lg:gap-y-0 lg:justify-evenly ">
      <NavLink to={"/"} className={(active) => "no-underline " + (active.isActive ? "active-nav-item" : "")}>
        <p className="block font-bold text-[13vw] lg:text-[5vw] text-transparent brand-type orange-stroke">Home</p>
      </NavLink>
      <NavLink to={"/services"} className={(active) => "no-underline " + (active.isActive ? "active-nav-item" : "")}>
        <p className="block font-bold text-[13vw] lg:text-[5vw] text-transparent brand-type orange-stroke">Services</p>
      </NavLink>
      <NavLink to={"/contact"} className={(active) => "no-underline " + (active.isActive ? "active-nav-item" : "")}>
        <p className="block font-bold text-[13vw] lg:text-[5vw] text-transparent brand-type orange-stroke">Contact</p>
      </NavLink>
    </div>
  );
}
