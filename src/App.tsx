import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Banner />
      <div className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<>Contact</>} />
          <Route path="/services" element={<>Services</>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
