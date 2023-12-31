import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Morbid Social",
  description: "A very morbid social media",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        <div className="px-20 py-20">{children}</div>
      </body>
    </html>
  );
}
