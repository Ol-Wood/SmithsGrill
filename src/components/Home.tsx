import BBQ from "../assets/bbq-dark.png";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-6 xl:max-w-[1300px] lg:max-w-[900px] m-auto self-center">
      <h2 className="text-orange">About us</h2>
      <p className="lg:w-[75%]">
        At Smith's Mobile BBQs, we specialize in catering to a wide range of events throughout Greater Manchester, from corporate gatherings to family
        celebrations. With our professional service and a mobile setup that brings the BBQ experience to your chosen location, we're dedicated to
        making your event truly unforgettable. Count on us to delight your guests with our mouthwatering BBQ classics and exceptional service.
      </p>
      <span className="border-b-2 border-gray"></span>
      <div className="flex w-2/3 self-center border-4 border-gray rounded ">
        <img src={BBQ} />
      </div>
      <h2 className="text-orange">Why Choose Us?</h2>
      <ul>
        <li>
          <strong className="text-orange">Delicious BBQ Classics:</strong> We serve up all your favorites – sausages, burgers, chicken, and more.
        </li>
        <br />
        <li>
          <strong className="text-orange">Professional Team:</strong> Our grillmasters ensure a perfect BBQ every time.
        </li>
        <br />
        <li>
          <strong className="text-orange">Mobile Setup:</strong> We come to you, so you can enjoy fresh-off-the-grill goodness.
        </li>
        <br />
      </ul>
      <div className="flex flex-col gap-8 border-2 rounded border-gray mt-10 text-center p-10 self-center">
        <h2 className="text-orange">Give Us a Call</h2>
        <p>We're just a phone call away, and we'd love to hear from you.</p>
        <p>If you have any questions or if you're ready to book our BBQ catering services, you can reach us at:</p>
        <p>
          <a className="text-[3rem] lg:text-[2rem] font-bold" href="tel:07950745764">
            07950745764
          </a>
        </p>
      </div>
    </div>
  );
}
