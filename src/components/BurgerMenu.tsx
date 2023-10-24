import classNames from "classnames";
import { PropsWithChildren, createContext, useContext, useState } from "react";
import "./BurgerMenu.css";

export type BurgerMenuProps = {
  heading?: string;
  isOpen: boolean;
  onCloseClick: VoidFunction;
  onCloseFinished?: VoidFunction;
  className?: string;
  closeButtionAriaLabel?: string;
} & PropsWithChildren;

export const BurgerMenu = ({ heading, isOpen, onCloseClick, onCloseFinished, className, closeButtionAriaLabel, children }: BurgerMenuProps) => {
  return (
    <div
      onTransitionEnd={() => {
        if (!isOpen) {
          onCloseFinished?.();
        }
      }}
      className={classNames("w-[70%] h-[100vh] fixed burger-menu bg-black z-50 left-0 px-10 py-6 overflow-y-auto border-r-4 border-[#f4631c]", {
        className: !!className,
        "open-menu": isOpen === true,
        "closed-menu": isOpen === false,
      })}
    >
      <div className={classNames("flex justify-end w-full pb-2", { "justify-between": !!heading })}>
        {heading && <h3 className="self-start">{heading}</h3>}
        <button onClick={onCloseClick} className="self-start pt-1 pr-4 text-[40px]" aria-label={closeButtionAriaLabel}>
          X
        </button>
      </div>
      {children}
    </div>
  );
};

export type MenuContextType = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export const MenuContext = createContext<MenuContextType>({} as MenuContextType);

export const useMenuContext = () => useContext(MenuContext);

export const MenuContextProvider = (props: PropsWithChildren) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return <MenuContext.Provider value={{ isOpen: isMenuOpen, toggleMenu: () => setIsMenuOpen(!isMenuOpen) }}>{props.children}</MenuContext.Provider>;
};
