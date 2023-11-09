"use client";

import SectionHeading from "@/components/section-header";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Travel() {
  const { ref } = useSectionInView("Travel");

  return (
    <motion.section
      id="travel"
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{
        opacity: 0
      }}
      whileInView={{
        opacity: 1
      }}
      transition={{
        duration: 1
      }}
      viewport={{
        once: true
      }}
    >
      <SectionHeading>Travel</SectionHeading>
      <p className="display-linebreak mb-5">
        {`Traveled independently to 30 countries over a span of two years, demonstrating adaptability, cultural awareness, and self-reliance. This enriching experience has honed my ability to navigate diverse environments, fostering a deep appreciation for global perspectives, and enhancing my problem-solving skills.
        
        Here's where I've been so far 🥳`}
      </p>
      <div style={{ width: "100%", overflow: "hidden", height: "300px" }}>
        <iframe
          className="m-auto !border-none"
          src="https://www.google.com/maps/d/embed?mid=1ypBCM7X9Xd5-TXkrfsl5Gn0MCh32aVc&ehbc=2E312F"
          width="100%"
          height="450"
          loading="lazy"
          frameBorder="0"
          style={{ border: "0", marginTop: "-150px" }}
        ></iframe>
      </div>
    </motion.section>
  );
}
