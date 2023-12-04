"use client";

import "./style.css";

import { useEffect, useRef } from "react";

import { componentsStore } from "../store/components";

import { BiMessageSquareDetail } from "react-icons/bi";
import { TiTick } from "react-icons/ti";

const Pricing = () => {
  const pricingRef = useRef();

  const { setPricingRef } = componentsStore();

  useEffect(() => {
    setPricingRef(pricingRef);
  }, []);

  return (
    <div
      ref={pricingRef}
      className=" w-full pageHeight  flex flex-col items-center justify-center"
    >
      <p className=" headerText mb-5 text-accent">Pricing</p>
      <p className="bodyInfo w-2/3 text-text mb-20 text-center">
        Embrace life's vastness, venture forth, and discover the wonders waiting
        beyond. The world beckons; seize its grand offerings now!
      </p>
      <div className=" grid grid-cols-3 gap-10">
        {[{}, {}, {}].map(({}, i) => {
          return (
            <div
              key={i}
              className={`priceShadow p-10 flex flex-col items-center justify-center gap-6 ${
                i === 1 ? "priceSelect" : ""
              }`}
            >
              <p className=" headerInfo">Basic Plan</p>
              <div className=" text-sm text-center flex justify-center items-center gap-2">
                <p className="headerText">20$</p>
                <p>/</p>
                <p className=" text-text font-bold text-sm">Month</p>
              </div>
              <p className=" text-center text-text text-base">
                paragraph pricing-description
              </p>
              <div className=" flex flex-col gap-6">
                {[{}, {}, {}, {}].map(() => {
                  return (
                    <div className=" flex items-center gap-2">
                      <TiTick className=" text-green-400 " />
                      <p className="text-sm font-extrabold">
                        Unlimited product updates
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
