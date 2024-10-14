import Image from "next/image";

export default function AgsightIcon({
  className,
}: Readonly<{
  className?: string;
}>) {
  return (
    <Image
      className={`rounded-full ${className}`}
      alt="AgSights Logo"
      src="/images/agsights.jpeg"
      height={64}
      width={64}
    ></Image>
  );
}
