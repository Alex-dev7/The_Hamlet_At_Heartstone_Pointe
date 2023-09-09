import {motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"


function About() {
  let { scrollYProgress} = useScroll()
  let y = useTransform(scrollYProgress, [0.3, 1], ["-10%", "70%"])
  let width = useTransform(scrollYProgress, [0, 0.5], ["20%", "70%"])

  return (
    <div
    className="min-h-screen h-screen flex   place-items-center " 
    id="about"
    >


        <div className="w-[100%]  flex flex-col gap-10   text-center relative h-[60%] overflow-hidden  ">
          <motion.div className="absolute -z-20 w-full" style={{y}}>
            <Image src='/image-1.jpg' alt='landscape image' priority width={1920} height={1078} className="w-full bg-bottom -translate-y-[400px] object-cover " />
                       
          </motion.div>

            <motion.div style={{ width}}   className="absolute bg-gradient-to-r from-[#001d29ce] via-[#001d29ce] to-[#00000000] top-[50%] -translate-y-[50%] left-[0%]  w-fit  flex gap-5 flex-col mx-auto place-items-center   px-16 py-16 ">
            
                <h2 className="text-[2.5rem]">
                    ABOUT US
                </h2>
                
                <p className="w-[800px] mx-auto text-[1.1rem] leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>                
            </motion.div>

        </div>
    
    </div>
  )
}

export default About