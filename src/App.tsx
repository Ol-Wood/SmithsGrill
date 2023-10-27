import Home from "./components/Home";
import Banner from "./components/Banner";

function App() {
  return (
    <>
      <Banner />
      <div className="pb-10">
        <div className="px-[5%] lg:px-[10%] mt-10 flex flex-col gap-y-6">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
