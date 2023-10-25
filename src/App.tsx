import Home from "./components/Home";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="pt-3 pb-10">
      <Banner />
      <div className="px-[5%] lg:px-[10%] mt-10 flex flex-col gap-y-6">
        <Home />
      </div>
    </div>
  );
}

export default App;
