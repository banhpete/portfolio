import type { Metadata } from "next";
import "./globals.css";
import PortfolioHeader from "./components/PortfolioHeader";
import PortfolioFooter from "./components/PortfolioFooter";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Welcome to my portfolio",
};

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className="flex h-dvh flex-col items-center justify-between">
          <div className="mt-8">
            <PortfolioHeader />
          </div>
          <div
            className={`mt-10 w-[800px] ${poppins.className} flex flex-grow justify-center`}
          >
            {children}
          </div>
          <div className="mt-8 mb-16">
            <PortfolioFooter />
          </div>
        </body>
      </html>
    </>
  );
}
