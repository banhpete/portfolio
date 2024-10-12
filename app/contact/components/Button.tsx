import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export default function Button({
  children,
  className,
  onClick,
  onSubmit,
  type,
  disabled,
}: Readonly<{
  children: string;
  onClick?: () => {};
  onSubmit?: () => {};
  className?: string;
  type?: "button" | "submit" | undefined;
  disabled?: boolean | undefined;
}>) {
  return (
    <div className={`${className}`}>
      <button
        className="disabled:bg-gray-300 disabled:cursor-not-allowed disabled:text-white hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white w-full p-2 border-black border-2"
        onClick={onClick}
        onSubmit={onSubmit}
        type={type ? type : "button"}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}
