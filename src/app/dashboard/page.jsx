"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

import { redirect } from "next/navigation";
import Loading from "@/components/utility/Loading";
import DashboardMenu from "@/components/dashboard/DashboardMenu";
import BackToLogin from "@/components/dashboard/BackToLogin";

const Page = () => {
  const [isAdminProfile, setIsAdminProfile] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);

  const session = useSession();
  const sessionStatus = session.status;

  useEffect(() => {
    setIsLoadingProfile(true);

    // Na ucitavanju uzimamo podatke o korisniku iz api/userprofile GET
    if (sessionStatus === "authenticated") {
      fetch("./api/userProfile").then((response) => {
        response.json().then((data) => {
          setIsAdminProfile(data.admin);
          setIsLoadingProfile(false);
        });
      });
    }
  }, [sessionStatus, session]);

  // Spiner for page loading
  if (session.status === "loading") {
    return <Loading />;
  }

  if (!isAdminProfile) {
    return <BackToLogin />;
  }

  if (isAdminProfile) {
    return (
      <section className="max-w-7xl h-screen m-auto pt-5">
        <h1 className="text-xl text-gray-400 w-full max-w-xs underline mt-5 mb-10">
          Admin dashboard
        </h1>

        {/* left Navigation */}
        <DashboardMenu />
      </section>
    );
  }
};

export default Page;
