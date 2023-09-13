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
                      <h2 className="text-center m-5 text-[2rem] hover:-translate-y-1 text-slate-300 hover:text-white transition-all ">
                        INTERIOR
                      </h2>
                      <Image priority src='/image-5.jpg' alt='interior' width={400} height={200}
                      className="w-[80%] h-[30%] mx-auto object-cover hover:scale-105 cursor-pointer transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0)]  brightness-75 hover:brightness-100"
                      />   
              </Link>
              <Link href="/exterior">
                  <h2 className="text-center m-5 text-[2rem] hover:-translate-y-1 text-slate-300 hover:text-white transition-all ">
                    EXTERIOR
                  </h2>
                  
                  <Image priority src='/image-4.jpg' alt='interior' width={400} height={200}
                  className="w-[80%] h-[30%] mx-auto object-cover hover:scale-105   cursor-pointer transition-all duration-300 ease-in-out  shadow-[0_20px_50px_rgba(0,0,0)]  brightness-75 hover:brightness-100"  />                                  
              </Link>

      </section>    
    </>

  )
}


