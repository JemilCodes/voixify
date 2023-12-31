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
    <div
      ref={homeRef}
      className=" pt-2 mb-20  w-full pageHeight  flex flex-col"
    >
      {/* home section */}
      <div className=" w-full flex-1 flex  max768:flex-col-reverse max768:gap-10 items-center justify-between">
        <div className="w-1/2 max768:w-full max768:items-center max768:text-center flex flex-col  gap-4">
          <p className="bannerText text-accent2">
            Boost Your Reputation in 3 Simple Steps
          </p>
          <div className=" flex flex-col gap-2">
            <p className="headerInfosmall text-accent">
              Step 1: "Connect" Link all your profiles like Google My Business,
              Facebook, Booking.com, Airbnb and lots more with one click.
            </p>
            <p className="headerInfosmall text-accent">
              Step 2: "Share" your Voixify page via SMS, Email, QR Code and NFC
              to make leaving 5 stars easy.
            </p>
            <p className="headerInfosmall text-accent">
              Step 3: "Relax" Our solution delights customers to earn your
              business glowing reviews across the web while you watch your
              ranking and sales surge automatically!
            </p>
          </div>

          <p className="headerInfo2 text-text w-[357px]">
            Fill in your mail to get started with Voixify
          </p>
          <div className=" bg-const w-[350px] max350:w-[300px] h-12 rounded-2xl shadow-inner">
            <input
              className=" w-full h-11 bg-transparent bodyInfo text-text placeholder:text-text rounded-2xl outline-none p-3"
              placeholder="Enter your email address"
            />
          </div>
          <button
            style={{
              boxShadow:
                "inset -4px -4px 10px #28e500, inset 4px 4px 10px 1px #28e500",
            }}
            className=" w-[200px] h-11 headerInfo text-bg center bg-accent2 rounded-3xl outline-none border-none"
          >
            Submit
          </button>
        </div>
        <div className=" relative w-[400px] h-[400px] max1040:w-[350px] max1040:h-[350px] max600:w-[300px] max600:h-[300px] flex items-center justify-center">
          <div
            style={{
              boxShadow:
                "inset -4px -4px 10px #28e500, inset 4px 4px 10px 1px #28e500",
            }}
            className=" w-full h-full rounded-full bg-accent"
          ></div>
          <img
            className="absolute "
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
