import Image from "next/image";
import Link from "next/link";
import logo from "../../public/images/logo.png";
import { signOut, useSession } from "next-auth/react";

import { IoLogOutOutline } from "react-icons/io5";
import { BsPersonGear } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import {
  HiOutlineCog6Tooth,
  HiOutlineArchiveBoxArrowDown,
  HiOutlineDocumentText,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import {
  LiaUserCogSolid,
  LiaUserFriendsSolid,
  LiaCartPlusSolid,
} from "react-icons/lia";

const dashboardMenuLinksAdmin = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: <HiOutlineCog6Tooth className="ml-3 h-6 w-6" />,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: <LiaCartPlusSolid className="ml-3 h-6 w-6" />,
  },
  {
    title: "Categories",
    href: "/categories",
    icon: <HiOutlineSquares2X2 className="ml-3 h-6 w-6" />,
  },
  {
    title: "Pizza Menu",
    href: "/menu",
    icon: <HiOutlineDocumentText className="ml-3 h-6 w-6" />,
  },
  {
    title: "Users",
    href: "/users",
    icon: <LiaUserFriendsSolid className="ml-3 h-6 w-6" />,
  },
  {
    title: "User Profile",
    href: "/userProfile",
    icon: <LiaUserCogSolid className="ml-3 h-6 w-6" />,
  },
];

const dashboardMenuLinksUser = [
  {
    title: "Orders",
    href: "/orders",
    icon: <LiaCartPlusSolid className="ml-3 h-6 w-6" />,
  },
  {
    title: "User Profile",
    href: "/userProfile",
    icon: <LiaUserCogSolid className="ml-3 h-6 w-6" />,
  },
];

const MobileMenu = ({ mobile, setMobile, isAdminProfile }) => {
  const session = useSession();
  const sessionStatus = session.status;

  const handleMobileMenu = () => {
    setMobile(!mobile);
  };

  const userData = session.data?.user;
  const userImage = userData?.image;

  // Display shorter user name
  let userName = userData?.name || userData?.email;
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  } else {
    userName = userData?.email;
  }

  return (
    <section
      className={`${
        mobile ? "translate-x-0" : "translate-x-full"
      } fixed top-0 right-0  w-full md:w-[380px] h-screen z-50 bg-pizza_light custom_shadow-left p-4 transition-all ease delay-250`}
    >
      <div className="flex justify-between items-start ">
        <Link href={"/"}>
          <Image src={logo} alt="perfect-pizza-logo" width={50} height={50} />
        </Link>

        <AiOutlineClose
          className="w-6 h-6 cursor-pointer"
          onClick={handleMobileMenu}
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-5 text-gray-800">
        {sessionStatus === "authenticated" && (
          <div className="w-full ">
            <div className="flex items-center justify-end w-full gap-2 mb-8 mt-2">
              <p className="text-base text-gray-400">Hi, {userName}</p>
              <Image
                src={userImage}
                alt="user-image"
                width={40}
                height={40}
                className="rounded-full "
              />
            </div>

            {isAdminProfile &&
              dashboardMenuLinksAdmin.map((item) => {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={handleMobileMenu}
                    className="flex items-center justify-between text-xl px-3  cursor-pointer w-2/3 mb-3 m-auto text-gray-400"
                  >
                    {item.title}
                    {item.icon}
                  </Link>
                );
              })}

            {!isAdminProfile &&
              dashboardMenuLinksUser.map((item) => {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    onClick={handleMobileMenu}
                    className="flex items-center justify-between text-xl px-3  cursor-pointer w-2/3 mb-3 m-auto text-gray-400"
                  >
                    {item.title}
                    {item.icon}
                  </Link>
                );
              })}

            <p
              className="flex items-center justify-between text-xl px-3 cursor-pointer w-2/3 mb-3 m-auto text-pizza_red-100"
              onClick={() => signOut()}
            >
              Logout
              <IoLogOutOutline className="w-6 h-6 ml-5" />
            </p>

            <div className="divider text-gray-300"></div>
          </div>
        )}

        {sessionStatus === "unauthenticated" && (
          <Link
            className="btn_main bg-pizza_orange-500 hover:bg-pizza_orange-400 text-white text-xl w-2/4"
            href={"/login"}
            onClick={handleMobileMenu}
          >
            Login
          </Link>
        )}

        <Link className="link_hover text-xl" href={"/"}>
          Home
        </Link>
        <Link className="link_hover text-xl" href={"/menu"}>
          Menu
        </Link>
        <Link className="link_hover text-xl" href={"/contact"}>
          Contact
        </Link>
        <Link className="link_hover text-xl" href={"/about"}>
          About
        </Link>
      </div>
    </section>
  );
};

export default MobileMenu;
