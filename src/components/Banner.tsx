import { NavLink } from "react-router-dom";
import Logo from "../assets/smiths-bbq.svg?react";

export default function Banner() {
  return (
    <div className="border-shadow">
      <div className="flex items-center mt-4 justify-between">
        <Logo className="h-16 w-fit" />
        <div className="h-16 flex items-center justify-between gap-x-20 text-[20px]">
          <NavLink to={"/"} className={"no-underline"}>
            Home
          </NavLink>
          <NavLink to={"/services"} className={"no-underline"}>
            Services
          </NavLink>
          <NavLink to={"/contact"} className={"no-underline"}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
}
