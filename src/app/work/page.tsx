"use client"
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React from "react";
import { FaCode, FaLongArrowAltRight } from "react-icons/fa";

const Work = () => {
    const projects = [
        {
            name:"PixTweak",
            desc:"A FastAPI web application inspired by ImageKit.io, enabling on-the-fly image transformations through URL parameters. It provides dynamic image transformation through URL query parameters, allowing changes like height, width, rotation, flip, adding text on image etc. The transformations are performed on demand, making the application efficient and user-friendly. Tech Stacks used in this project are FastAPI, Numpy, OpenCV, RabbitMQ, MySQL, Docker and Docker-Compose.",
            link:"https://github.com/Paras-Punjabi/PixTweak",
        },
        {
            name:"Music Mood Classification Model",
            desc:"It is a deep learning model made in Python. It helps us to classify a wav file into 'aggressive', 'sad', 'romantic', 'happy' and 'dramatic' classes. Tech Stacks used in this project are Numpy, Pandas, Tensorflow/Keras, Sklearn, Librosa and Matplotlib.Built 3 architectures and got accuracies of 86%, 73% and 74% when tested on kaggle's music mood classification dataset.",
            link:"https://github.com/Paras-Punjabi/music-mood-classification",
        },
        {
            name:"PDF-GPT",
            desc:"A RAG Application made using Python, Vite, FastAPI as backend, PostgreSQL as database, Langchain and FAISS (Facebook AI Similarity Search) as vector database. Users can upload pdf and can ask questions related to it. In this I have used GoogleGenerativeAI LLM model to generate text. It has chat architecture where we can chat with LLM in different context at the same time.",
            link:"https://github.com/Paras-Punjabi/PDF-GPT",
        },
        {
            name:"Paras Dive",
            desc:"A Google drive clone made using Next.js, React.js, Tailwind CSS, Express.js, and MongoDB. Users can upload & remove files and can perform CRUD operations for notes. MVC structure is followed for building source code. Frontend and backend are hosted seperately on vercel and render platforms. Database used here is on MongoDB Atlas cloud platform.",
            link:"https://www.github.com/Paras-Punjabi/Paras-Drive",
        },
        {
            name:"Visual Science",
            desc:"A Hackathon Project made during HackNITP4.0 Hackathon organized by Hackslash club of NIT Patna. The motive of this project is to demonstrate and explain the concepts of science using animations. The tech stacks used in this are Node.js, Express.js, EJS(view-engine used for SSR) and Bootstrap5. The animations are made from scratch using canvas element.",
            link:"https://github.com/Paras-Punjabi/Hackathon-Competition-HackNITP-4.0-",
            demo:"https://visual-science-vjlm.onrender.com/"
        },
        {
            name:"Visualizer App",
            desc:"A Camera App made using HTML5, CSS3 and Vanilla JavaScript. In this there are various filters and we can apply them in real-time. Filter algorithms are written from scratch with the help of canvas element in HTML5. Accessing of camera and audio is done using 'Navigator' object. We can take snapshots and record videos. Recording of videos is done using 'Media Recorder API' present in JavaScript.",
            link:"https://github.com/Paras-Punjabi/Visualizer-Camera-Effects-",
            demo:"https://paras-punjabi.github.io/Visualizer-Camera-Effects-/"
        },
        {
            name:"Two Stream Network for Vision Based Human Activity Recognition",
            desc:"It is a deep learning model made in Python. It helps us to detect and categorise violent actions done by humans in a video. Tech Stacks used in this project are Numpy, Pandas, Tensorflow/Keras, Sklearn, ConvLSTM2D, CNN, Attention, Computer Vision(opencv-python)",
            link:"https://github.com/Paras-Punjabi/TWO-STREAM-NETWORK-FOR-VISION-BASED-VOILENCE-DETECTION",
        },
        {
            name:"Snake Game",
            desc:"An old nostalgic game made using HTML5, CSS3 and Vanilla JavaScript. The board, snake and food are made using canvas element of HTML5. We can use arrow keys to change direction of snake. Every time the snake eats food, score will increase by 5 points",
            link:"https://github.com/Paras-Punjabi/Snake-Game",
            demo:"https://paras-punjabi.github.io/Snake-Game/"
        },
        {
            name:"Calendar App",
            desc:"A Web App made using HTML5, CSS3, Bootstrap5 and Vanilla JavaScript. In this we can migrate to any month of any year. We can also store important events of a particular date and these events are stored in LocalStorage.",
            link:"https://github.com/Paras-Punjabi/Calendar-App",
            demo:"https://paras-punjabi.github.io/Calendar-App/"
        },
        {
          name:"Notepad - Clone",
          desc:"A Desktop app made using Python. In this I had used Tkinter module to make the GUI. In this we can perform all types of stuff just like in an actual notepad we do. I have introduced some extra features like we can run Python and NodeJS code in notepad itself and output will be shown in the terminal.",
          link:"https://github.com/Paras-Punjabi/Python-Projects/tree/master/Notepad"
        },
        {
          name:"Chatting App",
          desc:"A Desktop app made using Python. In this I had used Tkinter, Socket and Threading module. In this there is GUI version of client and server. Multiple clients can be connected with the server for chatting among each other. Multiple clients can be generated by running the same instance of client file multiple times. These clients will connect only when run the server file and click Start Server button. We can also send a message to all clients from server by using the GUI of server.",
          link:"https://github.com/Paras-Punjabi/Python-Projects/tree/master/Chatting%20App"
        },
        {
          name:"iSangeet Music App",
          desc:"A Web App made using HTML5, CSS3 and Vanilla JavaScript. There are total 14 songs in the playlist and we can play any song. It contains Play, Pause, Forward, and Backward icons to switch between songs. It also contains dragable timeline so that we can jump to that section of song which we wanted to listen. It also contains volume equalizer and also had a download button to download the current song.",
          link:"https://github.com/Paras-Punjabi/iSangeet-Music-App",
          demo:"https://paras-punjabi.github.io/iSangeet-Music-App/"
        },

    ]
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
                  {item.desc}
                </p>
                </div>
                <div className="flex justify-between mt-4 items-end">
                <div>
                  <Link href={item.link} target="_blank">
                  <button className="text-white bg-indigo-500 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-base">
                    Source Code
                  </button>
                  </Link>
                  {item.demo && (
                  <Link href={item.demo} target="_blank">
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

          <Link href={"/contact"}>
            <button className="text-xl border rounded-md p-2 my-5 bg-slate-300 text-black transition-colors flex justify-between items-center mx-auto">
                <span className="mx-1">Contact</span>{" "}
                <span className="mx-1">
                    <FaLongArrowAltRight />
                </span>
                </button>
          </Link>
          
        </div>
      </section>
    </div>
  );
};

export default Work;
