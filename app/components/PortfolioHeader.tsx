import { Koulen } from "next/font/google";
import Menu from "./Menu";
import Link from "next/link";

const koulen = Koulen({ weight: ["400"], subsets: ["latin"] });

export default function PortfolioHeader({}) {
  return (
    <div>
      <Link href="/">
        <header
          className={`flex items-center justify-center text-7xl ${koulen.className}`}
        >
          PBANH.DEV
        </header>
      </Link>
      <Menu />
    </div>
  );
}
