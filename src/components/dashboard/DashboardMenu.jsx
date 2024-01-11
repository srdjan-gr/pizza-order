"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  HiOutlineCog6Tooth,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineSquares2X2,
} from "react-icons/hi2";
import {
  LiaUserCogSolid,
  LiaUserFriendsSolid,
  LiaCartPlusSolid,
} from "react-icons/lia";

const DashboardMenu = () => {
  const [isAdminProfile, setIsAdminProfile] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);

  const pathname = usePathname();

  const session = useSession();
  const sessionStatus = session.status;

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
  }, [session, sessionStatus]);

  if (isLoadingProfile) {
    return <p className="text-gray-400 w-1/5">Loading...</p>;
  }

  if (!isAdminProfile) {
    return (
      <nav className="flex flex-col items-start w-1/5 ">
        <div className="flex flex-col items-start py-5 ps-2 pe-10 w-full border-r border-gray-300 ">
          {dashboardMenuLinksUser.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`${
                pathname === item.href &&
                "bg-pizza_red-50 rounded-md px-5 py-[6px] text-white"
              } w-full text-lg text-pizza_wood-400 mb-[6px] hover:text-white flex items-center justify-between hover:bg-pizza_red-100 hover:rounded-md px-5 py-2`}
            >
              {item.title}
              {item.icon}
            </Link>
          ))}
        </div>
      </nav>
    );
  }

  if (isAdminProfile) {
    return (
      <nav className="hidden lg:flex lg:flex-col items-start w-1/5 ">
        <div className="flex flex-col items-start py-5 ps-2 pe-10 w-full border-r border-gray-300 ">
          {dashboardMenuLinksAdmin.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`${
                pathname === item.href &&
                "bg-pizza_red-50 rounded-md px-5 py-[6px] text-white"
              } w-full text-lg text-pizza_wood-400 mb-[6px] hover:text-white flex items-center justify-between hover:bg-pizza_red-100 hover:rounded-md px-5 py-2`}
            >
              {item.title}
              {item.icon}
            </Link>
          ))}
        </div>
      </nav>
    );
  }
};

export default DashboardMenu;
