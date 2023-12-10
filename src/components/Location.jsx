import location from "../../public/images/pizza-location-bg-desktop.jpg";

const Location = () => {
  return (
    <section
      style={{ backgroundImage: `url(${location.src})` }}
      className="h-[600px] w-full bg-cover bg-bottom bg-no-repeat relative"
    >
      <div className="w-full h-[600px] bg-gray-500/30"></div>

      <div className="w-full absolute top-10 left-0 z-10 text-white text-center">
        <h2 className="text-4xl font-ibm mb-2">Our location</h2>

        <p className="text-lg mb-14 ">
          You can visit us and check all our pizza{"’"}s.
        </p>
      </div>
    </section>
  );
};

export default Location;
