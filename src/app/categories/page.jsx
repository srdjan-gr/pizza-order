"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

import DashboardMenu from "@/components/dashboard/DashboardMenu";
import DashboardCategoryForm from "@/components/dashboard/DashboardCategoryForm";
import CategoryList from "@/components/dashboard/CategoryList";
import Loading from "@/components/utility/Loading";
import { sendStatusCode } from "next/dist/server/api-utils";

const Page = () => {
  const [isAdminProfile, setIsAdminProfile] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);

  const [IsCreatedCategory, setIsCreatedCategory] = useState(false);

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
  if (session.status === "loading" || isLoadingProfile) {
    return <Loading />;
  }

  if (!isAdminProfile) {
    return (
      <section className="max-w-7xl h-screen w-full text-center m-auto pt-32 text-xl">
        <p className="mb-2 text-gray-500">Not an admin!</p>
        <Link href={"/login"} className="underline text-pizza_red-500">
          Back to Login page
        </Link>
      </section>
    );
  }

  return (
    <section className="max-w-7xl min-h-screen m-auto pt-20">
      <h1 className="text-xl text-gray-400 w-full max-w-xs underline mt-5 mb-10">
        Categories
      </h1>

      <div className="flex ">
        {/* left Navigation */}
        <DashboardMenu />

        <div className="flex flex-col px-10 w-4/5">
          {/* <UsersList /> */}
          <DashboardCategoryForm
            setIsCreatedCategory={setIsCreatedCategory}
            IsCreatedCategory={IsCreatedCategory}
          />

          <div className="border-b border-gray-300 w-full mt-10 mb-8"></div>

          <CategoryList
            setIsCreatedCategory={setIsCreatedCategory}
            IsCreatedCategory={IsCreatedCategory}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
