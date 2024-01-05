import Link from "next/link";
import React from "react";

const BackToLogin = () => {
  return (
    <section className="max-w-7xl h-screen w-full text-center m-auto pt-32 text-xl">
      <p className="mb-2 text-gray-500">Not an admin!</p>

      <Link href={"/login"} className="underline text-pizza_red-500">
        Back to Login page{" "}
      </Link>
    </section>
  );
};

export default BackToLogin;
