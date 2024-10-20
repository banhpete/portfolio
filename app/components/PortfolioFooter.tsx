import { Poppins } from "next/font/google";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const poppins = Poppins({ weight: ["400"], subsets: ["latin"] });

export default function PortfolioFooter() {
  return (
    <footer
      className={`text-sm ${poppins.className} flex flex-col items-center justify-center`}
    >
      <p>&copy; 2024 Peter Banh. All rights reserved.</p>
      <p>Designed/Conceptualized in Figma. Created using Nextjs.</p>
      <div className={`my-4 w-16 flex justify-between`}>
        <a rel="noopener noreferrer" href="https://github.com/banhpete">
          <AiFillGithub className="size-7 transition hover:scale-125 hover:fill-blue-600" />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/peter-banh/"
        >
          <AiFillLinkedin className="size-7 transition hover:scale-125 hover:fill-blue-600" />
        </a>
      </div>
    </footer>
  );
}
