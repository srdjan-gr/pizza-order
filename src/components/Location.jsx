import location from "../../public/images/pizza-location-bg-desktop.jpg";
import Map from "@/components/Map";

const Location = () => {
  return (
    <section
      style={{ backgroundImage: `url(${location.src})` }}
      className="h-[600px] max-w-[1440px] m-auto rounded-3xl bg-cover bg-bottom bg-no-repeat relative"
    >
      <div className="w-full h-[600px] bg-gray-500/30 rounded-3xl"></div>

      <div className="w-full absolute top-10 left-0 z-10 text-white text-center">
        <h2 className="text-4xl font-ibm mb-2">Our location</h2>

        <p className="text-lg mb-14 ">
          You can visit us and check all our pizza{"’"}s.
        </p>
      </div>

      <div className="absolute top-40 right-48 z-10">
        <Map />
      </div>
    </section>
  );
};

export default Location;
