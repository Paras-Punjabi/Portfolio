"use client";
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect } from "react";
import type { MessageType } from "@/hooks/useLocalStorage";
import useLocalStorage from "@/hooks/useLocalStorage";
import { remark } from 'remark';
import html from 'remark-html';
import { FaRobot, FaUser } from "react-icons/fa";
import { MdOutlineOpenInNew } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Image from "next/image";
import { LuBot } from "react-icons/lu";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { RiDeleteBinFill } from "react-icons/ri";

function LoadingSvg(){
    return (
        <Image src="/loading.svg" height={20} width={20} alt="Loading..."></Image>
    )
}

export default function Chatbot({minimize=true} : {minimize:boolean}) {
    const localStorageKey = "chats"
    const recentChatsCount = 6
    const [isOpen, setIsOpen] = useState<boolean>(!minimize);
    const [isDisabled, setIsDisabled] = useState<boolean>(false);
    const chatWindow = useRef<HTMLDivElement>(null);
    const {data:messages,setDataInLS: setMessages} = useLocalStorage(localStorageKey,[{role:"bot",message:"Hey there 👋 I'm ParasBot — Paras's AI assistant! How can I help you today"}]);
    const [messageInput, messageSetInput] = useState("");

    const renderMessages = () => {
        return (
            <>
                {messages.map((msg, idx) => {
                    const isUser = msg.role === "user";
                    return (
                        <div
                            key={idx}
                            className={`flex items-start gap-3 ${isUser ? "flex-row-reverse" : "flex-row"}`}
                        >
                            <div className="flex-shrink-0">
                                <div
                                    className={`w-9 h-9 rounded-full flex items-center justify-center text-white ${
                                        isUser ? "bg-[#384856]" : "bg-indigo-600"
                                    }`}
                                >
                                    {isUser ? <FaUser /> : <LuBot />}
                                </div>
                            </div>

                            <div
                                className={`max-w-[78%] p-3 rounded-lg shadow-sm ${
                                    isUser
                                        ? "bg-[#384856] user-bubble text-white rounded-br-none text-sm"
                                        : "bot-bubble rounded-bl-none text-sm"
                                }`}
                            >
                                {msg.message === "LOADING" ? <div className="whitespace-pre-wrap break-words"><LoadingSvg/></div> : <div className="whitespace-pre-wrap break-words" dangerouslySetInnerHTML={{__html: msg.message}}></div>}
                            </div>
                        </div>
                    );
                })}
            </>
        );
    };

    const getBotReply = async (messagesArray: MessageType[]): Promise<string> => {
        let resp = await fetch("/api/chat",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(messagesArray)
        })
        let data = await resp.json();
        return data["data"];
    }

    const handleSend = async () => {
        if (!messageInput.trim()) return;

        setIsDisabled(true);
        let messagesArray = [...messages,{role:"user",message:messageInput}]

        setMessages([...messages, { role: "user", message: messageInput },{ role: "bot", message: "LOADING" }]);
        messageSetInput("");

        let reply = await getBotReply(messagesArray.length - 1 <= recentChatsCount ? messagesArray : messagesArray.slice(messagesArray.length - recentChatsCount-1));

        let processedReply = await remark().use(html).process(reply);
        const replyHtml = processedReply.toString();

        messagesArray.push({role:"bot",message:replyHtml});
        
        setMessages(messagesArray);
        setIsDisabled(false);
    };

    useEffect(()=>{
        const container = chatWindow.current?.querySelector(".chat-scroll") as HTMLElement | null;
        if (!container) return;
        requestAnimationFrame(() => {
            container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
        });
    },[chatWindow]);

    useEffect(() => {
        const container = chatWindow.current?.querySelector(".chat-scroll") as HTMLElement | null;
        if (!container) return;
        requestAnimationFrame(() => {
            container.scrollTo({ top: container.scrollHeight, behavior: "smooth" });
        });
    }, [messages,isOpen]);

  return (
    <div className={minimize ? `fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6 md:bottom-5 md:right-5` : "about-bg flex items-center justify-center"}>
      {!isOpen && minimize && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#384856] text-3xl text-white p-5 rounded-full shadow-lg hover:bg-[#26313a] transition-all"
        >
          <FaRegMessage className="flex justify-center items-center" />
        </button>
      )}

      {isOpen && (
        <div ref={chatWindow}
          className={`${minimize ? "w-[92vw] max-w-sm sm:w-96 md:w-[28rem] lg:w-[32rem] h-[60vh] sm:h-[55vh] md:h-[70vh] lg:h-[75vh]" : "h-[93vh] w-[95vw] mb-[2vh]"}
                 bg-[#1E1E2F] text-white shadow-2xl rounded-2xl flex flex-col overflow-hidden border border-gray-700 min-h-0`}
        >
          <div className="bg-indigo-600 text-white p-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaRobot size={34} />
              <span className={`font-semibold ${minimize ? "text-lg" : "text-2xl"}`}>Paras ChatBot</span>
            </div>
            {minimize && <div className="flex items-center gap-3 cursor-pointer">
              <MdOutlineOpenInNew title="Open in new tab" onClick={()=>{window.open("/chatbot")}} className="text-xl" />
              <button
                onClick={() => setIsOpen(false)}
                className="text-white text-xl cursor-pointer"
                >
                <ImCross />
              </button>
            </div>}
            {!minimize && <div className="flex items-center gap-3 cursor-pointer">
              <button
                className="text-white text-3xl cursor-pointer mr-2"
                onClick={()=>{setMessages([{role:"bot",message:"Hey there 👋 I'm ParasBot — Paras's AI assistant! How can I help you today"}])}}
                title="Delete All Chats"
                >
                <RiDeleteBinFill />
              </button>
            </div>}
          </div>

        <div className="flex-1 chat-scroll overflow-y-auto p-4 space-y-3 bg-[#2A2A3D] w">
            {renderMessages()}
        </div>

          <div className="p-3 border-t border-gray-700 flex items-center bg-[#1E1E2F]">
            <input
              type="text"
              disabled={isDisabled}
              value={messageInput}
              onChange={(e) => messageSetInput(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-[#2A2A3D] border border-gray-600 rounded-full px-3 py-2 text-sm focus:outline-none focus:ring-1 text-gray-100 disabled:cursor-not-allowed"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              onClick={handleSend}
              disabled={isDisabled}
              className="ml-2 text-white px-3 py-2 rounded-full bg-[#384856] transition-all disabled:cursor-not-allowed"
            >
              <BiSolidRightArrow />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
