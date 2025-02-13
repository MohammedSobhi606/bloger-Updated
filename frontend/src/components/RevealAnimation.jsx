import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
function RevealAnimation({ width = "fit-content", children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const slidControls = useAnimation();
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slidControls.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative overflow-hidden" style={{ width }}>
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 75 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slidControls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        className="top-0 absolute bottom-0 left-0 right-0 bg-teal-400 z-20"
      ></motion.div>
    </div>
  );
}

export default RevealAnimation;
