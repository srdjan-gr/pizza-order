"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

import DashboardMenu from "@/components/dashboard/DashboardMenu";
import DashboardCategoryForm from "@/components/dashboard/DashboardCategoryForm";
import CategoryList from "@/components/dashboard/CategoryList";
import Loading from "@/components/utility/Loading";
import Divider from "@/components/utility/Divider";
import { sendStatusCode } from "next/dist/server/api-utils";
import BackToLogin from "@/components/dashboard/BackToLogin";

// export const metadata = {
//   title: "Categories",
//   description: "Dashboard categories page.",
// };

const Page = () => {
  const [isAdminProfile, setIsAdminProfile] = useState(false);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);

  const [IsCreatedCategory, setIsCreatedCategory] = useState(false);

  const session = useSession();
  const sessionStatus = session.status;

  useEffect(() => {
    if (window !== "undefined") {
      setIsLoadingProfile(true);

      if (sessionStatus === "authenticated") {
        fetch("/api/userProfile").then((response) =>
          response.json().then((data) => {
            setIsAdminProfile(data.admin);
            setIsLoadingProfile(false);
          })
        );
      }
    }
  }, [session, sessionStatus]);

  // Spiner for page loading
  if (session.status === "loading" || isLoadingProfile) {
    return <Loading />;
  }

  if (!isAdminProfile) {
    return <BackToLogin />;
  }

  return (
    <section className="max-w-7xl min-h-screen m-auto pt-5">
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
          <Divider />
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
