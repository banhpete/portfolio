import type { Metadata } from "next";
import "./globals.css";
import PortfolioHeader from "./components/PortfolioHeader";
import PortfolioFooter from "./components/PortfolioFooter";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Peter Banh's Portfolio",
  description: "Welcome to Peter Banh's portfolio",
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
        <body className="min-h-screen w-screen overflow-x-hidden flex flex-col items-center justify-between">
          <div className="lg:w-[900px]">
            <div className="mt-8">
              <PortfolioHeader />
            </div>
            <div
              className={`mt-4 ${poppins.className} flex flex-grow justify-center`}
            >
              {children}
            </div>
            <div className="mt-8 mb-8">
              <PortfolioFooter />
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
