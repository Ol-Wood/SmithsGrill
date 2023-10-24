import Grill from "../assets/grill.jpg";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div className="flex">
        <p className="text-[30px] basis-2/3">Savor the Flavor of</p>
        <p className="block ml-[5%] font-bold text-[8vw] text-transparent brand-type orange-stroke">Smiths</p>
        <p className="block  ml-[5%] font-bold text-[8vw] text-transparent brand-type orange-stroke">Mobile</p>
        <p className="block  ml-[5%] font-bold text-[8vw] line text-[#f4631c] brand-type white-stroke">BBQ</p>
      </div>
      <div className="flex gap-8 mt-10">
        <img src={Grill} className="w-1/2" />
        <p className="">
          At Smith's Mobile BBQs, we're fired up about flavor, and we're here to bring the sizzle and the savory straight to your doorstep. Based in
          the heart of Greater Manchester, we are your go-to BBQ and grill catering experts, dedicated to turning every event into a mouthwatering,
          memorable experience.
        </p>
      </div>
    </>
  );
}
