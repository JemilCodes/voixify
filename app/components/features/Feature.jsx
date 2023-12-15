"use client";

import "./style.css";

import { useEffect, useRef } from "react";

import { componentsStore } from "../store/components";

const Features = () => {
  const featuresRef = useRef();

  const { setFeaturesRef } = componentsStore();

  useEffect(() => {
    setFeaturesRef(featuresRef);
  }, []);

  return (
    <>
      <div
        ref={featuresRef}
        className=" relative  mb-36 w-full flex flex-col items-center justify-center"
      >
        <p className=" headerText mb-5 text-accent">Features</p>
        <p className="headerInfo w-2/3 text-text mb-20 text-center">
          Take a look at the amazing features we offer
        </p>

        <div className="  max600:w-[90%] grid grid-cols-4 gap-7 max1200:grid-cols-2 max600:grid-cols-1">
          {[
            {
              title: "Improved Google Rankings",
              info: "Voixify helps to improve your Google rankings by optimizing your reviews and ratings.",
            },
            {
              title: "AI-Powered Response Generation",
              info: "AI technology assists generating timely, relevant responses to customer reviews.",
            },
            {
              title: "Video Testimonials",
              info: "Voixify collects engaging customer video testimonials to enhance brand credibility.",
            },
            {
              title: "Flexible Review Collection Option",
              info: "Channels to collect reviews include NFC, SMS, email and QR codes.",
            },
          ].map(({ title, info }, i) => {
            return (
              <div
                key={i}
                className={` rounded-xl w-full h-full  bg-bg p-5 max1200:p-10 max600:p-5 flex flex-col items-center justify-center max600:gap-4 gap-6 priceShadow`}
              >
                <p className=" headerInfosmall text-center text-accent2">
                  {title}
                </p>

                <p className=" text-center text-text text-base font-extrabold">
                  {info}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Features;
