"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function ZowexoEntrance() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="zowexo-entrance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1.8,
              ease: [0.4, 0, 0.2, 1],
            },
          }}
        >

          {/* Soft ambient light */}
          <motion.div
            className="zowexo-entrance-glow"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: [0, 0.7, 0.45],
              scale: [0.9, 1, 1.04],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
            }}
          />

          {/* Very subtle light sweep */}
          <motion.div
            className="zowexo-entrance-light"
            initial={{
              x: "-120%",
              opacity: 0,
            }}
            animate={{
              x: "120%",
              opacity: [0, 0.15, 0],
            }}
            transition={{
              duration: 4,
              delay: 0.8,
              ease: "easeInOut",
            }}
          />

          {/* Top label */}
          <motion.div
            className="zowexo-entrance-label"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.4,
              delay: 0.6,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            GLOBAL SOURCING & EXPORT
          </motion.div>


          {/* Main title */}
          <motion.h1
            className="zowexo-entrance-title"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.6,
              delay: 1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            <motion.span
  className="entrance-title-font"
  style={{
    fontFamily: '"Bodoni Moda", "Times New Roman", serif',
    fontWeight: 700,
    letterSpacing: "-0.035em",
  }}
>
  ENTER THE
</motion.span>

            <motion.span
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.5,
                delay: 1.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
             <motion.span
  className="entrance-title-font"
  style={{
    fontFamily: '"Bodoni Moda", "Times New Roman", serif',
    fontWeight: 700,
    letterSpacing: "-0.035em",
  }}
>
  ZOWEXO WORLD
</motion.span>
            </motion.span>
          </motion.h1>


          {/* Gold line */}
          <motion.div
            className="zowexo-entrance-line"
            initial={{
              width: 0,
              opacity: 0,
            }}
            animate={{
              width: 130,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
              delay: 2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          />


          {/* Subtitle */}
          <motion.p
            className="zowexo-entrance-subtitle"
            initial={{
              opacity: 0,
              y: 8,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.4,
              delay: 2.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Connecting possibilities beyond borders.
          </motion.p>


          {/* Loading indicator */}
          <motion.div
            className="zowexo-entrance-loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 2.5,
              duration: 1,
            }}
          >
            <motion.div
              className="zowexo-entrance-loader-bar"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{
                duration: 2,
                delay: 2.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}