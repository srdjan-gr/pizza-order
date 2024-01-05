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
    {
      title: (
        <HiOutlineShoppingCart className="w-6 h-6 cursor-pointer link_hover " />
      ),
      href: "/cart",
    },
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
      <nav className="w-full py-5">
        <div className="bg_gray rounded-3xl max-w-[1440px] m-auto">
          <div className=" max-w-7xl flex justify-between items-center m-auto py-2 px-3 lg:px-0">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="perfect-pizza-logo"
                height={50}
                width={50}
              />
            </Link>

            <div
              className={`${
                sessionStatus === "authenticated" && "translate-x-[40px]"
              } hidden md:flex justify-center items-center gap-10 text-gray-800 bg-white px-10 py-2 rounded-full border-[1px] border-white`}
            >
              {navLinks.map((item) => {
                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`${
                      pathname === item.href &&
                      " decoration-pizza_black bg_gray py-[6px] px-5 rounded-full"
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
                  className="btn_ghost border-[1px] border-pizza_wood-100 hover:bg-pizza_wood-100 text-pizza_black flex items-center justify-center cursor-pointer"
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
                  <IoIosArrowDown
                    className={`${
                      userMenu ? "rotate-180 w-4 h-4 " : ""
                    }w-4 h-4 transition-all`}
                  />
                </div>
              ) : (
                <Link
                  className="btn_ghost border-[1px] border-pizza_wood-200 hover:bg-pizza_wood-200 text-pizza_black hover:text-white"
                  href={"/login"}
                >
                  Login
                </Link>
              )}
              <RiMenuFoldLine
                className="w-6 h-6 cursor-pointer link_hover md:hidden "
                onClick={handleMobileMenu}
              />
            </div>
          </div>
        </div>
      </nav>

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
