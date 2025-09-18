"use client";
import Navbar from "@/components/Navbar";
import { NextSeo } from "next-seo";
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
      <NextSeo
          title="Paras Punjabi - Software Engineer | Full Stack, AI & ML & DL & GenAI Developer"
          description="Welcome to the portfolio of Paras Punjabi, a Software Engineer from Indore with a B.Tech in Computer Science from NIT Patna. Passionate about Full Stack Web Development, Machine Learning, Deep Learning, Artificial Intelligence, RAG, and Problem Solving."
          canonical="https://paras-punjabi.vercel.app"
          openGraph={{
            url: 'https://paras-punjabi.vercel.app',
            title: 'Paras Punjabi - Software Engineer | Portfolio',
            description:
              "Welcome to the portfolio of Paras Punjabi, a Software Engineer from Indore with a B.Tech in Computer Science from NIT Patna. Passionate about Full Stack Web Development, Machine Learning, Deep Learning, Artificial Intelligence, RAG, and Problem Solving.",
            images: [
              {
                url: 'https://paras-punjabi.vercel.app/favicon.png',
                alt: 'Paras Punjabi',
                type: 'image/png',
              },
              {
                url: 'https://paras-punjabi.vercel.app/me.jpg',
                alt: 'Paras Punjabi',
                type: 'image/png',
              }
            ],
            siteName: 'Paras Punjabi Portfolio',
          }}
          additionalMetaTags={[
            {
              name: 'keywords',
              content:
                'Paras Punjabi, Software Engineer, Portfolio, Full Stack Web Development, Machine Learning, Deep Learning, Artificial Intelligence, RAG, Problem Solving, Indore, NIT Patna, Computer Science',
            },
            {
              name: 'author',
              content: 'Paras Punjabi',
            },
          ]}
        />
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
