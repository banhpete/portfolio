"use client";

export default function LoadingScreen({
  className,
  progress,
}: Readonly<{
  className?: string;
  progress: number;
}>) {
  return (
    <>
      <div
        style={{
          background:
            "linear-gradient(45deg, #9aaecc, #a5b4ce, #b8bfd2, #c8c8d5, #d0cdd7)",
        }}
        className={`text-xl flex flex-col items-center justify-center absolute h-full w-full left-0 top-0 z-50 content-center center text-center ${className}`}
      >
        <span className="text-2xl">{Math.round(progress)}</span>
        <div className="w-1/4 bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
            style={{ width: `${Math.round(progress)}%` }}
          ></div>
        </div>
      </div>
    </>
  );
}
