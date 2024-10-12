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
    <Link
      className={`hover:animate-bounce ${active ? "text-blue-800" : ""}`}
      href={href}
    >
      {children}
    </Link>
  );
}
