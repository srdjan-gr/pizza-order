import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoginForm from "@/components/LoginForm";

const Page = () => {
  return (
    <>
      {/* Header imported from man Layout */}

      <section className="m-auto bg-pizza_light">
        <LoginForm />
      </section>

      {/* Footer imported from man Layout */}
    </>
  );
};

export default Page;
