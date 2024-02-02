import Order from "@/components/Order";

export const metadata = {
  title: "Pizza Order",
  description: "Perfect pizza oreder page",
};

const page = () => {
  return (
    <>
      {/* Header imported from man Layout */}

      <main className="m-auto">
        <Order />
      </main>

      {/* Footer imported from man Layout */}
    </>
  );
};

export default page;
