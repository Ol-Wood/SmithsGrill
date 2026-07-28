import Header from "./components/Header";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import About from "./components/About";
import WhyUs from "./components/WhyUs";
import TheGrill from "./components/TheGrill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <About />
        <WhyUs />
        <TheGrill />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
