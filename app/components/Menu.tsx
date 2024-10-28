"use client";

import { Koulen } from "next/font/google";
import MenuButton from "./MenuButton";
import { usePathname } from "next/navigation";
import { useState } from "react";

const koulen = Koulen({ weight: ["400"], subsets: ["latin"] });

export default function Menu() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="mt-8 flex justify-center">
        <button
          className={`lg:hidden w-0 h-0
            border-l-[20px] border-l-transparent
            border-t-[15px] ${
              isOpen ? "border-t-white" : "border-t-black"
            } border-r-[20px] border-r-transparent`}
          onClick={() => setIsOpen(!isOpen)}
        ></button>
      </div>
      <div
        className={`text-2xl justify-between items-center ${
          koulen.className
        } px-24 flex flex-col h-0 ${
          isOpen ? "animate-heightExpand" : "animate-heightShrink"
        } overflow-hidden mt-4
        lg:h-auto lg:flex-row lg:mt-0`}
      >
        <MenuButton active={pathname == "/about"} href="/about">
          About Me
        </MenuButton>
        <MenuButton active={pathname == "/work"} href="/work">
          Work Experience
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
