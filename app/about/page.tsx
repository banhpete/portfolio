"use client";

import { ReactSketchCanvas, ReactSketchCanvasRef } from "react-sketch-canvas";
import { AiOutlineInfoCircle, AiOutlineRedo } from "react-icons/ai";
import { ChangeEvent, useRef, useState } from "react";
import { Tooltip } from "react-tooltip";

export default function About() {
  const canvasRef = useRef<ReactSketchCanvasRef>(null);
  const [strokeColor, setStrokeColor] = useState("#6497eb");
  const onColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStrokeColor(event.target.value);
  };

  const refreshCanvas = () => {
    canvasRef.current?.resetCanvas();
  };

  return (
    <div className="flex mt-8 flex-1">
      <Tooltip id="my-tooltip" />
      <div className="mr-10 pt-3 flex-1">
        <h1 className="text-3xl text-center">
          About me, <span className="text-blue-800 font-bold">Peter Banh</span>
        </h1>
        <p className="text-lg mt-8">
          I'm a fullstack developer experienced with various languages and
          frameworks such as <code>Java</code>, <code>C#</code>,{" "}
          <code>NodeJs</code>, <code>React</code> and <code>Vue</code>. I'm an
          avid and quick learner always excited to learn about new technology
          and use it to build fun and impactful things.
        </p>

        <p className="text-lg mt-4">
          Before becoming a full-stack developer, I worked as a Process Engineer
          after graduating from the University of Toronto with a degree in
          Materials Science and Engineering. During that time, I had the
          opportunity to create a simple web app on my own, which sparked my
          passion for software development, and I haven’t looked back since.
        </p>

        <p className="text-lg mt-4">
          Currently, I am based in Burnaby, British Columbia, where I am
          passionate about collaborating with teams to build beautiful, scalable
          software that solves real-world problems.
        </p>
      </div>
      <div>
        <div className="flex mt-4 -mx-4 -mb-6 justify-between flex-row-reverse">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <input
              title="Color"
              className="w-[200%] h-[200%] bg-transparent border-none cursor-pointer appearance-none transform-cpu -translate-x-1/4 -translate-y-1/4"
              type="color"
              value={strokeColor}
              onChange={onColorChange}
            />
          </div>
        </div>
        <ReactSketchCanvas
          ref={canvasRef}
          style={{
            width: "350px",
            height: "490px",
          }}
          svgStyle={{
            boxShadow:
              "rgba(46, 125, 240, 0.4) 5px 5px 5px 5px, rgba(46, 125, 240, 0.3) 10px 10px 10px 10px,  rgba(46, 125, 240, 0.2) 15px 15px 15px 15px, rgba(46, 125, 240, 0.1) 20px 20px 20px 20px, rgba(46, 125, 240, 0.05) 25px 25px 25px 25px, rgba(46, 125, 240, 0.4) -5px -5px, rgba(46, 125, 240, 0.3) -10px -10px,  rgba(46, 125, 240, 0.2) -15px -15px, rgba(46, 125, 240, 0.1) -20px -20px, rgba(46, 125, 240, 0.05) -25px -25px",
            border: "10px solid #3630d5",
            borderRadius: "10%",
            animation: "profile__animate 5s ease-in-out infinite",
          }}
          strokeColor={strokeColor}
          className="border-transparent"
          backgroundImage="/images/peter2.JPG"
        ></ReactSketchCanvas>
        <div className="flex justify-between -mt-6 -mx-4">
          <AiOutlineInfoCircle
            size={30}
            className="animate-bounce"
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Take a break and draw on my face!"
            data-tooltip-place="top"
          />
          <AiOutlineRedo
            onClick={refreshCanvas}
            size={30}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
