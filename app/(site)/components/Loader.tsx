"use client"
import { easeIn, easeInOut, easeOut, motion } from "framer-motion";

import Image from "next/image";

// Import images

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easeIn,
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: easeInOut,
      duration: 0.8,
    },
  },
};

const itemMain = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: easeOut,
      
      duration: 1.6,
    },
  },
};

const Loader = ({ setLoading }) => {
    return (
      <motion.div className="loader">
        <motion.div
          variants={container}
          onAnimationComplete={() => setLoading(false)}
          initial="hidden"
          animate="show"
          exit="exit"
          className="loader-inner"
        >
          <ImageBlock variants={item} id="image-1" />
          <motion.div variants={itemMain} className="transition-image w-fit  flex mx-auto mt-[30vh]">
            <motion.img
              className="align-middle"
              layoutId="main-image-1"
              src={`/image-2.jpg`}
              alt="random alt"
              width={400}
              height={300}
            />
          </motion.div>
          <ImageBlock variants={item} id="image-3" />
          <ImageBlock variants={item} id="image-4" />
          <ImageBlock variants={item} id="image-5" />
        </motion.div>
      </motion.div>
    );
  };
  
  export const ImageBlock = ({ posX, posY, variants, id }) => {
    return (
      <motion.div
        variants={variants}
        className={`image-block ${id}`}
        style={{
          top: `${posY}vh`,
          left: `${posX}vw `,
        }}
      >
        <Image
          src={`/${id}.jpg`}
          width={400}
          height={300}
          alt={id}
        />
      </motion.div>
    );
  };
  export default Loader;