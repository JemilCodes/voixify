"use client";

import "./style.css";

import { useEffect, useRef } from "react";

import { componentsStore } from "../store/components";

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";

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
          <FaFacebookSquare className=" w-7 cursor-pointer h-7" />
          <FaSquareXTwitter className=" w-7 cursor-pointer h-7" />
          <SiYoutube className=" w-7 h-7 cursor-pointer" />
          <FaTiktok className=" w-6 h-6 cursor-pointer" />
        </div>
      </div>
      <div className="flex gap-14 max600:justify-between ">
        <div className=" flex flex-col gap-4">
          <p className="headerText2">Company Info</p>
          <p className="text-sm font-extrabold text-text">
            <a
              href="https://info@voixify.com"
              style={{ textDecoration: "none" }}
            >
              info@voixify.com
            </a>
          </p>
          <p className="text-sm font-extrabold text-text">Address</p>
          <p className="text-sm font-extrabold text-text">Phone number</p>
        </div>
        <div className=" flex flex-col gap-4">
          <p className="headerText2">Useful Links</p>
          <p className="text-sm font-extrabold text-text cursor-pointer">
            Book a demo
          </p>
          <p className="text-sm font-extrabold text-text cursor-pointer">
            Terms and Condition
          </p>
          <p className="text-sm font-extrabold text-text cursor-pointer">
            Case Studies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
