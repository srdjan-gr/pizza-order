import MenuHero from "@/components/MenuHero";

export const metadata = {
  title: "Pizza Menu",
  description: "Perfect pizza menu",
};

const page = () => {
  return (
    <>
      {/* Header imported from man Layout */}

      <main className="m-auto">
        <MenuHero />
      </main>

      {/* Footer imported from man Layout */}
    </>
  );
};

export default page;
