"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const Page = () => {
  const text = useTypewriter({
    words: [
      "HI, I'm Paras Punjabi",
      "I'm a Software Developer",
      "I'm a ML/DL/AI Developer",
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
          className="flex items-center justify-evenly flex-col w-screen h-[72%] md:h-[75%] lg:h-[78%]"
        >
            <div className="text-center text-[35px] md:text-5xl lg:text-7xl xl:text-9xl">
            {text}
            <Cursor
              cursorBlinking={true}
              cursorStyle="|"
              cursorColor="white"
            />
            </div>
        </div>
      </div>
    </>
  );
};

export default Page;
