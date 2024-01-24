"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

import DashboardMenu from "@/components/dashboard/DashboardMenu";
import CreatePizzaForm from "@/components/dashboard/CreatePizzaForm";
import Loading from "@/components/utility/Loading";
import BackToLogin from "@/components/dashboard/BackToLogin";

const Page = () => {
  const [isAdminProfile, setIsAdminProfile] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [IsCreatedItem, setIsCreatedItem] = useState(false);

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

  // Spiner for page loading
  // if (session.status === "loading" || isLoadingProfile) {
  //   return <Loading />;
  // }

  if (!isAdminProfile) {
    return <BackToLogin />;
  }

  return (
    <section className="max-w-7xl min-h-screen m-auto py-5">
      <h1 className="text-xl text-gray-400 w-full max-w-xs underline mb-10 px-5 lg:px-0">
        Create new pizza
      </h1>

      <div className="flex ">
        {/* left Navigation */}
        <DashboardMenu />

        <div className="flex flex-col px-5 lg:px-10 w-full lg:w-4/5">
          {/* Create pizza form */}
          <CreatePizzaForm />
        </div>
      </div>
    </section>
  );
};

export default Page;
