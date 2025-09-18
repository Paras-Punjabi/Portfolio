import ContactForm from '@/components/ContactForm'
import React from 'react'
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paras Punjabi - Contact",
  description:
    "Get in touch with Paras Punjabi for collaboration, freelance projects, or career opportunities in Python, FastAPI, React, Next.js, Node.js, TensorFlow, PyTorch, OpenCV, LangChain, Docker, Kubernetes, SQL, Kafka, AI, ML, and full-stack development.",
  alternates: {
    canonical: "https://paras-punjabi.vercel.app/contact",
  },
  openGraph: {
    url: "https://paras-punjabi.vercel.app/contact",
    title: "Paras Punjabi - Contact",
    description:
      "Reach out to Paras Punjabi for collaborations, hiring, or networking. Experienced in Python, FastAPI, React, Next.js, Node.js, TensorFlow, PyTorch, OpenCV, LangChain, Docker, Kubernetes, SQL, Kafka, AI, ML, RAG, and full-stack development.",
    images: [
      {
        url: "https://paras-punjabi.vercel.app/favicon.png",
        alt: "Paras Punjabi - Contact",
        type: "image/png",
      },
    ],
    siteName: "Paras Punjabi Portfolio",
  },
  keywords: ['Paras Punjabi', ' contact', ' get in touch', ' collaborations', ' hire', ' freelance', ' Python', ' FastAPI', ' React', ' Next.js', ' Node.js', ' TensorFlow', ' PyTorch', ' OpenCV', ' LangChain', ' Docker', ' Kubernetes', ' SQL', ' Kafka', ' AI', ' ML', ' RAG', ' full-stack developer'],
  authors: [{ name: "Paras Punjabi" }],
};

const Contact = () => {
  return (
    <ContactForm/>
  )
}

export default Contact