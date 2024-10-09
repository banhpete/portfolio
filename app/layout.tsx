import type { Metadata } from "next";
import localFont from "next/font/local";
import { Koulen } from "next/font/google";
import "./globals.css";
import PortfolioHeader from "./components/PortfolioHeader";
import PortfolioFooter from "./components/PortfolioFooter";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Welcome to my portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className="flex h-dvh flex-col content-center justify-between">
          <PortfolioHeader />
          {children}
          <PortfolioFooter />
        </body>
      </html>
    </>
  );
}
