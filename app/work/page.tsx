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
    <div className="h-[700px] flex flex-grow flex-col items-center">
      <h1 className="text-3xl mt-4 text-center">
        Take a glimpse of what I've done so far
      </h1>
      <div className="flex items-center mt-2 mb-8">
        <h2 className="text-xl">Or take a look at my CVS:&nbsp;&nbsp;</h2>
        <Button className="p-1">Download My CVS</Button>
      </div>
      <div className="overflow-y-scroll flex flex-col w-full scroll">
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
            <ul className="mt-2 marker:text-blue-700 list-disc list-inside text-sm">
              <li>
                <span className="font-semibold">Technologies Used:&nbsp;</span>
                Java, Spring Boot, Vue, GCP, SQL, Github Actions
              </li>
              <li>
                Scope, develop and release new features for the Amazon
                integration and NetSuite integration at A2X
              </li>
              <li>Maintain and optimize the Amazon integration.</li>
              <li>
                Improve developer experience by introducing new tools and
                documentation
              </li>
            </ul>
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
            <ul className="mt-2 marker:text-blue-700 list-disc list-inside text-sm">
              <li>
                <span className="font-semibold">Technologies Used:&nbsp;</span>
                C#, Dotnet, React, Redux, Jenkins, TeamCity, AWS
              </li>
              <li>
                Helped with the development and release of eInvoicing at Xero
              </li>
              <li>Led the scaling project for eInvoicing receiving</li>
              <li>
                Created the BFF for Xero's new Bill's page ensuring the project
                is ready for development
              </li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2020 - Nov 2020"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={<AgsightIcon />}
          >
            <h1 className="text-lg font-semibold">AgSights</h1>
            <h2 className="text-sm font-semibold">Software Developer</h2>
            <ul className="mt-2 marker:text-blue-700 list-disc list-inside text-sm">
              <li>
                <span className="font-semibold">Technologies Used:&nbsp;</span>
                Javascript, CSS, HTML, React, Nodejs
              </li>
              <li>
                Developed and improved AgSights bioLinks by integrating APIs and
                improving the UX
              </li>
            </ul>
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
            <ul className="mt-2 marker:text-blue-700 list-disc list-inside text-sm">
              <li>
                <span className="font-semibold">
                  Technologies Learned:&nbsp;
                </span>
                Javascript, CSS, HTML, React, Nodejs, Python
              </li>
            </ul>
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
            <ul className="mt-2 marker:text-blue-700 list-disc list-inside text-sm">
              <li>
                <span className="font-semibold">Technologies Used:&nbsp;</span>
                Javascript, CSS, HTML
              </li>
              <li>
                Took initiative to learn Javascript, CSS, HTML to create an
                online statistical process control chart
              </li>
            </ul>
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
    </div>
  );
}
