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
    <Link className={`group p-2 ${active ? "text-blue-800" : ""}`} href={href}>
      <div className="group-hover:animate-bounce">{children}</div>
    </Link>
  );
}
