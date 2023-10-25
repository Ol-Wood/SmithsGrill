import Logo from "../assets/smiths-mobile-bbq.svg?react";
import Contact from "../assets/phone.svg?react";

export default function Banner() {
  return (
    <div className="h-fit pb-3 border-b-4 border-gray px-[5%] lg:px-[10%]">
      <div className="xl:max-w-[1300px] lg:max-w-[900px] flex m-auto items-center justify-between">
        <Logo className="h-[4rem] lg:h-[3rem] w-auto" />
        <div className="basis-1/2 flex gap-x-20 lg:gap-x-6 justify-end pt-2">
          <a className="no-underline" href="tel:07950745764">
            <span className="flex items-center gap-x-2">
              <p className="font-[700] text-[1.5rem]">07950745764</p>
              <Contact className="text-orange w-8 h-auto" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}