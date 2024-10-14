"use client";

import { Koulen } from "next/font/google";
import MenuButton from "./MenuButton";
import { usePathname } from "next/navigation";

const koulen = Koulen({ weight: ["400"], subsets: ["latin"] });

export default function Menu() {
  const pathname = usePathname();

  return (
    <div className={`flex justify-center mt-8`}>
      <div
        className={`min-w-[650px] w-[700px] text-2xl flex justify-between ${koulen.className}`}
      >
        <MenuButton active={pathname == "/about"} href="/about">
          About Me
        </MenuButton>
        <MenuButton active={pathname == "/work"} href="/work">
          My Work
        </MenuButton>
        <MenuButton active={pathname == "/projects"} href="/projects">
          Projects
        </MenuButton>
        <MenuButton active={pathname == "/contact"} href="/contact">
          Contact
        </MenuButton>
      </div>
    </div>
  );
}
