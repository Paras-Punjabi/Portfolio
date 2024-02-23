"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

const Education = () => {
    const data = [
        {
            title:"National Institute of Technology Patna(NITP)",
            desc:"Student of Bachelor of Technology(B.Tech) with specialization in Computer Science and Engineering(CSE). Going to graduate in June 2024",
            score:"8.41 CGPA",
            time:"Dec 2020 - Present"
        },
        {
            title:"La Sagesse Academy",
            desc:"Student of Science(PCM) in class 12th of CBSE board",
            score:"90.8%",
            time:"April 2019 - March 2020"
        },
        {
            title:"La Sagesse Academy",
            desc:"Class 10th of CBSE board",
            score:"85.2%",
            time:"April 2017 - March 2018"
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
                            <h1 className="text-2xl font-bold" style={{color:"#0BACBA"}}>
                            {item.title}
                            </h1>
                            <h3 className="text-xl">{item.desc}</h3>
                            <h3 className="text-xl mt-1" >Score : {item.score}</h3>
                            <h3 className="text-xl">{item.time}</h3>
                        </div>
                        </div>
                    </div>
                    )
                })
            }
        </div>
        <Link className="mt-2" href={"/work"}>
            <button className="text-xl border rounded-md p-2 bg-slate-300 text-black transition-colors flex justify-between items-center mx-auto">
                <span className="mx-1">Work</span>{" "}
                <span className="mx-1">
                    <FaLongArrowAltRight />
                </span>
                </button>
          </Link>
          
      </div>
    </>
  );
};

export default Education;
