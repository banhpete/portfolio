import { Koulen } from "next/font/google";
import Menu from "./Menu";
import Link from "next/link";

const koulen = Koulen({ weight: ["400"], subsets: ["latin"] });

export default function PortfolioHeader({}) {
  return (
    <header className={`flex flex-col items-center ${koulen.className}`}>
      <Link href="/">
        <h1 className="text-7xl">PBANH.DEV</h1>
      </Link>
      <Menu />
    </header>
  );
}
