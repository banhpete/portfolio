import { ChangeEvent } from "react";

export default function TextArea({
  id,
  label,
  placeHolder,
  className,
  onChange,
}: Readonly<{
  id: string;
  label: string;
  placeHolder?: string | undefined;
  className?: string | undefined;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}>) {
  return (
    <div className={`${className} flex flex-col`}>
      <label className="text-sm text-gray-600" htmlFor={id}>
        {label}
      </label>
      <textarea
        placeholder={placeHolder}
        name={id}
        className={`p-2 w-full h-[175px] focus:outline-blue-800 focus:bg-blue-50 border-black border-2`}
        id={id}
        onChange={onChange}
      ></textarea>
    </div>
  );
}
