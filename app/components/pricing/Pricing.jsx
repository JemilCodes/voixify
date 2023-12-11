"use client";

import "./style.css";

import { useEffect, useRef, useState } from "react";

import { componentsStore } from "../store/components";

import { TiTick } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { PiCurrencyGbpBold } from "react-icons/pi";
import { FaDollarSign } from "react-icons/fa6";

const Pricing = () => {
  const pricingRef = useRef();

  const { setPricingRef } = componentsStore();

  const [toggleCurr, setToggleCurr] = useState(false);
  const [curr, setCurr] = useState("dollar");

  const CurrIcon =
    curr === "dollar"
      ? FaDollarSign
      : curr === "naira"
      ? TbCurrencyNaira
      : PiCurrencyGbpBold;

  const handleCurr = (payload) => {
    setCurr(payload);
    setToggleCurr((prev) => !prev);
  };

  useEffect(() => {
    setPricingRef(pricingRef);
  }, []);

  return (
    <>
      <div
        ref={pricingRef}
        className=" relative  mb-36 w-full flex flex-col items-center justify-center"
      >
        <p className=" headerText mb-5 text-accent">Pricing</p>
        <p className="headerInfo w-2/3 text-text mb-2 text-center">
          Choose your choice of currency
        </p>

        <div className=" p-2 pl-4 pr-4 mb-20 rounded-2xl flex items-center gap-7 justify-between bg-const shadow-inner">
          <p className="headerText text-text ">
            <CurrIcon
              style={{
                width: curr === "naira" ? "32px" : "",
                height: curr === "naira" ? "32px" : "",
              }}
            />
          </p>
          <IoIosArrowDown
            onClick={() => setToggleCurr((prev) => !prev)}
            className="headerInfo text-text cursor-pointer"
          />
        </div>
        {toggleCurr && (
          <div className=" z-50 absolute top-[135px] p-2 pl-4 pr-4 mb-20 rounded-2xl flex items-center gap-7 justify-between bg-const shadow-inner">
            <FaDollarSign
              onClick={() => handleCurr("dollar")}
              className="  headerText text-text hover:text-white cursor-pointer "
            />
            <TbCurrencyNaira
              onClick={() => handleCurr("naira")}
              className=" !w-8 !h-8 headerText text-text hover:text-white cursor-pointer"
            />
            <PiCurrencyGbpBold
              onClick={() => handleCurr("gbp")}
              className=" !w-7 !h-7 headerText text-text hover:text-white cursor-pointer"
            />
          </div>
        )}

        <div className=" p-2 mb-10 rounded-2xl flex items-center gap-7 justify-between bg-const shadow-inner">
          <div className=" rounded-xl bg-bg p-2 text-sm">Monthly</div>
          <div className=" text-sm">Yearly</div>
        </div>

        <div className=" max600:w-[90%] grid grid-cols-3 gap-7 max1200:grid-cols-2 max600:grid-cols-1">
          {[{}, {}, {}].map(({}, i) => {
            return (
              <div
                key={i}
                className={` ${
                  i === 0
                    ? " max1200:col-span-1 max600:col-auto"
                    : i === 1
                    ? " max1200:col-span-1 max600:col-auto glowing-element"
                    : "  max1200:col-span-2 flex justify-center max600:col-auto"
                } rounded-xl w-full h-full  bg-bg p-10 max600:p-5 flex flex-col items-center justify-center max600:gap-4 gap-6 priceShadow`}
              >
                <p className=" headerInfo">Basic Plan</p>
                <div className=" text-sm text-center flex justify-center items-center gap-2">
                  <div className=" flex items-center headerText text-text ">
                    <p>20</p>
                    <CurrIcon
                      style={{
                        width: curr === "naira" ? "32px" : "",
                        height: curr === "naira" ? "32px" : "",
                      }}
                    />
                  </div>
                  <p>/</p>
                  <p className=" text-text font-bold text-sm">Month</p>
                </div>
                <p className=" text-center text-text text-base">
                  paragraph pricing-description
                </p>
                <div className=" flex flex-col gap-6 max600:gap-4">
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
                    background: "#31A0FE",
                    cursor: "pointer",
                  }}
                  className=" rounded-xl text-bg h-10 flex items-center justify-center w-full"
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
