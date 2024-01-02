"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

import DashboardMenu from "@/components/dashboard/DashboardMenu";
import DashboardUserList from "@/components/dashboard/UserList";
import Loading from "@/components/utility/Loading";

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
    return (
      <section className="max-w-7xl h-screen w-full text-center m-auto pt-32 text-xl">
        <p className="mb-2 text-gray-500">Not an admin!</p>

        <Link href={"/login"} className="underline text-pizza_red-500">
          Back to Login page{" "}
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-7xl h-screen m-auto pt-20">
      <h1 className="text-xl text-gray-400 w-full max-w-xs underline mt-5 mb-10">
        Users list
      </h1>

      <div className="flex ">
        {/* left Navigation */}
        <DashboardMenu />

        {/* <UsersList /> */}
        <DashboardUserList />
      </div>
    </section>
  );
};

export default Page;
