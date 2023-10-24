import BBQ from "../assets/bbq-dark.png";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-8 text-[30px]">
        <p className="standard-text  text-center">
          At Smith's Mobile BBQs, we cater to all types of events in Greater Manchester. From corporate gatherings to family celebrations, we offer a
          diverse menu and professional service. Our mobile setup brings the BBQ experience to your chosen location. Trust us to make your event
          memorable with our mouthwatering BBQ classics
        </p>
        <div className="flex w-2/3 self-center border-4 border-white rounded ">
          <img src={BBQ} />
        </div>
        <h2 className="text-center text-[#f4631c]">Why Choose Us?</h2>
        <ul>
          <li className="standard-text">
            <strong className="text-[#f4631c]">Delicious BBQ Classics:</strong> We serve up all your favorites – sausages, burgers, chicken, and more.
          </li>
          <br />
          <li className="standard-text">
            <strong className="text-[#f4631c]">Professional Team:</strong> Our grillmasters ensure perfect BBQ every time.
          </li>
          <br />
          <li className="standard-text">
            <strong className="text-[#f4631c]">Mobile Setup:</strong> We come to you, so you can enjoy fresh-off-the-grill goodness.
          </li>
          <br />
        </ul>
      </div>
    </>
  );
}
