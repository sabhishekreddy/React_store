import React from "react";
import "./Loader.scss";

import { motion } from "framer-motion";

export default function Loader() {
  const container = {
    hidden: { scale: 10 },
    show: {
      scale: 1,
      transition: {
        duration: 10,
        staggerChildren: 1,
        delayChildren: 0.3,
      },
    },
  };

  const dots = {
    hiddenstate: {
        rotate: 90
    },
    showstate: {
        rotate: 0,
        transition:{
            duration: 10,
        }
    },
  };

  return (
    <div id="Loader_Container">
      <div id="Loader_Text_Container">
        <motion.div
          id="Loading_Dots"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={dots} initial="hiddenstate" animate="showstate">
            L
          </motion.span>
          <motion.span variants={dots} initial="hiddenstate" animate="showstate">
            o
          </motion.span>
          <motion.span variants={dots} initial="hiddenstate" animate="showstate">
            a
          </motion.span>
          <motion.span variants={dots} initial="hiddenstate" animate="showstate">
            d
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
}
