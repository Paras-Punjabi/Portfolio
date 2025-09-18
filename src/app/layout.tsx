import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paras Punjabi - Software Engineer | Full Stack, AI & ML & DL & GenAI Developer",
  description: "Welcome to the Portfolio of Paras Punjabi, a Software Engineer from Indore with a B.Tech in Computer Science from NIT Patna. Passionate about Full Stack Web Development, Machine Learning, Deep Learning, Artificial Intelligence, RAG, and Problem Solving.",
  icons: {
    shortcut: "/favicon.png",
  },
  openGraph:{
    url: 'https://paras-punjabi.vercel.app',
    title: 'Paras Punjabi - Software Engineer | Portfolio',
    description:
      "Welcome to the Portfolio of Paras Punjabi, a Software Engineer from Indore with a B.Tech in Computer Science from NIT Patna. Passionate about Full Stack Web Development, Machine Learning, Deep Learning, Artificial Intelligence, RAG, and Problem Solving.",
    images: [
      {
        url: 'https://paras-punjabi.vercel.app/favicon.png',
        alt: 'Paras Punjabi',
        type: 'image/png',
      },
      {
        url: 'https://paras-punjabi.vercel.app/me.jpg',
        alt: 'Paras Punjabi',
        type: 'image/png',
      }
    ],
    siteName: 'Paras Punjabi Portfolio',
  },
  keywords: ['Paras Punjabi', ' Software Engineer', ' Portfolio', ' Full Stack Web Development', ' Machine Learning', ' Deep Learning', ' Artificial Intelligence', ' RAG', ' Problem Solving', ' Indore', ' NIT Patna', ' Computer Science'],
  authors: [{ name: "Paras Punjabi" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
