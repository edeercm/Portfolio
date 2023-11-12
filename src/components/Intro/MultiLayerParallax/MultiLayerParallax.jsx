import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import '../MultiLayerParallax/MultiLayerParallax.css'


export default function MultiLayerParallax() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY2 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <>
      <div className="parallax" ref={ref}>
        {/* <motion.h1 className="label" style={{ y: textY }}>
          مرحبا
        </motion.h1> */}
        <div className="d-flex flex-column">
          <motion.h1 className="label" style={{ y: textY }}>
            أهلاً وسهلاً
          </motion.h1>
          <motion.h1 className="label-two" style={{ y: textY2 }}>
            Welcome
          </motion.h1>
        </div>
        <motion.div className="background" style={{ y: backgroundY }}></motion.div>
        <div className="person"></div>
      </div>
      <div className="scrolldown d-flex flex-column align-items-center">
        <div className="scrolldown-indicator"></div>
        <span className="scrolldown-label">Scroll</span>
      </div>
    </>
  );
}

