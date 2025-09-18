import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebookSquare,FaLongArrowAltRight } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paras Punjabi - About",
  description:
    "Learn about Paras Punjabi, a Software Engineer from Indore, Madhya Pradesh, with a B.Tech in Computer Science from NIT Patna. Passionate about Full Stack Web Development, Machine Learning, Deep Learning, and Problem Solving, aspiring to grow as a Software Development Engineer.",
  alternates: {
    canonical: "https://paras-punjabi.vercel.app/about",
  },
  openGraph: {
    url: "https://paras-punjabi.vercel.app/about",
    title: "Paras Punjabi - About",
    description:
      "Hey! My name is Paras Punjabi. I am from Indore, Madhya Pradesh, and hold a B.Tech in Computer Science from NIT Patna. I specialize in Full Stack Web Development, Machine Learning, Deep Learning, and Problem Solving. My goal is to become a skilled Software Development Engineer and contribute meaningfully to the field.",
    images: [
      {
        url: "https://paras-punjabi.vercel.app/favicon.png",
        alt: "Paras Punjabi - About",
        type: "image/png",
      },
    ],
    siteName: "Paras Punjabi Portfolio",
  },
  keywords: [
    "Paras Punjabi",
    "about",
    "software engineer",
    "Indore",
    "Madhya Pradesh",
    "NIT Patna",
    "Computer Science",
    "Full Stack Web Development",
    "Machine Learning",
    "Deep Learning",
    "Problem Solving",
    "Software Development Engineer",
  ],
  authors: [{ name: "Paras Punjabi" }],
};

const About = () => {
  return (
    <>
      <div className="about-bg">
      <Navbar hidetitle={false} />
        <section className="text-gray-400 body-font">
          <div className="container px-5 py-5 mx-auto  flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                  <div className="rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                    <Image src={"/me.jpg"} className="rounded-full" height={500} width={500} alt="IMage"/>
                  </div>
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-medium title-font mt-4 text-white text-2xl">
                      Paras Punjabi
                    </h2>
                  </div>
                </div>
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-xl mb-4">
                    Hey! My name is <b>Paras Punjabi</b>, I am from Indore, Madhya Pradesh. I have completed my B.Tech from <b>National Institute of Technology Patna (NITP)</b> in <b>Computer Science and Engineering (CSE)</b> branch. My areas of interest are Full Stack Web Development, Machine Learning, Deep Learning and Problem Solving. My aspiration is to become a good Software Developer Engineer and contribute more in this field.
                  </p>
                  <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <Link target="_blank" href="https://www.facebook.com/paras.punjabi.7/" className="text-gray-400">
                  <FaFacebookSquare className="text-3xl"/>
                </Link>
                <Link target="_blank" href="https://www.instagram.com/paras.punjabi.7/?hl=en" className="ml-3 text-gray-400">
                  <FaInstagram className="text-3xl"/>
                </Link>
                <Link target="_blank" href="https://www.linkedin.com/in/paras-punjabi-0b7669220/" className="ml-3 text-gray-400">
                  <FaLinkedin className="text-3xl"/>
                </Link>
                <Link target="_blank" href="https://www.github.com/Paras-Punjabi" className="ml-3 text-gray-400">
                  <FaGithub className="text-3xl"/>
                </Link>
                <Link target="_blank" href="https://leetcode.com/Paras_Punjabi/" className="ml-3 text-gray-400">
                  <SiLeetcode className="text-3xl"/>
                </Link>
          </div>
            <div className="flex justify-center sm:justify-start">
              <Link href="https://drive.google.com/file/d/1WmSPWJWljaLP5DN6GzeiLNYABRABfVLf/view?usp=drive_link" target="_blank">
                <button className="btn text-xl border rounded-md p-2 my-5 hover:bg-slate-300 hover:text-black transition-colors flex justify-between items-center"><span className="mx-1">Resume</span> <span className="mx-1"><FaLongArrowAltRight/></span>  </button>
              </Link>
            </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
    </>
  );
};

export default About;
