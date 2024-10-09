import { Koulen } from "next/font/google";
import Menu from "./Menu";

const koulen = Koulen({ weight: ["400"], subsets: ["latin"] });

export default function PortfolioHeader({}) {
  return (
    <div>
      <header
        className={`mt-28 flex items-center justify-center text-7xl ${koulen.className}`}
      >
        PBANH.DEV
      </header>
      <Menu />
    </div>
  );
}
