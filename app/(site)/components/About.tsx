import {motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"


function About() {
  let { scrollYProgress} = useScroll()
  let y = useTransform(scrollYProgress, [0.3, 1], ["-10%", "70%"])


  return (
    <div
    className="min-h-screen h-screen flex   place-items-center" 
    id="about"
    >


        <div className="w-[100%]  flex flex-col gap-10   text-center relative h-[60%] overflow-hidden  ">
          <motion.div className="absolute -z-20 w-full" style={{y}}>
            <Image src='https://images.unsplash.com/photo-1600431465306-144924819212?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80' alt='landscape image' priority width={1920} height={1078} className="w-full bg-bottom -translate-y-[400px] object-cover " />          
          </motion.div>

            <div  className="absolute top-[25%] left-[50%] -translate-x-[50%] w-fit  flex gap-5 flex-col mx-auto place-items-center border-[1px] border-black bg-black opacity-80 rounded-xl px-16 py-16 ">
                <h2>
                    ABOUT US
                </h2>
                
                <p className="w-[600px] mx-auto ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>                
            </div>

        </div>
    
    </div>
  )
}

export default About