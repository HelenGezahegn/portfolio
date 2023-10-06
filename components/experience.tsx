"use client";

import React from "react";
import SectionHeader from "@/components/section-header";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <div id="experience" ref={ref}>
      <SectionHeader>Experience</SectionHeader>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem"
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af"
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{ background: "white", fontSize: "1.5rem" }}
              //   visible={inView}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="font-normal !mt-1 text-gray-700">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </div>
  );
}


/* Had to downgrade Next.js to 13.4.8 due to VerticalTimelineElement's being hidden 
// & animation difficulties. 
https://github.com/stephane-monnot/react-vertical-timeline/issues/166 */