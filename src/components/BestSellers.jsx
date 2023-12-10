import ProductCard from "@/components/ProductCard";

const BestSellers = () => {
  return (
    <section className="max-w-5xl m-auto py-16 flex flex-col items-center justify-between">
      <h2 className="text-4xl font-ibm mb-2">Best Sellers</h2>

      <p className="text-lg mb-14 ">
        Discover perfec <span className="text-orange-500">pizza</span> best
        sellers
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default BestSellers;
