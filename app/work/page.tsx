"use client";

import Button from "../components/Button";
import VerticalTimeline from "./components/VerticalTimeline";
import VerticalTimelineElement from "./components/VerticalTimelineElement";
import A2XIcon from "./components/icons/A2XIcon";
import AgsightIcon from "./components/icons/AgsightsIcon";
import CelesticaIcon from "./components/icons/CelesticaIcon";
import GeneralAssemblyIcon from "./components/icons/GeneralAssemblyIcon";
import UofTIcon from "./components/icons/UofTIcon";
import XeroIcon from "./components/icons/XeroIcon";

export default function Work() {
  return (
    <div className="border-4 flex flex-grow flex-col items-center justify-center bg-gray-400">
      <Button className="w-5/12 my-4 bg-white">Get my CV</Button>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Apr 2023 - Present"
          dateClassName="px-2"
          iconClassName="bg-white"
          icon={<A2XIcon className="size-9" />}
        >
          <h1 className="text-lg font-semibold">A2X</h1>
          <h2 className="text-sm font-semibold">Software Developer</h2>
          <h3 className="text-sm font-light">
            Skills: Java, Spring Boot, Vue, GCP, SQL, Github Actions
          </h3>
          <p className="mt-2 text-sm">
            Software Development, System Architecture, Customer Success
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Dec 2020 - Apr 2023"
          dateClassName="px-4"
          icon={<XeroIcon className="size-9" />}
        >
          <h1 className="text-lg font-semibold">Xero</h1>
          <h2 className="text-sm font-semibold">
            Junior/Intermediate Software Developer
          </h2>
          <h3 className="text-sm font-light">
            Utilize: C#, Dotnet, React, Redux, Jenkins, TeamCity, AWS
          </h3>
          <p className="mt-2 text-sm">
            Software Development, System Architecture, Customer Success
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 2020 - Nov 2020"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<AgsightIcon />}
        >
          <h1 className="text-lg font-semibold">AgSights</h1>
          <h2 className="text-sm font-semibold">Software Developer</h2>
          <h3 className="text-sm font-light">
            Utilize: Vanilla Javascript, CSS, HTML, React, Nodejs
          </h3>
          <p className="mt-2 text-sm">
            Software Development, System Architecture, Customer Success
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2020 - July 2020"
          icon={<GeneralAssemblyIcon />}
        >
          <h1 className="text-lg font-semibold">General Assembly Bootcamp</h1>
          <h2 className="text-sm font-semibold">
            Software Engineering Immersive Student
          </h2>
          <h3 className="text-sm font-light">
            Utilize: Javascript, CSS, HTML, React, Nodejs, Python
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2018 - May 2020"
          icon={<CelesticaIcon />}
        >
          <h1 className="text-lg font-semibold">Celestica</h1>
          <h2 className="text-sm font-semibold">
            Operations Engineering Associate
          </h2>
          <h3 className="text-sm font-light">
            Utilize: Javascript, CSS, HTML, Google App Scripts
          </h3>
          <p>User Experience, Visual Design</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconClassName="bg-white"
          icon={<UofTIcon />}
        >
          <h1 className="text-lg font-semibold">University of Toronto</h1>
          <h2 className="text-sm font-semibold">
            Materials Science and Engineering Student
          </h2>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
