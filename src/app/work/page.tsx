import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { dbConnection } from "@/db";
import { projectsTable } from "@/db/schema";
import { FaCode } from "react-icons/fa";
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Paras Punjabi - Work",
  description:
    "Discover the work of Paras Punjabi, a software engineer building innovative projects in Python, FastAPI, React, Next.js, Node.js, TensorFlow, PyTorch, OpenCV, LangChain, Docker, Kubernetes, SQL, and Kafka, showcasing AI, ML, RAG, and full-stack development skills.",
  alternates: {
    canonical: "https://paras-punjabi.vercel.app/work",
  },
  openGraph: {
    url: "https://paras-punjabi.vercel.app/work",
    title: "Paras Punjabi - Work",
    description:
      "Explore Paras Punjabi's portfolio featuring projects in Python, FastAPI, React, Next.js, Node.js, TensorFlow, PyTorch, OpenCV, LangChain, Docker, Kubernetes, SQL, and Kafka. Showcasing AI, ML, RAG, and full-stack development.",
    images: [
      {
        url: "https://paras-punjabi.vercel.app/favicon.png",
        alt: "Paras Punjabi - Work",
        type: "image/png",
      },
    ],
    siteName: "Paras Punjabi Portfolio",
  },
  keywords: [
    "Paras Punjabi",
    "Portfolio",
    "Python",
    "FastAPI",
    "React",
    "Next.js",
    "Node.js",
    "TensorFlow",
    "PyTorch",
    "OpenCV",
    "LangChain",
    "Docker",
    "Kubernetes",
    "SQL",
    "Kafka",
    "AI projects",
    "ML projects",
    "RAG",
    "Full-Stack Developer",
  ],
  authors: [{ name: "Paras Punjabi" }],
};

const Work = async () => {
  const projects = await dbConnection.select().from(projectsTable);
  
  return (
    <div className="work-bg">
      <Navbar hidetitle={false} />
      <section className="text-gray-400 body-font p-1">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap w-full mb-7 flex-col items-center text-center">
            <h1 className="sm:text-4xl text-5xl font-medium title-font mb-2 text-white">
              Work I&apos;ve done
            </h1>
            <p className="lg:w-1/2 w-full text-lg leading-relaxed text-opacity-80">
              More work will be soon...
            </p>
          </div>
            <div className="flex flex-wrap justify-center">
            {projects.map((item, idx) => (
              <div key={idx} className="xl:w-1/3 md:w-1/2 p-2 flex">
              <div className="border border-transparent bg-gray-900 p-6 rounded-lg flex flex-col justify-between w-full h-full min-h-[320px]">
                <div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  {item.name}
                </h2>
                <p className="leading-relaxed text-base">
                  {item.description}
                </p>
                </div>
                <div className="flex justify-between mt-4 items-end">
                <div>
                  <Link href={item.githubLink} target="_blank">
                  <button className="text-white bg-indigo-500 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-base">
                    Source Code
                  </button>
                  </Link>
                  {item.link && (
                  <Link href={item.link} target="_blank">
                    <button className="text-white bg-indigo-500 mx-2 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-base">
                    Demo
                    </button>
                  </Link>
                  )}
                </div>
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400">
                  <FaCode className="text-xl" />
                </div>
                </div>
              </div>
              </div>
            ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
