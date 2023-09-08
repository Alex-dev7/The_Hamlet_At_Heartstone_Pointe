"use client"
import Image from "next/image"
import { motion } from "framer-motion"

function Exterior() {
    const images = [1, 2, 3, 4, 5, 6]
  return (
    <motion.section className="min-h-screen py-[10%] px-[2%] grid grid-cols-2 "
    initial={{opacity: 0}}
    animate={{ opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.3, ease: "easeOut"}}
    >
        <div className="grid grid-cols-2 gap-5 grid-flow-row ">
           
           {images.map((i) => i % 3 === 0 ?   <Image key={i} className="col-span-2 w-full  object-cover outline p-2 border-4 border-white"  src="https://picsum.photos/800/400" width={800} height={400} alt="#" /> : <Image key={i} src="https://picsum.photos/600/400" alt="#" width={500} height={400} className="border-4 border-white p-2"/>

              )}
             
       </div>
        <div className="flex flex-col place-content-center relative">
            <div className="fixed w-[45%] top-[20%] right-5 flex flex-col gap-10 ">
                <h3 className="text-end mr-10">our exterior.</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p> 
                <Image src={"https://i.imgur.com/RQgw2hA.jpeg"} alt=""  width={600} height={800} className="w-[900px] "/>                 
            </div>
        </div>


    </motion.section>
  )
}

export default Exterior