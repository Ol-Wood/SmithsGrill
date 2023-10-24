import Grill from "../assets/grill.jpg";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-10">
      <div className="px-10">
        <img src={Grill} className="rounded border-4 block w-1/3" />
      </div>
      <p className="standard-text px-10 lg:px-0">
        At Smith's Mobile BBQs, we're fired up about flavor, and we're here to bring the sizzle and the savory straight to your doorstep. Based in the
        heart of Greater Manchester, we are your go-to BBQ and grill catering experts, dedicated to turning every event into a mouthwatering,
        memorable experience.
      </p>
    </div>
  );
}
