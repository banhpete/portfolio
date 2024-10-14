import Link from "next/link";

export default function MenuButton({
  active,
  children,
  href,
}: Readonly<{
  active?: boolean | null;
  children: string;
  href: string;
}>) {
  return (
    <div className="group p-1">
      <div className="group-hover:animate-bounce">
        <Link className={`${active ? "text-blue-800" : ""}`} href={href}>
          {children}
        </Link>
      </div>
    </div>
  );
}
