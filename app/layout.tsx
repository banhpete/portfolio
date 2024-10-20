import type { Metadata } from "next";
import "./globals.css";
import PortfolioHeader from "./components/PortfolioHeader";
import PortfolioFooter from "./components/PortfolioFooter";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Peter Banh's Portfolio",
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
        <body
          style={{
            background:
              "linear-gradient(45deg, #9aaecc, #a5b4ce, #b8bfd2, #c8c8d5, #d0cdd7)",
          }}
          className="min-h-screen flex flex-col items-center justify-between"
        >
          <div className="mt-8">
            <PortfolioHeader />
          </div>
          <div
            className={`mt-4 w-[900px] ${poppins.className} flex flex-grow justify-center`}
          >
            {children}
          </div>
          <div className="mt-8 mb-8">
            <PortfolioFooter />
          </div>
        </body>
      </html>
    </>
  );
}
