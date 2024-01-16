"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  dashboardMenuLinksAdmin,
  dashboardMenuLinksUser,
} from "@/app/applicationData";

const DashboardMenu = () => {
  const [isAdminProfile, setIsAdminProfile] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);

  const pathname = usePathname();

  const session = useSession();
  const sessionStatus = session.status;

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
