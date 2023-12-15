"use client";

import "./style.css";

import { useEffect, useRef } from "react";

import { componentsStore } from "../store/components";

// import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiYoutube } from "react-icons/si";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

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
        <p className="headerText2">Connect with us..</p>
        <div className=" flex items-center gap-4">
          {/* <a href="">
            <FaFacebookSquare className=" w-7 cursor-pointer h-7" />
          </a> */}
          <a href="https://www.instagram.com/getvoixify/">
            <FaInstagramSquare className=" w-7 cursor-pointer h-7" />
          </a>
          <a href="https://twitter.com/getvoixify">
            <FaSquareXTwitter className=" w-7 cursor-pointer h-7" />
          </a>
          <a href="https://www.youtube.com/@Voixify">
            <SiYoutube className=" w-7 h-7 cursor-pointer" />
          </a>
          <a href="https://www.tiktok.com/@getvoixify">
            <FaTiktok className=" w-6 h-6 cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="flex gap-14 max600:justify-between ">
        <div className=" flex flex-col gap-4">
          <p className="headerText2">Get In Touch</p>
          <p className="text-sm font-extrabold text-text">
            <a
              href="https://info@voixify.com"
              style={{ textDecoration: "none" }}
            >
              info@voixify.com
            </a>
          </p>
        </div>
        <div className=" flex flex-col gap-4">
          <p className="headerText2">Useful Links</p>
          <a href="https://calendar.app.google/UHZQkR9AMiKYPsRt7">
            <p className="text-sm font-extrabold text-text cursor-pointer">
              Book a Demo
            </p>
          </a>
          <p className="text-sm font-extrabold text-text cursor-pointer">
            Terms and Conditions
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
