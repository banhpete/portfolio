import Image from "next/image";

export default function ProjectCard({
  title,
  technologiesUsed,
  status,
  src,
  altForImage,
  children,
  className,
}: Readonly<{
  title: string;
  technologiesUsed: string;
  status: "WIP" | "Completed" | "Stable Release";
  src: string;
  altForImage: string;
  children: string;
  className?: string;
}>) {
  return (
    <div
      className={`${className} h-[200px] min-h-[200px] border-4 rounded-md flex p-2`}
    >
      <div className={"min-w-[250px] w-[250px] content-center border-2"}>
        <Image src={src} alt={altForImage} width={250} height={200}></Image>
      </div>
      <div className={"ml-4 flex-col"}>
        <div className="flex text-center">
          <h1 className="text-lg font-medium">{title}</h1>
          <h2 className="ml-2 text-base leading-7">({status})</h2>
        </div>
        <h3>Technologies Used: {technologiesUsed}</h3>
        <p>{children}</p>
      </div>
    </div>
  );
}
