"use client"
import { motion, useScroll } from "framer-motion"
import Image from 'next/image'
import About from "./components/About";
import Link from "next/link";

export default function Home() {
  const { scrollYProgress } = useScroll();
  
  return (
    <>
        {/* <Banner/> */}
        <About/>
        <section className="grid grid-cols-2  min-h-screen pt-[15vh]">
              <motion.div
                className="progress-bar fixed  top-0 left-0 right-0  h-[4px] bg-green-600 origin-left "
                style={{ scaleX: scrollYProgress }}
              />
              <Link href="/interior" >
                      <h2 className="text-center m-5 text-[2rem]">
                        INTERIOR
                      </h2>
                      <Image src='/image-5.jpg' alt='interior' width={500} height={400}
                      className="w-[80%] h-[60%] mx-auto object-cover hover:scale-105 cursor-pointer transition-all "
                      />   
              </Link>
              <Link href="/exterior">
                  <h2 className="text-center m-5 text-[2rem]">
                    EXTERIOR
                  </h2>
                  
                  <Image src='/image-4.jpg' alt='interior' width={400} height={400}
                  className="w-[80%] h-[60%] mx-auto object-cover hover:scale-105 cursor-pointer transition-all "  />                                  
              </Link>

      </section>    
    </>

  )
}


