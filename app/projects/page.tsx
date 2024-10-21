import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  return (
    <div className="flex flex-col flex-grow p-4">
      <h1 className="text-3xl mt-4 mb-8 text-center">
        <span className="text-blue-800">Random</span> projects I&apos;ve worked
        on
      </h1>
      <div className="flex flex-col">
        <ProjectCard
          title="Portfolio Page"
          status="Stable Release"
          src="/images/portfolio.png"
          projectLink={"https://pbanh.dev/"}
          altForImage="Screenshot of portfolio page"
          className="my-2"
          technologiesUsed="Next.js, Three.js"
        >
          My portfolio page which you are visiting right now! I designed and
          created it myself using Figma and Next.js. A fun project as I got to
          learn more about how Next.js works and I got to experiment with
          Three.js. Please enjoy!
        </ProjectCard>
        <ProjectCard
          className="my-2"
          title="Minesweeper Vs."
          status="WIP"
          src="/images/msv.png"
          projectLink="https://minesweeperversus.pbanh.dev"
          altForImage="Image of minesweeper versus"
          technologiesUsed="React, NodeJS, Java, Springboot, C#, Dotnet, Docker, Circle CI, GCP, AWS"
        >
          An on-going project to create an online Minesweeper platform where
          players can play each other or play by themselves. The purpose of this
          project was to experiment with different technologies that I wanted to
          learn more about OR I wanted more experience with such as Websockets,
          and GCP.
        </ProjectCard>
        <ProjectCard
          className="my-2"
          title="Space Chicken"
          status="Completed"
          src="/images/space-chicken.jpg"
          projectLink="https://banhpete.github.io/Mintbean-Gamehack-SciFi-OuterSpace/"
          altForImage="Image of Space Chicken"
          technologiesUsed="Phaser.js, Javascript, CSS, HTML"
        >
          A fun project created during a hackathon hosted by Mintbean (An online
          community that used to host one day hackathons) where we had to use
          Phaser JS to make a game. Space Chicken placed 1st in the short
          hackathon.
        </ProjectCard>
        <ProjectCard
          className="my-2"
          title="Mario Inspired Minesweeper"
          status="Completed"
          src="/images/mario-minesweeper.jpeg"
          projectLink="https://banhpete.github.io/Minesweeper-SEI-Project/"
          altForImage="Image of mario minesweeper"
          technologiesUsed="Javascript, CSS, HTML"
        >
          A version of minesweeper made during my time at the General Assembly
          SEI Bootcamp. One of my first and funniest projects at General
          Assembly as it challenged me to create and design a version of
          Minesweeper with a twist and a fun user experience.
        </ProjectCard>
      </div>
    </div>
  );
}
