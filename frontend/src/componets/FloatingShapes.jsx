import React from "react";
import { motion } from "framer-motion";

const FloatingShapes = ({color, size, top, left, delay}) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} ${top}  ${left} ${size} blur-xl opacity-20`}
    animate={{
      y:["0%","100%","0"],
      x:["0%","100%","0"],
      rotate:[0,360]

    }}
    transition={{
      duration:20,
      ease:"linear",
      repeat:Infinity,
      delay:delay
    }}
     aria-hidden={true}
   />
  );
};

export default FloatingShapes;
