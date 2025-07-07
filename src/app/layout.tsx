import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paras Punjabi",
  description: "Portfolio",
  icons: {
    shortcut: "/favicon.png",
  },
  openGraph:{
    title:"Paras Punjabi",
    description:"Portfolio",
    images:[
      {url:"/me.png"}
    ]
  }
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
