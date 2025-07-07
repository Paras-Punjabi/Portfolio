"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLongArrowAltRight } from "react-icons/fa";

const Page = () => {
  const text = useTypewriter({
    words: [
      "HI, I'm Paras",
      "I'm a Software Developer",
      "I'm a AI/ML/DL Developer",
      "I'm a Full Stack Developer",
    ],
    typeSpeed: 100,
    deleteSpeed: 100,
    loop: true,
  })[0];
  return (
    <>
      <div className="bg text-white">
        <Navbar hidetitle={false} />
        <div
          className="flex items-center justify-evenly flex-col w-screen h-5/6"
          // style={{ height: "100vh",width:"100vw" }}
        >
          <div className="text-center" style={{fontSize:"max(7vw,100px)"}}>
            {text}
            <Cursor
              cursorBlinking={true}
              cursorStyle={"|"}
              cursorColor="white"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
