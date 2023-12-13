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
              info: "Voixify helps to improve your Google rankings by ensuring only good reviews and ratings not less than 4 gets to your Google My Business profile",
            },
            {
              title: "AI-Powered Response Generation",
              info: "The AI technology will assist in generating responses to customer reviews. This saves you time and ensures that your responses are timely and relevant.",
            },
            {
              title: "Video Testimonials",
              info: "Voixify also lets you collect engaging video testimonials from customers. These can be shared on social media to enhance your brand's credibility and visibilit",
            },
            {
              title: "NFC Integration for Enhanced Customer Interaction",
              info: "The innovative NFC (Near Field Communication) feature allows you to engage with customers using cutting-edge technology",
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
