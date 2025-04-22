"use client";

import LoadingScreen from "./components/LoadingScreen";
import { useProgress } from "@react-three/drei";
import dynamic from "next/dynamic";

export default function Home() {
  const progress = useProgress((state) => state.progress);
  const LandingPage = dynamic(() => import("../app/LandingPage"), {
    ssr: false,
  });

  return (
    <div
      className={`absolute h-full w-full bg-white top-0 left-0 flex flex-col justify-center items-center`}
    >
      <LoadingScreen
        progress={progress}
        className={progress == 100 ? "animate-fade" : ""}
      ></LoadingScreen>{" "}
      <LandingPage />
    </div>
  );
}
