"use client"
// import { useState } from "react"
import Map from "./components/Map"
import Form from "./components/Form";
import { motion } from "framer-motion";



function Contact() {


  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{ opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.3, ease: "easeOut"}}
    className="h-screen w-screen relative flex place-items-center justify-evenly bg-[#314F44] ">
      <div className="w-[50%] h-[90%] flex flex-col justify-around pl-8">
        <div>
          <h2
          className="text-[40px] font-medium  text-white "
          >Let&apos;s Talk</h2>
          <p className="text-[15px]  text-white font-thin w-[90%]"
          >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </p>         
        </div>

        <address className="not-italic text-white font-thin">
        <h3
        className="text-[20px] font-medium  text-white"
        >Contact Info</h3>
          <a href="mailto:test@test.com">test@test.com</a>
          <br/>
          <a href="tel:+15189155569">(123) 4567-891</a>
          <p>
            Address: <br/>
            3259 Lake Shore Dr, Lake George, NY<br/>
            12845
          </p>
        </address>
        <Map/>
      </div>
      <div className="w-[50%] h-[90%] flex justify-center place-items-center pr-8">
        <Form/>
      </div>
      
    </motion.div>
  );
}

export default Contact