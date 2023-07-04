'use client';
import { Inter } from "next/font/google";
import { FC, PropsWithChildren } from "react";
import FlowbiteContext from "../context/FlowbiteContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Morbid Social",
  description: "A very morbid social media",
};

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
      <body>
        <FlowbiteContext>{children}</FlowbiteContext>
      </body>
    </html>
  );
};

export default RootLayout;
