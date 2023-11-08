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
        {`With a love for learning and a passion for
        crafting fast and elegant applications, I thrive on creating solutions that have a real-world impact.`}
      </p>
      <p className="mb-3">
        {`I firmly believe in the power of technology to drive positive change, 
        whether it's streamlining processes, enhancing user experiences, 
        building software to help nonprofits reach their goals, creating platforms 
        to connect people in meaningful ways, or using data to address pressing global issues. 
        I'm always eager to roll up my sleeves and make a difference. `}
      </p>

      <p className="mb-3">
        {` When I'm not immersed in the world of
        code, you'll find me travelling (on country 30), trying to
        learn a new language (currently working on my French), or chillin' with the fam.`}
      </p>
    </motion.section>
  );
}
