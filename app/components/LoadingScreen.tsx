import { TypeAnimation } from "react-type-animation";

export default function LoadingScreen({
  className,
}: Readonly<{
  className?: string;
}>) {
  return (
    <div>
      <h1
        className={`text-xl absolute h-full w-full left-0 top-0 bg-white z-50 content-center center text-center ${className}`}
      >
        Loading
        <span className="animate-blinkdot1">.</span>
        <span className="animate-blinkdot2">.</span>
        <span className="animate-blinkdot3">.</span>
      </h1>
    </div>
  );
}
