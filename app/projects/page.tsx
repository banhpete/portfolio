import ProjectCard from "./components/ProjectCard";

export default function Projects() {
  return (
    <div className="border-4 h-[675px] flex flex-col flex-grow p-4 overflow-y-scroll">
      <ProjectCard
        title="Portfolio Page"
        technologiesUsed="Next.js"
        status="Stable Release"
        className="my-2"
      >
        Project test
      </ProjectCard>
      <ProjectCard
        className="my-2"
        title="Minesweeper Vs."
        status="WIP"
        src="/images/mario-minesweeper.jpeg"
        altForImage="Image of mario minesweeper"
        technologiesUsed="React, NodeJS, Java and Springboot, C# and Dotnet"
      >
        Project test
      </ProjectCard>
      <ProjectCard
        className="my-2"
        title="Space Chicken"
        status="Completed"
        src="/images/space-chicken.jpg"
        altForImage="Image of Space Chicken"
        technologiesUsed="Phaser framework, Javascript, CSS, HTML"
      >
        Project test
      </ProjectCard>
      <ProjectCard
        className="my-2"
        title="Mario Inspired Minesweeper"
        status="Completed"
        src="/images/mario-minesweeper.jpeg"
        altForImage="Image of mario minesweeper"
        technologiesUsed="Javascript, CSS, HTML"
      >
        Project test
      </ProjectCard>
    </div>
  );
}
