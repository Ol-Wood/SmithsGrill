import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="mx-[5%]">
      <Banner />
      <div className="mt-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<>Contact</>} />
          <Route path="/services" element={<>Services</>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
