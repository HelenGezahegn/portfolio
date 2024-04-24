"use client";

import React, { useEffect } from "react";
import SectionHeading from "@/components/section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.75);

  return (
    <motion.section
      id="about"
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        {`I'm a senior student and a full-stack software developer with 2 years of experience based in Edmonton, Alberta (Canada) hoping to relocate after graduation. I'm obsessed with learning new technologies, and have experience in designing and building web, mobile, and back-end database applications.`}
      </p>
      <p className="mb-3">
        {`My commitment to diversity and inclusivity has led me to helm Ada’s Team while an undergrad studying computer science at the University of Alberta. I focused on developing five programs: mentoring underserved high schoolers, tutoring in math, statistics, and computer science, a podcast, a bootcamp, and a fully-funded initiative sending 75+ underrepresented individuals to global tech conferences for free. 
`}
      </p>
      <p className="mb-3">
        {`Beyond my tech work, I played a pivotal role in contributing to RISEBRIDGE, a Vancouver Island non-profit committed to advocating for BIPOC communities and addressing the urgent needs of vulnerable individuals. This includes supporting those who are street-entrenched, battling addiction, fleeing domestic violence, and confronting various critical challenges.`}
      </p>
      <p className="mb-3">
        {` When I'm not in front of a computer screen, you'll find me travelling (on country 31), trying to
        learn a new language (dieu aide mon francais), or chillin' with the fam.`}
      </p>
    </motion.section>
  );
}
