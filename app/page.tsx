"use client";

import Link from "next/link";
import Button from "./components/Button";
import { TypeAnimation } from "react-type-animation";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Taco from "./components/Taco";
import CornDog from "./components/CornDog";
import { RandomFallingItem } from "./components/RandomFallingItem";
import ChineseFood from "./components/ChineseFood";
import Donut from "./components/Donut";
import Sushi from "./components/Sushi";
import LoadingScreen from "./components/LoadingScreen";
import { useProgress } from "@react-three/drei";

export default function Home() {
  const steps = {
    "1": "Hello",
    "2": "Xin chào",
    "3": "你好",
  };

  const { progress } = useProgress();

  return (
    <div
      className={`absolute h-full w-full bg-white top-0 left-0 flex flex-col justify-center items-center`}
    >
      <LoadingScreen
        className={progress == 100 ? "animate-slideleft" : ""}
      ></LoadingScreen>
      <Canvas
        className="absolute h-full w-full"
        camera={{ position: [5, 5, 6], fov: 25 }}
        style={{ position: "absolute" }}
      >
        <ambientLight intensity={0.2} />
        <Environment
          preset="sunset"
          backgroundIntensity={0.6}
          background
          backgroundBlurriness={0.8}
          backgroundRotation={[1, 2, 3]}
        />
        <RandomFallingItem>
          <Taco></Taco>
        </RandomFallingItem>
        <RandomFallingItem>
          <CornDog></CornDog>
        </RandomFallingItem>
        <RandomFallingItem>
          <ChineseFood></ChineseFood>
        </RandomFallingItem>
        <RandomFallingItem>
          <Donut></Donut>
        </RandomFallingItem>
        <RandomFallingItem>
          <Sushi></Sushi>
        </RandomFallingItem>
      </Canvas>
      <h1 className="z-10 text-3xl">
        👋&nbsp;
        <TypeAnimation
          sequence={["Hello", 2000, "Xin chào", 2000, "你好", 2000]}
          wrapper="span"
          speed={20}
          deletionSpeed={20}
          style={{ fontSize: "1.5em", display: "inline-block" }}
          repeat={Infinity}
        />
      </h1>
      <h1 className="z-10 text-3xl mt-6">I'm Peter Banh</h1>
      <h1 className="z-10 text-3xl mt-6">
        I'm a Fullstack Developer and this is my portfolio
      </h1>
      <Link className="z-10" href="/about">
        <Button className="mt-8">Enter PBANH.dev</Button>
      </Link>
    </div>
  );
}
