import React from "react";
import SectionHeading from "@/components/section-header";
import { projectsData } from "@/lib/data";
import Project from "@/components/project";

export default function Projects() {
  return (
    <section>
      <SectionHeading>Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
