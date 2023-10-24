import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Banner from "./components/Banner";
import { BurgerMenu, useMenuContext } from "./components/BurgerMenu";
import NavBar from "./components/NavBar";
import Services from "./views/Home";

function App() {
  const { isOpen, toggleMenu } = useMenuContext();

  return (
    <div className="">
      <div className="lg:hidden">
        <BurgerMenu isOpen={isOpen} onCloseClick={toggleMenu}>
          <div className="mt-20">
            <NavBar />
          </div>
        </BurgerMenu>
      </div>
      <div className="mx-[5%] h-full">
        <Banner />
        <div className="mt-10 lg:mt-6 flex flex-col gap-y-6 h-full">
          <div className="hidden lg:inline-block  h-full">
            <NavBar />
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<>Contact</>} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
