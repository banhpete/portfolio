import { Koulen } from "next/font/google";

const koulen = Koulen({ weight: ["400"], subsets: ["latin"] });

export default function NotFound() {
  return (
    <div className="flex h-full justify-center items-center">
      <div className="flex flex-grow flex-col justify-center items-center">
        <h1 className={`text-7xl mb-10 ${koulen.className}`}>404</h1>
        <h2>Not Found</h2>
        <p>Sorry! Could not find requested resource</p>
      </div>
    </div>
  );
}
