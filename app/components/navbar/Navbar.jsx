"use client";

import { navStore } from "../store/nav";
import { componentsStore } from "../store/components";
import Link from "next/link";

const Navbar = () => {
  const { handleNav } = navStore();
  const { homeRef, featuresRef, pricingRef, footerRef } = componentsStore();
  return (
    <div className=" sticky z-[100] bg-bg w-full top-0 right-0 left-0 h-16  pt-4 pb-4 flex justify-between">
      {/* logo */}
      <div className=" flex gap-2 items-center">
        <img src={"/logo.png"} width={50} height={50} />
        <p className=" text-accent2 headerText">VOIXIFY</p>
      </div>
      {/* links */}
      <div className=" max768:hidden flex items-center gap-4">
        {[
          { title: "Home", action: (e) => handleNav(e, homeRef) },
          { title: "Features", action: (e) => handleNav(e, featuresRef) },
          { title: "Pricing", action: (e) => handleNav(e, pricingRef) },
          { title: "Footer", action: (e) => handleNav(e, footerRef) },
          { title: "Blog" },
        ].map(({ title, action }, i) => {
          return (
            <>
              {title !== "Blog" ? (
                <div
                  key={i}
                  onClick={(e) => action(e)}
                  className=" h-10 pl-2 pr-2 hover:border-b-2 hover:text-accent border-accent center cursor-pointer headerInfo text-text"
                >
                  {title}
                </div>
              ) : (
                <Link
                  key={i}
                  href={"/#"}
                  className=" h-10 pl-2 pr-2 hover:border-b-2 hover:text-accent border-accent center cursor-pointer headerInfo text-text"
                >
                  {title}
                </Link>
              )}
            </>
          );
        })}
      </div>
      {/* sign up */}
      <div className=" max768:hidden center rounded-2xl pl-6 pr-6 p-4 bodyText !text-sm cursor-pointer bg-accent text-bg ">
        Sign up
      </div>
      {/*  */}
    </div>
  );
};

export default Navbar;
