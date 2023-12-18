"use client";

import "./style.css";

import { useEffect, useRef, useState } from "react";

import { componentsStore } from "../store/components";

import { TiTick } from "react-icons/ti";
import { IoIosArrowDown } from "react-icons/io";
import { TbCurrencyNaira } from "react-icons/tb";
import { PiCurrencyGbpBold } from "react-icons/pi";
import { FaDollarSign } from "react-icons/fa6";

// import { Convert } from "easy-currencies";

const Pricing = () => {
  const pricingRef = useRef();

  const { setPricingRef } = componentsStore();

  const [toggleCurr, setToggleCurr] = useState(false);
  const [duration, setDuration] = useState("monthly");
  const [curr, setCurr] = useState("dollar");
  const [priceMonth, setPriceMonth] = useState(0);
  const [priceYear, setPriceYear] = useState(0);
  const [priceMonthS, setPriceMonthS] = useState(0);
  const [priceYearS, setPriceYearS] = useState(0);
  const [priceMonthP, setPriceMonthP] = useState(0);
  const [priceYearP, setPriceYearP] = useState(0);

  const CurrIcon =
    curr === "dollar"
      ? FaDollarSign
      : curr === "naira"
      ? TbCurrencyNaira
      : PiCurrencyGbpBold;

  const handleCurr = async (payload) => {
    if (payload === "naira") {
      setPriceMonth("5,000");
      setPriceYear("50,000");
      setPriceMonthS("10,000");
      setPriceYearS("75,000");
      setPriceMonthP("15,000");
      setPriceYearP("150,000");
    }
    if (payload === "dollar") {
      // const pdm = await Convert(5000).from("NGN").to("USD");
      // const pdy = await Convert(50000).from("NGN").to("USD");
      // const pdmS = await Convert(10000).from("NGN").to("USD");
      // const pdyS = await Convert(75000).from("NGN").to("USD");
      // const pdmP = await Convert(15000).from("NGN").to("USD");
      // const pdyP = await Convert(150000).from("NGN").to("USD");
      setPriceMonth(50);
      setPriceYear(500);
      setPriceMonthS(100);
      setPriceYearS(750);
      setPriceMonthP(150);
      setPriceYearP(1500);
    }
    if (payload === "gbp") {
      // const pgm = await Convert(5000).from("NGN").to("GBP");
      // const pgy = await Convert(50000).from("NGN").to("GBP");
      // const pgmB = await Convert(10000).from("NGN").to("GBP");
      // const pgyB = await Convert(75000).from("NGN").to("GBP");
      // const pgmP = await Convert(15000).from("NGN").to("GBP");
      // const pgyP = await Convert(150000).from("NGN").to("GBP");
      setPriceMonth(50);
      setPriceYear(500);
      setPriceMonthS(100);
      setPriceYearS(750);
      setPriceMonthP(150);
      setPriceYearP(1500);
    }
    setCurr(payload);
    setToggleCurr((prev) => !prev);
  };

  useEffect(() => {
    setPricingRef(pricingRef);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const bcdApi = `http://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`;
          fetch(bcdApi)
            .then((res) => res.json())
            .then((data) => {
              if (data.countryName === "Nigeria") {
                setCurr("naira");
                setPriceMonth("5,000");
                setPriceYear("50,000");
                setPriceMonthS("10,000");
                setPriceYearS("75,000");
                setPriceMonthP("15,000");
                setPriceYearP("150,000");
              } else {
                setPriceMonth(50);
                setPriceYear(500);
                setPriceMonthS(100);
                setPriceYearS(750);
                setPriceMonthP(150);
                setPriceYearP(1500);
              }
            });
        },
        (err) => {
          console.log(
            "By granting location access empowers us to assist you in selecting your preferred currency"
          );
        }
      );
    } else {
      alert("geolocation is not supported by your browser");
    }
  }, []);

  return (
    <>
      <div
        ref={pricingRef}
        className=" relative  mb-36 w-full flex flex-col items-center justify-center"
      >
        <p className=" headerText mb-5 text-accent">Pricing</p>
        <p className="headerInfo w-2/3 text-text mb-2 text-center">
          Select the currency of your preference.
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
          <div className=" z-50 absolute top-[135px] max768:top-[140px] max600:top-[170px] p-2 pl-4 pr-4  rounded-2xl flex items-center gap-7 justify-between bg-const shadow-inner">
            {curr !== "dollar" && (
              <FaDollarSign
                onClick={() => handleCurr("dollar")}
                className="  headerText text-text hover:text-white cursor-pointer "
              />
            )}
            {curr !== "naira" && (
              <TbCurrencyNaira
                onClick={() => handleCurr("naira")}
                className=" !w-8 !h-8 headerText text-text hover:text-white cursor-pointer"
              />
            )}
            {curr !== "gbp" && (
              <PiCurrencyGbpBold
                onClick={() => handleCurr("gbp")}
                className=" !w-7 !h-7 headerText text-text hover:text-white cursor-pointer"
              />
            )}
          </div>
        )}

        <div className=" h-11 p-[1px]  mb-5 rounded-2xl flex items-center gap-4 justify-between bg-const shadow-inner">
          <div
            className={` headerInfosmall text-text pl-1 pr-1 h-full flex justify-center items-center rounded-2xl text-sm cursor-pointer font-extrabold ${
              duration === "monthly" ? "bg-bg border-2 border-accent2" : ""
            }`}
            onClick={() => setDuration("monthly")}
          >
            Monthly
          </div>
          <div
            className={` headerInfosmall pl-1 pr-1 h-full flex justify-center items-center  rounded-2xl text-text text-sm cursor-pointer font-extrabold ${
              duration === "yearly" ? "bg-bg border-2 border-accent2" : ""
            }`}
            onClick={() => setDuration("yearly")}
          >
            Yearly
          </div>
        </div>

        <div className=" max600:w-[90%] grid grid-cols-3 gap-7 max1200:grid-cols-2 max600:grid-cols-1">
          {[
            {
              title: "Basic Plan",
              price: `${duration === "monthly" ? priceMonth : priceYear}`,
              info: "This plan provides the basic featues of Voixify",
              benefits: [
                { info: "AI-Powered Response Generation" },
                { info: "Improved Google Rankings" },
                { info: "Video Testimonials" },
                { info: "Review Page Customization" },
              ],
            },
            {
              title: "Standard Plan",
              price: `${duration === "monthly" ? priceMonthS : priceYearS}`,
              info: "Voixify suggests this plan for cost-effective access to our key features.",
              benefits: [
                { info: "All the basic features" },
                { info: "Higher Review Cap at 2,000 Reviews" },
              ],
            },
            {
              title: "Premium Plan",
              price: `${duration === "monthly" ? priceMonthP : priceYearP}`,
              info: "This plan provides unrestricted access to all Voixify features.",
              benefits: [
                { info: "All the basic and premium features" },
                { info: "Unlimited Reviews" },
                { info: "NFC Integration for Enhanced Customer Interaction" },
              ],
            },
          ].map(({ title, price, benefits, info }, i) => {
            return (
              <div
                key={i}
                className={` ${
                  i === 0
                    ? " max1200:col-span-1 max600:col-auto"
                    : i === 1
                    ? " max1200:col-span-1 max600:col-auto glowing-element"
                    : "  max1200:col-span-2 flex justify-center max600:col-auto"
                } relative rounded-xl w-full h-full  bg-bg p-10 max600:p-5 flex flex-col items-center justify-center max600:gap-4 gap-6 priceShadow`}
              >
                <div
                  className={` p-2 pl-4 pr-4 bg-accent2 justify-center items-center text-white rounded-xl font-extrabold hidden ${
                    i === 1 && "!flex"
                  }`}
                >
                  Recommended
                </div>
                <p className=" headerInfo">{title}</p>
                <div className=" text-sm text-center flex justify-center items-center gap-2">
                  <div className=" flex items-center headerText text-text ">
                    <p>{price}</p>
                    <CurrIcon
                      style={{
                        width: curr === "naira" ? "32px" : "",
                        height: curr === "naira" ? "32px" : "",
                      }}
                    />
                  </div>
                  <p>/</p>
                  <p className=" text-text font-bold text-sm capitalize ">
                    {duration}
                  </p>
                </div>
                <p className=" text-center text-text text-sm font-extrabold">
                  {info}
                </p>
                <div className=" flex flex-col gap-6 max600:gap-4">
                  {benefits.map(({ info }, i) => {
                    return (
                      <div key={i} className=" flex items-center gap-2">
                        <TiTick className=" text-green-400 " />
                        <p className="text-sm font-extrabold">{info}</p>
                      </div>
                    );
                  })}
                </div>
                <div
                  style={{
                    fontFamily: "gorditaBold",
                    fontSize: "12px",
                    // background: "#31A0FE",
                    cursor: "pointer",
                    boxShadow:
                      "inset -4px -4px 10px #28e500, inset 4px 4px 10px 1px #28e500",
                  }}
                  className=" rounded-xl bg-accent2 text-bg h-10 flex items-center justify-center w-full"
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
