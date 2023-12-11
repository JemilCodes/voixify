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
          {[{}, {}, {}, {}].map(({}, i) => {
            return (
              <div
                key={i}
                className={` rounded-xl w-full h-full  bg-bg p-5 max1200:p-10 max600:p-5 flex flex-col items-center justify-center max600:gap-4 gap-6 priceShadow`}
              >
                <p className=" headerInfo">Top ratings</p>

                <p className=" text-center text-text text-base">
                  paragraph pricing-description
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
