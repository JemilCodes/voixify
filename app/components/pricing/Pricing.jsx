"use client";

import "./style.css";

import { useEffect, useRef } from "react";

import { componentsStore } from "../store/components";

import { TiTick } from "react-icons/ti";

import Slider from "../slider/Slider";

const Pricing = () => {
  const pricingRef = useRef();

  const { setPricingRef } = componentsStore();

  useEffect(() => {
    setPricingRef(pricingRef);
  }, []);

  return (
    <>
      <div
        ref={pricingRef}
        className=" hidden  mb-36 w-full max1200:flex flex-col items-center justify-center"
      >
        <p className=" headerText mb-5 text-accent">Pricing</p>
        <p className="bodyInfo w-2/3 text-text mb-20 text-center">
          Embrace life's vastness, venture forth, and discover the wonders
          waiting beyond. The world beckons; seize its grand offerings now!
        </p>
        <Slider
          showThumbs={false}
          className=" w-[100%] max1200:w-[60%] max768:w-[75%] max600:w-[95%] priceSelect   priceShadow rounded-xl"
        >
          {[{}, {}, {}].map(({}, i) => {
            return (
              <div
                key={i}
                className={` rounded-xl w-full h-full  bg-text p-10 flex flex-col items-center justify-center gap-6 priceSelect`}
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
                  {[{}, {}, {}, {}].map(({}, i) => {
                    return (
                      <div key={i} className=" flex items-center gap-2">
                        <TiTick className=" text-green-400 " />
                        <p className="text-sm font-extrabold">
                          Unlimited product updates
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div
                  style={{
                    fontFamily: "gorditaBold",
                    fontSize: "12px",
                    background:
                      i === 0 ? "#23856D" : i === 1 ? "#31A0FE" : "#EC5C2E",
                  }}
                  className=" rounded-xl text-bg h-10 flex items-center justify-center w-full"
                >
                  Continue to Membership
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* ///////////////////// */}

      <div
        ref={pricingRef}
        className=" max1200:hidden mb-36 w-full flex flex-col items-center justify-center"
      >
        <p className=" headerText mb-5 text-accent">Pricing</p>
        <p className="bodyInfo w-2/3 text-text mb-20 text-center">
          Embrace life's vastness, venture forth, and discover the wonders
          waiting beyond. The world beckons; seize its grand offerings now!
        </p>
        <div className=" w-full gap-14 grid grid-cols-3 max1040:grid-cols-2 max600:grid-cols-1 ">
          {[{}, {}, {}].map(({}, i) => {
            return (
              <div
                key={i}
                className={` priceShadow rounded-xl p-10 flex flex-col items-center justify-center gap-6 ${
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
                  {[{}, {}, {}, {}].map(({}, i) => {
                    return (
                      <div key={i} className=" flex items-center gap-2">
                        <TiTick className=" text-green-400 " />
                        <p className="text-sm font-extrabold">
                          Unlimited product updates
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div
                  style={{
                    fontFamily: "gorditaBold",
                    fontSize: "12px",
                    background:
                      i === 0 ? "#23856D" : i === 1 ? "#31A0FE" : "#EC5C2E",
                  }}
                  className=" rounded-xl text-bg bg-accent h-10 flex items-center justify-center w-full"
                >
                  Continue to Membership
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pricing;
