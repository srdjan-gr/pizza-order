import Hero from "@/components/Hero";
import BestSellers from "@/components/BestSellers";
import OurStyle from "@/components/OurStyle";
import Menu from "@/components/Menu";

const page = () => {
  return (
    <>
      {/* Header imported from man Layout */}

      <main className="m-auto">
        <Hero />

        <BestSellers />

        <OurStyle />

        <Menu />
      </main>

      {/* Footer imported from man Layout */}
    </>
  );
};

export default page;
