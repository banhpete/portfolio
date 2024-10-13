import { ChangeEvent } from "react";

export default function TextInput({
  id,
  label,
  placeHolder,
  className,
  type,
  onChange,
}: Readonly<{
  id: string;
  type: string;
  label: string;
  placeHolder?: string | undefined;
  className?: string | undefined;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}>) {
  return (
    <div className={`${className}`}>
      <label className="flex flex-col" htmlFor={id}>
        <span className="block text-sm text-gray-600">{label}</span>
        <input
          onChange={onChange}
          type={type}
          name={id}
          id={id}
          placeholder={placeHolder}
          className={`focus:outline-blue-800 focus:bg-blue-50 p-2 border-black border-2`}
        />
      </label>
    </div>
  );
}
