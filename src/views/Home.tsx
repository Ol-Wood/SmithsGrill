import "./Home.css";
import Grill from "../assets/grill.jpg";

export default function Home() {
  return (
    <>
      <div className="text-black lg:hidden">
        <p>
          <strong>Welcome to Smith's Mobile BBQs</strong>
        </p>
        <p>Savor the Flavor of Greater Manchester!</p>
      </div>
      <div className="home-content">
        <img src={Grill} className="home-image" />
        <div className="intro-message">
          <p>
            At Smith's Mobile BBQs, we're fired up about flavor, and we're here to bring the sizzle and the savory straight to your doorstep. Based in
            the heart of Greater Manchester, we are your go-to BBQ and grill catering experts, dedicated to turning every event into a mouthwatering,
            memorable experience.
          </p>
        </div>
      </div>
    </>
  );
}
