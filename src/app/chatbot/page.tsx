import React from 'react'
import Chatbot from '@/components/ChatBot'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Paras Punjabi - ChatBot",
  description:
    "ParasBot is an intelligent AI chatbot integrated into my personal portfolio, built using Next.js and powered by LangChain with Google Generative AI (Gemini). It uses Prompt Engineering, Embeddings, and PgVector in Supabase (PostgreSQL) to deliver context-aware, real-time responses. Designed as a personalized assistant, ParasBot showcases practical applications of Generative AI, Retrieval-Augmented Generation (RAG), and modern full-stack development techniques.",
  alternates: {
    canonical: "https://paras-punjabi.vercel.app/chatbot",
  },
  openGraph: {
    url: "https://paras-punjabi.vercel.app/chatbot",
    title: "Paras Punjabi - ChatBot",
    description:
      "ParasBot is an intelligent AI chatbot integrated into my personal portfolio, built using Next.js and powered by LangChain with Google Generative AI (Gemini). It uses Prompt Engineering, Embeddings, and PgVector in Supabase (PostgreSQL) to deliver context-aware, real-time responses. Designed as a personalized assistant, ParasBot showcases practical applications of Generative AI, Retrieval-Augmented Generation (RAG), and modern full-stack development techniques.",
    images: [
      {
        url: "https://paras-punjabi.vercel.app/chatbot.png",
        alt: "Paras Punjabi - ChatBot",
        type: "image/png",
      },
    ],
    siteName: "Paras Punjabi Portfolio",
  },
  keywords: [
    "Paras Punjabi",
    "Chatbot",
    "software engineer",
    "Langchain",
    "Generative AI",
    "Google Generative AI",
    "Supabase",
    "PgVector",
    "PostgreSQL",
    "Google Gemini",
    "Next.JS",
    "Embeddings",
    "Prompt Engineering"
  ],
  authors: [{ name: "Paras Punjabi" }],
};

const ChatBotNewTab = () => {
  return (
    <>
    <Chatbot minimize={false} />
    </>
  )
}

export default ChatBotNewTab