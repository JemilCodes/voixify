"use client";

import "./style.css";

import { useEffect, useRef } from "react";

import { componentsStore } from "../store/components";

import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  const footerRef = useRef();

  const { setFooterRef } = componentsStore();

  useEffect(() => {
    setFooterRef(footerRef);
  }, []);

  return (
    <div
      ref={footerRef}
      className=" w-full mb-20 max600:mb-10  flex justify-between max600:flex-col max600:gap-10 "
    >
      <div className=" flex flex-col gap-7 ">
        <p className="headerText2">Get In Touch</p>
        <p className="text-sm font-extrabold text-text">
          the quick fox jumps over the lazy dog
        </p>
        <div className=" flex items-center gap-4">
          <FaFacebookSquare className=" text-blue-600 w-11 h-11" />
          <img
            src="/inst-logo.png"
            width={40}
            height={40}
            className=" cursor-pointer"
          />
          <img
            src="/x-logo.png"
            width={36}
            height={36}
            className=" cursor-pointer"
          />
        </div>
      </div>
      <div className="flex gap-14 max600:justify-between ">
        <div className=" flex flex-col gap-4">
          <p className="headerText2">Company Info</p>
          <p className="text-sm font-extrabold text-text">
            the quick fox jumps
          </p>
          <p className="text-sm font-extrabold text-text">
            the quick fox jumps
          </p>
          <p className="text-sm font-extrabold text-text">
            the quick fox jumps
          </p>
          <p className="text-sm font-extrabold text-text">
            the quick fox jumps
          </p>
        </div>
        <div className=" flex flex-col gap-4">
          <p className="headerText2">Features</p>
          <p className="text-sm font-extrabold text-text">
            the quick fox jumps
          </p>
          <p className="text-sm font-extrabold text-text">
            the quick fox jumps
          </p>
          <p className="text-sm font-extrabold text-text">
            the quick fox jumps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
