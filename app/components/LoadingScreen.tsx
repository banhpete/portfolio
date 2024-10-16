import { TypeAnimation } from "react-type-animation";

export default function LoadingScreen() {
  return (
    <div>
      <h1 className="text-xl">
        Loading
        <span className="animate-blinkdot1">.</span>
        <span className="animate-blinkdot2">.</span>
        <span className="animate-blinkdot3">.</span>
      </h1>
    </div>
  );
}
