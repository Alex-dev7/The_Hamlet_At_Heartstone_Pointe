import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const banner = {
    initial: { y: 200 },
  animate: {
    y: 100,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {

  initial: { y: 200,  opacity: 0 },
  animate: {
    y: 0,
   opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.4,
      
    },
  },
};

const Banner = () => {

  return (
    <motion.div className='banner flex flex-col z-20 relative h-[25vh] mb-5' variants={banner}>
      <BannerRowTop title={"THE HAMLET"} />
      <div className="flex ">
        <BannerRowAt title={"at"}  />
        <BannerRowCenter title={" HEARTSTONE "}  />
        <BannerRowBottom title={"POINTE"} />        
      </div>

    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className='row-title flex   gap-5 font-[600] opacity-100 overflow-hidden'
    variants={disabled ? {} : banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter, i) => (
      <motion.span
      key={i}
        className='row-letter  whitespace-nowrap font-[200]  tracking-tighter  drop-shadow-xl shadow-black overflow-hidden'
        variants={disabled ? {} : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title }) => {
  return (
    <div className={"banner-row flex"}>
      <div className='row-col flex content-center justify-center  text-[5rem]  ml-5'>
        <AnimatedLetters title={title} disabled={undefined} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className='  flex content-center justify-center  w-[50%]'>
            <span>
                {/* Something in here */}
            </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={" text-[4rem] ml-[2rem]"}>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ease: "circInOut", duration: 1, delay: 1 }}
        className='text-[1rem]  w-[100px] h-[100px] flex place-items-center justify-center gap-1  rounded-full absolute left-20 top-[70vh] bg-white cursor-pointer hover:border-2 hover:bg-[#869AA1] hover:text-white transition-color duration-200  dark:text-black dark:hover:text-white'>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}>
          scroll
        </motion.span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}>
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} disabled={undefined} />
    </div>
  );
};

const BannerRowAt= ({ title }) => {
  return (
    <div className={`banner-row  ml-[20%] `}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='marquee__inner text-[4rem] '
        >
        <AnimatedLetters title={title} disabled={undefined} />
      </motion.div>
    </div>
  );
};
const BannerRowCenter = ({ title }) => {
    return (
      <div className={`banner-row ml-[2rem]`}>
        <motion.div
          initial={{ y: 310 }}
          animate={{ y: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
          className=' text-[4rem] '>
          <AnimatedLetters title={title} disabled={undefined} />
        </motion.div>
      </div>
    );
  };

export default Banner;