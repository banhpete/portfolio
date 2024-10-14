import Image from "next/image";

export default function XeroIcon({
  className,
}: Readonly<{
  className?: string;
}>) {
  return (
    <Image
      className={`${className}`}
      src="/images/xero.png"
      alt="Xero logo"
      fill={true}
    />
  );
}
