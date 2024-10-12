export default function TextArea({
  id,
  label,
  placeHolder,
  className,
}: Readonly<{
  id: string;
  label: string;
  placeHolder?: string | undefined;
  className?: string | undefined;
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
      ></textarea>
    </div>
  );
}
