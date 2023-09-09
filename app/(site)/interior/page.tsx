"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

import { getInteriorInfo } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"

function Interior() {
  const [data, setData] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [img, setImg] = useState(true)
  useEffect(() => {
      const response = getInteriorInfo()
      response.then((interior) => console.log(interior[0].images))
      
    
  }, [])

  const images = [1, 2, 3, 4, 5, 6]

  function handleClick(e: any) {
    // console.log(e.target.src)
    setOpenModal(!openModal)
    setImg(e.target.src)
    return 0
  }
  function closeModal(){
    setOpenModal(false)
    return 0
  }
  return (
    <motion.section className="min-h-screen py-[10%] px-[2%] grid grid-cols-2 "
    initial={{ opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    transition={{ duration: 0.5, ease: "easeOut"}}
    >
          { openModal &&
      <div onClick={closeModal} className="fixed flex justify-center place-items-center z-50 bg-black bg-opacity-75 top-0 right-0 w-screen h-full">
        { img && <Image src={`https://picsum.photos/800/400`} alt="" width={800} height={400} className=""/>}

      </div>
    }
        <div className="flex flex-col place-content-center relative">
            <div className="fixed w-[45%] top-[20%] flex flex-col gap-10">
                <h3 className="text-[2.8rem]">interior.</h3>
                <hr/>
                <p className="text-[1.1rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p> 
                <Image src={"https://i.imgur.com/RQgw2hA.jpeg"} alt=""  width={600} height={800} className="w-[900px] "/>                   
            </div>
        </div>
        <div className="grid grid-cols-2 gap-2 grid-flow-row ">
           
        {images.map((i) => i % 3 === 0 ?  
         <Image key={i} onClick={handleClick} className="col-span-2 w-full  object-cover outline  border-4 border-white hover:scale-[102%] transition-all brightness-75 hover:brightness-100"  src="https://picsum.photos/800/400" width={800} height={400} alt="#" /> 
         : 
         <Image key={i} onClick={handleClick} src="https://picsum.photos/600/800" alt="#" width={600} height={800} className="border-4 border-white hover:scale-[102%] transition-all brightness-75 hover:brightness-100"/>
               )}
        </div>

    </motion.section>

  )
}

export default Interior