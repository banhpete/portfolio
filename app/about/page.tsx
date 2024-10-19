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
            width: "400px",
            height: "560px",
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
      <div className="ml-8 flex-1">
        <h1 className="animate-fade -text-lg text-center">
          Hi I&apos;m Peter Banh. I&apos;m a full-stack developer and I love to:
        </h1>
        <p className="mt-2 font-semibold text-center leading-8">
          <span className="animate-fade animate-delay-[600ms]">Learn</span>
          <br />
          <span className="animate-fade animate-delay-[1.5s]">
            Build things
          </span>
          <br />
          <span className="animate-fade animate-delay-[2.4s]">Help people</span>
        </p>
        <div className="animate-fade animate-delay-[2.8s]">
          <p className={`px-5 py-3`}>
            I started my career off as a Process Engineer after graduating
            University of Toronto with a Bachelor of Applied Science in
            Materials Science and Engineering. As a side project, I decided to
            learn to code and build a simple web app for work and I fell in love
            with programming. After two years of being a Process Engineer, I
            quit, enrolled myself in a coding bootcamp at General Assembly and
            haven&apos;t looked back since.
          </p>
          <p className={`px-5 py-3`}>
            Now, I&apos;m based in Burnaby, British Columbia and I&apos;m
            passionate about working with a team to build beautiful and scalable
            software to solve problems for people.
          </p>
        </div>
      </div>
    </div>
  );
}
