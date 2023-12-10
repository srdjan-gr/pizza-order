"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import logo from "../../public/images/logo.png";

import { RiMenuFoldLine } from "react-icons/ri";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import MobileMenu from "./MobileMenu";
import UserMenu from "./UserMenu";
import { usePathname } from "next/navigation";

const Header = () => {
  const navLinks = [
    { title: "Home", href: "/" },
    { title: "Menu", href: "/menu" },
    { title: "Contact", href: "/contact" },
    { title: "About", href: "/about" },
  ];

  const [isAdminProfile, setIsAdminProfile] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [userMenu, setUserMenu] = useState(false);

  const pathname = usePathname();

  const session = useSession();
  const sessionStatus = session.status;

  const userData = session.data?.user;
  const userImage = userData?.image;

  useEffect(() => {
    setIsLoadingProfile(true);

    if (sessionStatus === "authenticated") {
      fetch("/api/userProfile").then((response) =>
        response.json().then((data) => {
          setIsAdminProfile(data.admin);
          setIsLoadingProfile(false);
        })
      );
    }
  }, [sessionStatus, session]);

  let userName = userData?.name || userData?.email;
  if (userName && userName.includes(" ")) {
    userName = userName.split(" ")[0];
  } else {
    userName = userData?.email;
  }

  const handleMobileMenu = () => {
    setMobile(!mobile);
  };

  const openUserMenu = () => {
    setUserMenu(!userMenu);
  };

  return (
    <>
      <div className="shadow-md shadow-gray-300/20 backdrop-blur-sm bg-white/30 absolute top-0 left-0 z-40 w-full ">
        <div className="max-w-7xl flex justify-between items-center m-auto py-2 px-3 lg:px-0">
          <Link href={"/"}>
            <Image src={logo} alt="perfect-pizza-logo" width={50} height={50} />
          </Link>

          <div className="hidden md:flex justify-center items-center gap-6 text-gray-800">
            {navLinks.map((item) => {
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`${
                    pathname === item.href &&
                    "underline underline-offset-4 decoration-pizza_black"
                  } link_hover`}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="flex justify-center items-center gap-4 text-gray-800">
            {sessionStatus === "authenticated" ? (
              <div
                className="btn_ghost border-2 border-pizza_wood-400 hover:bg-pizza_wood-400 text-pizza_black flex items-center justify-center cursor-pointer"
                onClick={openUserMenu}
              >
                {/* <p className='text-sm'>Hi, {userName[0]}</p> - Moze i ovako index da se upise */}
                <p className="text-sm">Hi, {userName}</p>
                <Image
                  src={userImage}
                  alt="user-image"
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <IoIosArrowDown className="w-4 h-4 " />
              </div>
            ) : (
              <Link
                className="btn_ghost border-2 border-pizza_orange-400  hover:bg-pizza_orange-400 text-pizza_black"
                href={"/login"}
              >
                Login
              </Link>
            )}
            <RiMenuFoldLine
              className="w-6 h-6 cursor-pointer link_hover md:hidden "
              onClick={handleMobileMenu}
            />

            <HiOutlineShoppingCart className="w-6 h-6 cursor-pointer link_hover " />
          </div>
        </div>
      </div>

      <UserMenu
        userMenu={userMenu}
        setUserMenu={setUserMenu}
        isAdminProfile={isAdminProfile}
      />
      <MobileMenu
        mobile={mobile}
        setMobile={setMobile}
        isAdminProfile={isAdminProfile}
      />
    </>
  );
};

export default Header;
