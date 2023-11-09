import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import chitChatAIImg from "@/public/chitChatAI.png";
import travelBuddyImg from "@/public/travelBuddy.png";
import netflixCloneImg from "@/public/netflixClone.png";

export const links = [
  {
    name: "Home",
    hash: "#home"
  },
  {
    name: "About",
    hash: "#about"
  },
  {
    name: "Projects",
    hash: "#projects"
  },
  {
    name: "Skills",
    hash: "#skills"
  },
  {
    name: "Experience",
    hash: "#experience"
  },
  {
    name: "Travel",
    hash: "#travel"
  },
  {
    name: "Contact",
    hash: "#contact"
  }
] as const;

export const experiencesData = [
  {
    title: "University of Alberta",
    location: "Edmonton, AB",
    description: "BSc. Computer Science",
    icon: React.createElement(LuGraduationCap),
    date: "Expected Grad: Dec 2024"
  },
  {
    title: "Maching Learning Fellow, AI4Good",
    location: "Montréal, QC",
    description: `- Learned & applied fundamental concepts in machine learning & prototype development from Doina Precup & other experts. 
    - Started a dataset of Braille characters with a current size of almost 27K.
    - Used Python, pandas, numpy, & pytorch to train a model that recognizes Braille characters with 97% accuracy.
    - Worked with tensorflor, ONNX, & caffe2 to convert the model to be integrated in an Android app using AndroidStudio.`,
    icon: React.createElement(CgWorkAlt),
    date: "May - June 2018"
  },
  {
    title: "Front-End Developer Intern, XIOT",
    location: "Cairo, Egypt",
    description: `- Built 2+ web interfaces with HTML/CSS to send HTTP requests to test the efficiency, response/latency, & accuracy of data being sent to their IoT hardware, the xChip.
    - Experimented with curl, JavaScript (XHR & fetch), Node.js, & Python to determine best performance for sending 10+ HTTPS requests.`,
    icon: React.createElement(FaReact),
    date: "July - Aug 2018"
  },
  {
    title: "Full-Stack Software Engineer, Intuit",
    location: "Edmonton, AB | Toronto, ON",
    description: `- Fully integrated & debugged an installment payment feature reaching 200K+ customers in QuickBooks Online (QBO) backend using Java.
    - Wrote & debugged 250+ unit/integration tests, identifying longstanding UI & localization bugs using Enzyme, JUnit, Sinon, Mockito, & Chai.
    - Entirely developed an analytics system that tracks 300K+ users & retention rates in QBO's Sales Tax Center (CA) & Invoice Customization (Global) using Amplitude, Segment.io, & JavaScript.
    - Added 100+ analytic triggers, 25+ dashboards, and 90+ charts, Demoed it 3+ times to technical and non-technical audiences.
    - Created an Intuit Developer Cheatsheet that became an official part of the Intuit onboarding training for full-time, contract, and intern employees.`,
    icon: React.createElement(FaReact),
    date: "May 2019 - Dec 2020"
  },
  {
    title: "Nomad",
    location: "30 Countries",
    description: `Spent the last two years solo-travelling around the world, hence the gap in my employment. Didn't plan to travel for so long, but couldn't stop once I started. Feel free to ask about my adventures!`,
    icon: React.createElement(FaReact),
    date: "May 2021 - Aug 2023"
  }
] as const;

export const projectsData = [
  {
    title: "ChitChat",
    description:
      "A chat app that leverages the power of OpenAI's GPT-based tech with autocomplete and a support bot.",
    tags: [
      "React",
      "Redux",
      "Auth0",
      "ChatGPT",
      "Node.js",
      "Express.js",
      "ChatEngine",
      "SASS"
    ],
    imageUrl: chitChatAIImg,
    githubUrl: "https://github.com/HelenGezahegn/chit-chat-ai"
  },
  {
    title: "TravelBuddy",
    description: `A MERN social media app for wanderlust-driven globetrotters. You can post, have a feed, add/remove friends, and see profiles.`,
    tags: [
      "React",
      "Redux",
      "MongoDB",
      "Node.js",
      "Express.js",
      "MaterialUI",
      "ReactRouter"
    ],
    imageUrl: travelBuddyImg,
    githubUrl: "https://github.com/HelenGezahegn/travel-buddy"
  },
  {
    title: "Netflix Clone",
    description: "A responsive Netflix clone.",
    tags: ["React", "Next.js", "TailwindCSS", "Prisma", "MongoDB", "NextAuth"],
    imageUrl: netflixCloneImg,
    githubUrl: "https://github.com/HelenGezahegn"
  }
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "ReactNative",
  "Vite",
  "Next.js",
  "Git",
  "Agile",
  "MaterialUI",
  "Node.js",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "SQL"
] as const;
