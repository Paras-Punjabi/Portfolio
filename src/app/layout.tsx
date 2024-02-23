import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paras Punjabi",
  description: "Portfolio",
  icons: {
    shortcut: "/favicon.png",
  },
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
