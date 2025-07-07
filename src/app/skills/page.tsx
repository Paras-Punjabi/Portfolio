import Navbar from '@/components/Navbar'
import React from 'react'
import { FaAws, FaDocker, FaGitAlt, FaJava, FaLongArrowAltRight, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { TbBinaryTree, TbBrandCpp, TbBrandElastic } from "react-icons/tb";
import { IoLogoJavascript, IoLogoHtml5  } from "react-icons/io5";
import { SiAmazondynamodb, SiApachekafka, SiFastapi, SiFlask, SiLangchain, SiMongodb, SiNumpy, SiOpencv, SiPandas, SiPostgresql, SiPytorch, SiRabbitmq, SiScikitlearn, SiTensorflow, SiTypescript, SiVite } from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";
import { IoLogoCss3 } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { DiLinux, DiRedis } from 'react-icons/di';
import { RiBootstrapFill, RiFirebaseFill, RiNextjsLine, RiSupabaseFill, RiTailwindCssFill } from 'react-icons/ri';

const Skills = () => {
    const skillsMap = [
        {"Python":<FaPython fontSize={70} />},
        {"C/C++":<TbBrandCpp fontSize={70} />},
        {"Java":<FaJava  fontSize={70} />},
        {"JavaScript":<IoLogoJavascript  fontSize={70} />},
        {"NodeJS":<FaNodeJs fontSize={70} />},
        {"Typescript":<SiTypescript fontSize={70} />},
        {"HTML":<IoLogoHtml5  fontSize={70} />},
        {"CSS":<IoLogoCss3  fontSize={70} />},
        {"DSA":<TbBinaryTree   fontSize={70} />},
        {"ReactJS":<FaReact  fontSize={70} />},
        {"NextJS":<RiNextjsLine  fontSize={70} />},
        {"Vite":<SiVite   fontSize={70} />},
        {"ExpressJS":<SiExpress  fontSize={70} />},
        {"TailwindCSS":<RiTailwindCssFill   fontSize={70} />},
        {"Bootstrap":<RiBootstrapFill  fontSize={70} />},
        {"FastAPI":<SiFastapi   fontSize={70} />},
        {"Flask":<SiFlask fontSize={70} />},
        {"MongoDB":<SiMongodb  fontSize={70} />},
        {"MySQL":<TbBrandMysql   fontSize={70} />},
        {"DynamoDB":<SiAmazondynamodb   fontSize={70} />},
        {"PostgreSQL":<SiPostgresql  fontSize={70} />},
        {"ElasticSearch":<TbBrandElastic fontSize={70} />},
        {"Git":<FaGitAlt  fontSize={70} />},
        {"AWS Services":<FaAws   fontSize={70} />},
        {"Docker":<FaDocker   fontSize={70} />},
        {"RabbitMQ":<SiRabbitmq    fontSize={70} />},
        {"Kafka":<SiApachekafka    fontSize={70} />},
        {"Redis":<DiRedis fontSize={70} />},
        {"Numpy":<SiNumpy fontSize={70} />},
        {"Pandas":<SiPandas fontSize={70} />},
        {"Scikit Learn":<SiScikitlearn  fontSize={70} />},
        {"Tensorflow":<SiTensorflow   fontSize={70} />},
        {"PyTorch":<SiPytorch  fontSize={70} />},
        {"Computer Vision":<SiOpencv   fontSize={70} />},
        {"Langchain":<SiLangchain   fontSize={70} />},
        {"Firebase":<RiFirebaseFill    fontSize={70} />},
        {"Supabase":<RiSupabaseFill     fontSize={70} />},
        {"Linux":<DiLinux fontSize={70} />},
    ]
  return (
    <div className='skills-bg'>
        <Navbar hidetitle={false}/>
         <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col text-center w-full mb-10 text-white">
      <h1 className="text-5xl font-medium title-font">TECH STACK</h1>
    </div>
    <div className="flex flex-wrap justify-center text-white">
        {
            skillsMap && skillsMap.map((item,idx)=>{
                return (<div
                    key={idx}
                    className="w-40 h-44 flex flex-col justify-between items-center px-5 py-5 m-4 relative z-10 border-4 border-gray-200 hover:scale-105 cursor-pointer bg-transparent"
                >
                    <div className="flex justify-center items-center mb-2 h-20">
                        {Object.values(item)[0]}
                    </div>
                    <h1 className="text-center title-font text-xl font-medium">{Object.keys(item)[0]}</h1>
                </div>
                )
            })
        }
    </div>
  </div>
    </div>
  )
}

export default Skills