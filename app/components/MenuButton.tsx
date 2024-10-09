import Link from "next/link";

export default function MenuButton({
  children,
  href,
}: Readonly<{
  children: string;
  href: string;
}>) {
  return (
    <Link className="hover:animate-bounce" href={href}>
      {children}
    </Link>
  );
}
