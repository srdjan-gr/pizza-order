import Hero from "@/components/Hero";
import BestSellers from "@/components/BestSellers";
import OurStyle from "@/components/OurStyle";
import Menu from "@/components/Menu";
import Location from "@/components/Location";
import WorkingHours from "@/components/WorkingHours";
import Modal from "@/components/utility/Modal";

export const metadata = {
  title: "Perfect Pizza",
  description: "Best ordering online Pizza app ",
};

const page = () => {
  return (
    <>
      {/* Header imported from man Layout */}

      <main className="m-auto">
        <Hero />
        <BestSellers />
        <OurStyle />
        <Menu />
        <WorkingHours />
        <Location />
      </main>

      {/* Footer imported from man Layout */}
    </>
  );
};

export default page;
