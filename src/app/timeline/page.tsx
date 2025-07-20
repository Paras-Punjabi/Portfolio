import Navbar from "@/components/Navbar";
import React from "react";

const Timeline = () => {
    const data = [
        {
            title:"Product Engineer at Tata Consultancy Services (TCS)",
            desc:"Working as a Python Backend Developer, I have hands-on experience with FastAPI, Elasticsearch (ELK Stack), Pandas, Numpy and Kafka. I've developed Python scripts to query and aggregate data from Elasticsearch, exporting structured results to Excel files, and built automation tools using Paramiko, PyAutoGUI, and multithreading to streamline report generation and operational workflows.",
            extra:`Experience: ${((new Date().getTime() - new Date("09-1-2024").getTime())/(1000*60*60*24*30)).toFixed(1)} months`,
            time:"Sept 2024 - Present",
            location:"Bengaluru, Karnataka, India"
        },
        {
            title:"NextJS Developer Intern at Debales.AI",
            desc:"As a NextJS Developer Intern, I worked on building and maintaining full-stack applications using Next.js v14, TailwindCSS, and Docker. I developed and managed APIs for platforms like debales.ai and brainlox.ai, integrating FastAPI and Express backends and deploying on AWS with DynamoDB database. I also built chatbot-enabled websites using Retrieval-Augmented Generation (RAG) architecture, leveraging open-source LLMs such as OpenAI and Google Gemini along with vector databases like Pinecone and FAISS through Langchain.",
            extra:`Duration: 6 months`,
            time:"Feb 2024 - July 2024",
            location:"Remote, Texas, USA"
        },
        {
            title:"National Institute of Technology Patna (NITP)",
            desc:"Student of Bachelor of Technology(B.Tech) with specialization in Computer Science and Engineering(CSE). Going to graduate in June 2024",
            extra:"Score: 8.52 CGPA",
            time:"Dec 2020 - May 2024",
            location:"Patna, Bihar, India"
        },
        {
            title:"La Sagesse Academy",
            desc:"Student of Science (PCM) in class 12th of CBSE board",
            extra:"Score: 90.8 %",
            time:"April 2019 - March 2020",
            location:"Indore, Madhya Pradesh, India"
        },
        {
            title:"La Sagesse Academy",
            desc:"Class 10th of CBSE board",
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
                            <h3 className="text-xl my-2 text-gray-200">{item.desc}</h3>
                            {item.extra && <h3 className="text-lg mt-1 font-bold" >{item.extra}</h3>}
                            <h3 className="text-lg font-bold">Location: {item.location}</h3>
                            <h3 className="text-lg font-bold">{item.time}</h3>
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
