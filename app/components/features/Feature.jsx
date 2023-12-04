"use client";

import "./style.css";

import { useEffect, useRef } from "react";

import { componentsStore } from "../store/components";

import { BiMessageSquareDetail } from "react-icons/bi";

const Features = () => {
  const featuresRef = useRef();

  const { setFeaturesRef } = componentsStore();

  useEffect(() => {
    setFeaturesRef(featuresRef);
  }, []);

  return (
    <div
      ref={featuresRef}
      className="  w-full pageHeight  flex flex-col items-center justify-center"
    >
      <p className=" headerText mb-5 text-accent">Features</p>
      <p className="bodyInfo w-2/3 text-text mb-20 text-center">
        Embrace life's vastness, venture forth, and discover the wonders waiting
        beyond. The world beckons; seize its grand offerings now!
      </p>
      <div className=" grid grid-cols-4">
        {[{}, {}, {}, {}].map(({}, i) => {
          return (
            <div
              key={i}
              className=" p-6  flex flex-col items-center justify-center gap-3"
            >
              <div className=" w-[50px] h-[50px] center rounded-lg bg-[#D4EAF6]">
                <BiMessageSquareDetail className=" text-[#31A0FE] w-6 h-6" />
              </div>
              <p className=" headerInfo">Task Management</p>
              <p className=" text-sm text-center text-text">
                Organize and track tasks with ease.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
