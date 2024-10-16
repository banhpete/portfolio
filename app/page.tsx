"use client";

import Link from "next/link";
import Button from "./components/Button";
import { TypeAnimation } from "react-type-animation";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import Taco from "./components/Taco";
import CornDog from "./components/CornDog";
import { RandomFallingItem } from "./components/RandomFallingItem";
import ChineseFood from "./components/ChineseFood";
import Donut from "./components/Donut";
import Sushi from "./components/Sushi";

export default function Home() {
  const steps = {
    "1": "Hello",
    "2": "Xin chào",
    "3": "你好",
  };

  return (
    <div
      className={`absolute h-full w-full bg-white top-0 left-0 flex flex-col justify-center items-center`}
    >
      <Canvas
        className="absolute h-full w-full"
        camera={{ position: [5, 5, 6], fov: 25 }}
        style={{ position: "absolute" }}
      >
        <ambientLight intensity={0.2} />
        <Environment preset="sunset" />
        <RandomFallingItem speed={1.5}>
          <Taco></Taco>
        </RandomFallingItem>
        <RandomFallingItem speed={1.5}>
          <CornDog></CornDog>
        </RandomFallingItem>
        <RandomFallingItem speed={1.5}>
          <ChineseFood></ChineseFood>
        </RandomFallingItem>
        <RandomFallingItem speed={1.5}>
          <Donut></Donut>
        </RandomFallingItem>
        <RandomFallingItem speed={1.5}>
          <Sushi></Sushi>
        </RandomFallingItem>
      </Canvas>
      <h1 className="text-3xl">
        <TypeAnimation
          sequence={["Hello", 2000, "Xin chào", 2000, "你好", 2000]}
          wrapper="span"
          speed={20}
          deletionSpeed={20}
          style={{ fontSize: "1.5em", display: "inline-block" }}
          repeat={Infinity}
        />
      </h1>
      <h1 className="text-3xl mt-6">I'm Peter Banh</h1>
      <h1 className="text-3xl mt-6">Welcome to my portfolio</h1>
      <Link href="/about">
        <Button className="mt-8">Enter PBANH.dev</Button>
      </Link>
    </div>
  );
}
