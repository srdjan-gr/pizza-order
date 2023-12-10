import Hero from "@/components/Hero";
import BestSellers from "@/components/BestSellers";

const page = () => {
  return (
    <>
      {/* Header imported from man Layout */}

      <main className="m-auto">
        <Hero />

        <BestSellers />
      </main>

      {/* Footer imported from man Layout */}
    </>
  );
};

export default page;
