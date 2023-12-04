"use client";

import Image from "next/image";

import "./style.css";

import { useEffect, useRef } from "react";

import { componentsStore } from "../store/components";

const HomePage = () => {
  const homeRef = useRef();

  const { setHomeRef } = componentsStore();

  useEffect(() => {
    setHomeRef(homeRef);
  }, []);

  return (
    <div ref={homeRef} className=" w-full pageHeight  flex flex-col">
      {/* home section */}
      <div className=" w-full flex-1 flex items-center justify-between">
        <div className="w-1/2 flex flex-col  gap-7">
          <p className="bannerText text-accent">
            Streamline all your reviews and ratings with Voixify.
          </p>
          <p className="headerInfo text-text w-[357px]">
            Effortlessly manage tasks, teams, and projects with our intuitive
            management app. Simplify your work, amplify your productivity.
          </p>
          <input
            className=" w-[350px] h-11 border-2 rounded-2xl outline-none p-3"
            placeholder="Enter your email address"
          />
          <button className="w-[200px] h-11 bodyText text-bg center bg-accent rounded-2xl outline-none border-none">
            Submit
          </button>
        </div>
        <div className=" relative w-[400px] h-[400px] flex items-center justify-center">
          <div className=" w-full h-full rounded-full bg-accent"></div>
          <Image
            className="absolute"
            src={"/laptop1.png"}
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
