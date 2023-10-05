"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/intro.jpeg"
              alt="Helen Gezahegn's portrait"
              width="192"
              height="192"
              quality="95"
              priority={true} // to load the image immediately
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffnesss: 125, delay: 0.1 }}
          >
            <span className="absolute bottom-0 right-0 text-3xl">👋🏾</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
