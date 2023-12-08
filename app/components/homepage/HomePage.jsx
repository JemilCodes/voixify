"use client";

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
    <div ref={homeRef} className=" mb-20  w-full pageHeight  flex flex-col">
      {/* home section */}
      <div className=" w-full flex-1 flex  max768:flex-col-reverse max768:gap-10 items-center justify-between">
        <div className="w-1/2 max768:w-full max768:items-center max768:text-center flex flex-col  gap-7">
          <p className="bannerText text-accent">
            Boost your online reputation and testimonials on platforms like
            Google, Facebook, Bookings.com, Airbnb, and so on.
          </p>
          <p className="headerInfo2 text-text w-[357px]">
            Submit your mail to get started with voixify
          </p>
          <input
            className=" w-[350px] h-11 border-2 rounded-2xl outline-none p-3"
            placeholder="Enter your email address"
          />
          <button className="w-[200px] h-11 bodyText text-bg center bg-accent rounded-3xl outline-none border-none">
            Submit
          </button>
        </div>
        <div className=" relative w-[400px] h-[400px] max1040:w-[350px] max1040:h-[350px] flex items-center justify-center">
          <div className=" w-full h-full rounded-full bg-accent"></div>
          <img
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
