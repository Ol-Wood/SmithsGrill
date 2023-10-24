import Logo from "../assets/smiths-bbq.svg?react";
import Menu from "../assets/menu.svg?react";
import { useMenuContext } from "./BurgerMenu";

export default function Banner() {
  const { toggleMenu } = useMenuContext();
  return (
    <div className="flex items-center mt-4 justify-between lg:justify-center">
      <Logo className="h-[8vh] lg:h-[10vh] w-fit left-0" />
      <Menu className="pt-2 lg:hidden" onClick={toggleMenu} />
    </div>
  );
}
