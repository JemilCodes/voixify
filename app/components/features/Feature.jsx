"use client";

import "./style.css";

import { useEffect, useRef } from "react";

import { componentsStore } from "../store/components";

import { BiMessageSquareDetail } from "react-icons/bi";

import Slider from "../slider/Slider";

const featureList = [
  {
    title: "Multi-Channel Review Collection Approach",
    info: "With the integration of WhatsApp, Email, SMS and QR code, our client was able to seamlessly ask for quick reviews from customers through multiple channels.",
  },
  {
    title: "Multi-Channel Review Collection Approach",
    info: "With the integration of WhatsApp, Email, SMS and QR code, our client was able to seamlessly ask for quick reviews from customers through multiple channels.",
  },
  {
    title: "Multi-Channel Review Collection Approach",
    info: "With the integration of WhatsApp, Email, SMS and QR code, our client was able to seamlessly ask for quick reviews from customers through multiple channels.",
  },
  {
    title: "Multi-Channel Review Collection Approach",
    info: "With the integration of WhatsApp, Email, SMS and QR code, our client was able to seamlessly ask for quick reviews from customers through multiple channels.",
  },
];

const Features = () => {
  const featuresRef = useRef();

  const { setFeaturesRef } = componentsStore();

  useEffect(() => {
    setFeaturesRef(featuresRef);
  }, []);

  return (
    <div
      ref={featuresRef}
      className=" mb-20 w-full pageHeight  flex flex-col items-center justify-center"
    >
      <p className=" headerText mb-5 text-accent">Features</p>
      <p className="bodyInfo w-2/3 text-text mb-20 text-center">
        Embrace life's vastness, venture forth, and discover the wonders waiting
        beyond. The world beckons; seize its grand offerings now!
      </p>
      <Slider
        showThumbs={false}
        className=" w-[60%] max1200:w-[60%] max768:w-[75%] max600:w-[95%] priceSelect   priceShadow rounded-xl"
      >
        {featureList.map(({ title, info }, i) => {
          return (
            <div className=" relative" key={i}>
              <div className=" z-50 absolute top-0 left-0  w-[130px] h-[130px]">
                <img src="/pills.png" width={100} height={100} />
              </div>
              <div className=" min-h-[300px] relative  rounded-xl bg-[#E1F4FF] p-6  flex flex-col items-center justify-center gap-3">
                <div className=" w-[50px] h-[50px] center rounded-lg bg-[#D4EAF6]">
                  <BiMessageSquareDetail className=" text-[#31A0FE] w-6 h-6" />
                </div>
                <p className=" headerInfo text-center">{title && title}</p>
                <p className=" text-sm text-center text-text">{info && info}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Features;
