import { Koulen } from "next/font/google";
import Link from "next/link";
import MenuButton from "./MenuButton";

const koulen = Koulen({ weight: ["400"], subsets: ["latin"] });

export default function Menu() {
  return (
    <div className={`flex justify-center mt-8`}>
      <div
        className={`min-w-[650px] w-[700px] text-2xl flex justify-between ${koulen.className}`}
      >
        <MenuButton href="/about">About Me</MenuButton>
        <MenuButton href="/work">My Work</MenuButton>
        <MenuButton href="/blog">Blog</MenuButton>
        <MenuButton href="/contact">Contact</MenuButton>
      </div>
    </div>
  );
}
