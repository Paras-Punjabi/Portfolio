import Navbar from "@/components/Navbar";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paras Punjabi - Timeline",
  description:
    "Explore the professional journey of Paras Punjabi — from early projects to advanced work in Python, FastAPI, React, Next.js, Node.js, TensorFlow, PyTorch, OpenCV, LangChain, Docker, Kubernetes, SQL, Kafka and then to working as NextJS Developer Intern at Debales.AI and then working as Product Engineer (Backend Developer) at Tata Consultancy Services (TCS)",
  alternates: {
    canonical: "https://paras-punjabi.vercel.app/timeline",
  },
  openGraph: {
    url: "https://paras-punjabi.vercel.app/timeline",
    title: "Paras Punjabi - Timeline",
    description:
      "Explore the professional journey of Paras Punjabi — from early projects to advanced work in Python, FastAPI, React, Next.js, Node.js, TensorFlow, PyTorch, OpenCV, LangChain, Docker, Kubernetes, SQL, Kafka and then to working as NextJS Developer Intern at Debales.AI and then working as Product Engineer (Backend Developer) at Tata Consultancy Services (TCS)",
    images: [
      {
        url: "https://paras-punjabi.vercel.app/favicon.png",
        alt: "Paras Punjabi - Timeline",
        type: "image/png",
      },
    ],
    siteName: "Paras Punjabi Portfolio",
  },
  keywords: [
    "Paras Punjabi",
    "timeline",
    "career",
    "portfolio",
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
    "AI journey",
    "ML career",
    "RAG",
    "full-stack developer",
    "Tata Consultancy Services (TCS)",
    "Debales.AI",
    "Product Engineer",
    "NextJS Developer Intern",
    "La Sagesse Academy",
  ],
  authors: [{ name: "Paras Punjabi" }],
};

const Timeline = () => {
    const data = [
        {
            title:"Product Engineer at Tata Consultancy Services (TCS)",
            desc:["Python Backend Developer with hands-on experience in building scalable services and data pipelines using FastAPI, ELK Stack, Pandas, Kafka, and ETL workflows.","Built high-performance ETL pipelines to process 100K+ Elasticsearch records, export to Excel/CSV, and transfer via Paramiko, using multithreading to cut report generation time by 60% and streamline workflows.","Developed a scalable Kafka architecture with a daily cron producer and 5-server consumer group to generate 50+ circle-wise reports in parallel, later extended to weekly, monthly, and quarterly pipelines for full automation.","Engineered a dynamic config management system with Python’s ConfigParser to auto-load env-specific .ini files, reducing errors by 90% and enabling seamless environment switching."],
            extra:`Experience: ${((new Date().getTime() - new Date("09-1-2024").getTime())/(1000*60*60*24*30)).toFixed(1)} months`,
            time:"Sept 2024 - Present",
            location:"Bengaluru, Karnataka, India"
        },
        {
            title:"NextJS Developer Intern at Debales.AI",
            desc:["Worked as a NextJS Developer Intern, I worked on building and maintaining full-stack applications using Next.js v14, TailwindCSS, and Docker.","Developed and managed APIs for platforms like debales.ai and brainlox.ai, integrating FastAPI and Express backends and deploying on AWS with DynamoDB database.","Designed chatbot-enabled websites using Retrieval-Augmented Generation (RAG) architecture, leveraging open-source LLMs such as OpenAI and Google Gemini along with vector databases like Pinecone and FAISS through Langchain."],
            extra:`Duration: 6 months`,
            time:"Feb 2024 - July 2024",
            location:"Remote, Texas, USA"
        },
        {
            title:"National Institute of Technology Patna (NITP)",
            desc:["Student of Bachelor of Technology(B.Tech) with specialization in Computer Science and Engineering(CSE). Going to graduate in June 2024"],
            extra:"Score: 8.52 CGPA",
            time:"Dec 2020 - May 2024",
            location:"Patna, Bihar, India"
        },
        {
            title:"La Sagesse Academy",
            desc:["Student of Science (PCM) in class 12th of CBSE board"],
            extra:"Score: 90.8 %",
            time:"April 2019 - March 2020",
            location:"Indore, Madhya Pradesh, India"
        },
        {
            title:"La Sagesse Academy",
            desc:["Class 10th of CBSE board"],
            extra:"Score: 85.2 %",
            time:"April 2017 - March 2018",
            location:"Indore, Madhya Pradesh, India"
        }
    ]
  return (
    <>
      <div className="edu-bg">
      <Navbar hidetitle={false} />
        <div className="w-10/12 md:w-7/12 lg:6/12 mx-auto relative">
            {
                data.map((item,idx)=>{
                    return (
                <div key={idx} className="border-l-2 mt-10">
                        <div className="transform transition cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4  text-white mb-10 flex-col border rounded-md md:flex-row space-y-4 md:space-y-0" style={{backgroundColor:"#232524"}}>
                        <div className="w-3 h-3 bg-blue absolute -left-10 transform -translate-x-2/4 rounded-full  z-10 mt-2 md:mt-0"></div>

                        <div className="w-10 h-1 bg-white absolute -left-10 z-0"></div>

                        <div className="flex flex-col justify-evenly items-start">
                            <h1 className="text-3xl font-bold" style={{color:"#0BACBA"}}>
                            {item.title}
                            </h1>
                            <div className="text-base sm:text-lg md:text-xl my-2 text-gray-200">
                                {item.desc.length > 1 && (
                                    <ul className="list-disc pl-5">
                                        {item.desc.map((point, idx) => (
                                            <li className="mb-2" key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                )}
                                {item.desc.length == 1 && (
                                    <h1>{item.desc[0]}</h1>
                                )}
                            </div>
                            <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2 text-sm sm:text-base md:text-lg">
                                {item.extra && (
                                    <span className="bg-cyan-900/60 text-cyan-200 px-3 py-1 rounded-md font-semibold text-sm sm:text-base md:text-lg">
                                        {item.extra}
                                    </span>
                                )}
                                <span className="flex items-center gap-1 bg-gray-800/80 text-gray-300 px-3 py-1 rounded-md font-medium text-sm sm:text-base md:text-lg">
                                    <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" />
                                        <circle cx="12" cy="11" r="3" />
                                    </svg>
                                    {item.location}
                                </span>
                                <span className="flex items-center gap-1 bg-blue-900/60 text-blue-200 px-3 py-1 rounded-md font-medium text-sm sm:text-base md:text-lg">
                                    <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <rect x="3" y="4" width="18" height="18" rx="2" />
                                        <path d="M16 2v4M8 2v4M3 10h18" />
                                    </svg>
                                    {item.time}
                                </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
        <br />
      </div>
    </>
  );
};

export default Timeline;
