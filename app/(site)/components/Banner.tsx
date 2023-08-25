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
//   const [playMarquee, setPlayMarquee] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setPlayMarquee(true);
//     }, 2000);
//   }, []);
  return (
    <motion.div className='banner flex flex-col z-50 relative h-[30vh]' variants={banner}>
      <BannerRowTop title={"THE HAMLET"} />
      <BannerRowCenter title={"at HEARTSTONE "}  />
      <BannerRowBottom title={"POINTE"} />
    </motion.div>
  );
};

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className='row-title flex  whitespace-nowrap gap-5 font-[600] opacity-100 overflow-hidden'
    variants={disabled ? {} : banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter, i) => (
      <motion.span
      key={i}
        className='row-letter  whitespace-nowrap font-[200]  tracking-tighter  drop-shadow-xl shadow-black'
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
        className='row-col  flex content-center justify-center  w-[50%]'>
            <span>
                Something in here
            </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title }) => {
  return (
    <div className={"banner-row center  text-[5rem] ml-[10rem]"}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
        className='scroll '>
        {/* <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}>
          scroll
        </motion.span> */}
        {/* <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}>
          down
        </motion.span> */}
      </motion.div>
      <AnimatedLetters title={title} disabled={undefined} />
    </div>
  );
};

const BannerRowCenter = ({ title, playMarquee }) => {
  return (
    <div className={`banner-row  marquee ml-[5rem]   ${playMarquee && "animate"}`}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='marquee__inner text-[5rem] '>
        {/* <AnimatedLetters title={title} disabled /> */}
        <AnimatedLetters title={title} disabled={undefined} />
        {/* <AnimatedLetters title={title} disabled /> */}
        {/* <AnimatedLetters title={title} disabled /> */}
      </motion.div>
    </div>
  );
};

export default Banner;