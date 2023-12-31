import Logo from "../assets/smiths-mobile-bbq.svg?react";
import Contact from "../assets/phone.svg?react";

export default function Banner() {
  return (
    <div className="lg:h-auto h-40 py-3 shadow-[0_4px_10px_-2px_white] px-[5%] lg:px-[10%]">
      <div className="xl:max-w-[1300px] lg:max-w-[900px] flex m-auto items-center justify-between h-full">
        <Logo className="h-full lg:h-[3rem] w-auto" />
        <div className="basis-1/2 flex gap-x-20 lg:gap-x-6 justify-end pt-2">
          <a className="no-underline" href="tel:07950745764">
            <span className="flex items-center gap-x-2  pt-2">
              <p className="font-[700] lg:block lg:text-[1.5rem] text-[2rem] hidden">07950745764</p>
              <Contact className="text-orange lg:w-8 w-12 h-auto" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
