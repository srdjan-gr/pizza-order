"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

import DashboardMenu from "@/components/dashboard/DashboardMenu";
import DashboardUserList from "@/components/dashboard/UserList";
import Loading from "@/components/utility/Loading";
import BackToLogin from "@/components/dashboard/BackToLogin";

const Page = () => {
  const [isAdminProfile, setIsAdminProfile] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);

  const session = useSession();

  useEffect(() => {
    setIsLoadingProfile(true);

    // Na ucitavanju uzimamo podatke o korisniku iz api/userprofile GET
    if (session.status === "authenticated") {
      fetch("./api/userProfile").then((response) => {
        response.json().then((data) => {
          setIsAdminProfile(data.admin);
          setIsLoadingProfile(false);
        });
      });
    }
  }, [session.status, session]);

  // Spiner for page loading
  if (session.status === "loading" || isLoadingProfile) {
    return <Loading />;
  }

  if (!isAdminProfile) {
    return <BackToLogin />;
  }

  return (
    <section className="max-w-7xl h-screen m-auto pt-5">
      <h1 className="text-xl text-gray-400 w-full max-w-xs underline mt-5 mb-10 px-5 lg:px-0">
        Users list
      </h1>

      <div className="flex px-5 lg:px-10 w-full">
        {/* left Navigation */}
        <DashboardMenu />

        {/* <UsersList /> */}
        <DashboardUserList />
      </div>
    </section>
  );
};

export default Page;
