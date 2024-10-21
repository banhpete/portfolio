import Image from "next/image";

export default function ProjectCard({
  title,
  technologiesUsed,
  status,
  src,
  projectLink,
  altForImage,
  children,
  className,
}: Readonly<{
  title: string;
  technologiesUsed: string;
  status: "WIP" | "Completed" | "Stable Release";
  src: string;
  projectLink: string;
  altForImage: string;
  children: string | React.ReactNode;
  className?: string;
}>) {
  return (
    <a href={projectLink} className="group" rel="noopener noreferrer">
      <div
        className={`${className} min-h-[200px] text-white bg-slate-700 rounded-md flex justify-between p-4 group-hover:scale-105`}
      >
        <div className={"min-w-[250px] w-[250px] content-center"}>
          <Image
            className="rounded-lg"
            src={src}
            alt={altForImage}
            width={250}
            height={200}
          ></Image>
        </div>
        <div className={"ml-6 flex py-1 flex-col flex-1"}>
          <div className="flex mt-2 mb-2 text-center">
            <h1 className="text-lg font-medium">{title}</h1>
            <h2
              className={`rounded-lg ml-2 font-semibold text-[0.65rem] px-2 leading-7 ${
                status === "WIP"
                  ? "bg-red-500"
                  : status === "Completed"
                  ? "bg-green-500"
                  : "bg-blue-600"
              }`}
            >
              {status}
            </h2>
          </div>
          <p className="text-sm flex-1">{children}</p>
          <p className="mt-2 text-sm">
            {technologiesUsed.split(",").map((tech) => (
              <>
                <code className="px-1 text-black">{tech.replace(" ", "")}</code>{" "}
              </>
            ))}
          </p>
        </div>
        <div className="ml-4 w-3 text-5xl flex justify-end items-center">
          <div className="relative">
            <span className="">&gt;</span>
            <div className="group-hover:translate-y-10 group-focus:translate-y-10 transition ease-linear duration-400 bg-slate-700 absolute top-0 left-0 h-full w-full"></div>
          </div>
        </div>
      </div>
    </a>
  );
}
