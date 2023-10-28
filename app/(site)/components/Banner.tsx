
import { motion } from "framer-motion";

const banner = {
  initial: { y: 200 },
  animate: {
    y: 0,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {

  initial: { y: 10,  opacity: 0 },
  animate: {
    y: 0,
   opacity: 1,
    transition: {
      ease: 'easeInOut',
      duration: 0.1,
      
    },
  },
};

const Banner = () => {

  return (
    <>
    <motion.div id='banner' className='banner  flex flex-col z-20 relative h-[50vh] w-[85vw] mx-auto  place-content-center' variants={banner}>
      {/* <BannerRowTop title={"The HAMLET"} /> */}
      <Square />
      <div className="flex w-fit mx-auto -mt-[50px]">
        {/* <BannerRowAt title={"at"}  /> */}
        {/* <BannerRowCenter title={" HEARTHSTONE "}  /> */}
         <BannerRowBottom title={"Pointe"} />      
      </div>
         {/* <hr/> */}
    </motion.div>    
    
    </>

  );
};



const AnimatedLetters = ({ title , disabled }: any) => (
  <motion.span
    className='row-title flex   gap-5  opacity-100 overflow-hidden '
    variants={disabled ? {} : banner}
    initial='initial'
    animate='animate'>
    {[...title].map((letter, i) => (
      <motion.span
      key={i}
        className='row-letter   mx-[-2px]  drop-shadow-xl shadow-blue-900 overflow-hidden dark:text-slate-200 '
        variants={disabled ? {} : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title } : any) => {
  return (
    <div className={"banner-row flex"}>
      <div className='row-col flex content-center  justify-center  text-[8rem] font-normal mx-auto mt-5'>
        <AnimatedLetters title={title} disabled={undefined} />
      </div>
      {/* <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className='  flex content-center justify-center  w-auto'>
            <span>
            
            </span>
      </motion.div> */}
    </div>
  );
};

const BannerRowBottom = ({ title }: any) => {
  return (
    <div className={" text-[3rem] ml-[2rem] "}>
      <motion.a
        href="#about"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ ease: "circInOut", duration: 1, delay: 1 }}
        className='text-[1rem]  w-[100px] h-[100px] flex flex-col place-items-center font-medium justify-center   rounded-full absolute -left-12 top-[70vh] bg-white cursor-pointer hover:border-2 hover:bg-[#869AA1] hover:text-white transition-color duration-200  dark:text-black dark:hover:text-white '>
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
      </motion.a>
      {/* <AnimatedLetters title={title} disabled={undefined} /> */}
    </div>
  );
};

const BannerRowAt= ({ title }: any) => {
  return (
    <div className={`banner-row  `}>
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
        className='text-[3rem] '
        >
        <AnimatedLetters title={title} disabled={undefined} />
      </motion.div>
    </div>
  );
};
const BannerRowCenter = ({ title } : any) => {
    return (
      <div className={`banner-row ml-[2rem] `}>
        <motion.div
          initial={{ y: 310 }}
          animate={{ y: 0 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1 }}
          className=' text-[3rem] '>
          <AnimatedLetters title={title} disabled={undefined} />
        </motion.div>
      </div>
    );
  };


  // square
  const Square = () => {
    return (
      <div className={" text-[3rem] ml-[2rem] "}>
        <motion.a
          href="#about"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ease: "circInOut", duration: 1, delay: 1 }}
          className='text-[1rem]  w-[200px] h-[200px] flex flex-col place-items-center font-medium justify-center    bg-green-600 cursor-pointer hover:bg-[#869AA1] hover:text-white transition-color duration-200  dark:text-black dark:hover:text-white relative'>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}
            className=""
            >
            <p
            className="absolute text-[4rem] w-[80vw] flex text-white"
            >
              The Hamlet at Hearthstone Pointe
            </p>
          </motion.span>
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
        </motion.a>

      </div>
    );
  };

export default Banner;