import Link from "next/link";
import Image from "next/image";
import heroImg from "../../public/images/hero-nobg.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const Hero = () => {
  return (
    <section className="w-full max-w-[1440px] m-auto">
      <div className="m-auto flex justify-between h-[740px] bg-gradient-to-r from-pizza_green-300/10 to-pizza_orange-400/10 rounded-3xl">
        <div className="w-1/2 ps-20 flex flex-col justify-center">
          <h1 className="text-7xl font-bold leading-[1.2] text-pizza_dark">
            Perfect Place <br /> for{" "}
            <span className="font-ibm text-transparent bg-clip-text bg-gradient-to-r from-pizza_green-500 to-pizza_orange-400">
              Perfect Pizza
            </span>
          </h1>

          <p className="w-4/5 mt-5 text-lg">
            Our online platform offers a premium selection, delivery and taste
            to place Perfect Pizza directly to your table. Try it now.
          </p>

          <div className="mt-10 btn_main bg-pizza_green-500 hover:bg-pizza_green-400 text-white cursor-pointer w-[190px]">
            <Link href={"/menu"}>Order Now </Link>
            <IoIosArrowRoundForward className="w-8 h-8 " />
          </div>
        </div>

        <div className="w-1/2 flex justify-end ">
          <Image
            src={heroImg}
            height={600}
            width={800}
            alt="hero image"
            className="rounded-3xl "
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
