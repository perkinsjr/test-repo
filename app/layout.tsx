import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sprint Padawan",
  description: "Plan. Sprint. Repeat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className="blockh-[100%] w-[100%] overflow-y-scroll fixed"
      >
        <body className="block h-[100%] w-[100%] overflow-y-scroll fixed">
          <div className="block h-[100%]">
            <Navbar title="Sprint Padawan" />
            <div className="flex flex-col items-center justify-center min-h-[calc(100%-114px)]">
              {children}
            </div>
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
