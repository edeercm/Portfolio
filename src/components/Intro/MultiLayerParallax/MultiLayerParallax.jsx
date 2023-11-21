import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";
import '../MultiLayerParallax/MultiLayerParallax.css'


export default function MultiLayerParallax() {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  // const textY2 = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 576);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 576);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundY = useTransform(scrollYProgress, [0, 1], isMobile ? ["0%", "15%"] : ["0%", "25%"]);
  // const textY = useTransform(scrollYProgress, [0, 0.5], isMobile ? ["50%", "100%"] : ["-15%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], isMobile ? ["100%", "200%"] : ["0%", "200%"]);

 

  return (
    <>
      <div className="parallax" ref={ref}>
        <div className="d-flex flex-column">
          {/* <motion.h1 className="label" style={{ y: textY }}>
          Welcome
          </motion.h1> */}
          <motion.h1 className="label" style={{ y: textY }}>
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

