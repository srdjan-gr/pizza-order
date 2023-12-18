import ourStyle from "../../public/images/our-style-bg-desktiop.jpg";
import React from "react";

const OurStyle = () => {
  return (
    <section
      style={{ backgroundImage: `url(${ourStyle.src})` }}
      className="h-[640px] max-w-[1440px] m-auto rounded-3xl bg-cover bg-bottom bg-no-repeat relative mb-5"
    >
      <div className="w-full h-[640px] bg-gray-500/30 rounded-3xl"></div>

      <div className="w-full absolute top-10 left-0 z-10 text-white text-center">
        <h2 className="text-4xl font-ibm mb-2">Our style</h2>

        <p className="text-lg mb-14 ">
          Hand made pizza dough baked in stone oven.
        </p>
      </div>
    </section>
  );
};

export default OurStyle;
