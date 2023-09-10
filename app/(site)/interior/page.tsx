"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

import { getInteriorInfo } from "@/sanity/sanity-utils"
import { PortableText } from "@portabletext/react"
import { Interior } from "@/types/Interior"

function Interior() {
  const [data, setData] = useState<Interior[] | {}>()
  const [openModal, setOpenModal] = useState(false)
  const [img, setImg] = useState(0)

  useEffect(() => {
      const response = getInteriorInfo()
      response.then((d) => {
        const [interior] = d
        setData(interior)
       })
  }, [])



  function handleClick(e: any, index: number){
    console.log(e.target)
    setOpenModal(!openModal)
    setImg(index)
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
      {/* @ts-ignore: Unreachable code error */}
        { data && <Image src={data.images[img]} alt="" width={500} height={400} className="h-auto"/>}

      </div>
    }
        <div className="flex flex-col place-content-center relative">
            <div className="fixed w-[45%] top-[20%] flex flex-col gap-10">
                <h3 className="text-[2.8rem]">interior.</h3>
                <hr/>
                {/* @ts-ignore: Unreachable code error */}  
                <PortableText value={data && data?.content} /> 
                <Image src={"https://i.imgur.com/RQgw2hA.jpeg"} alt=""  width={600} height={800} className="w-[900px]"/>                   
            </div>
        </div>
        <div className="grid grid-cols-2 gap-2 grid-flow-row ">
          {/* @ts-ignore: Unreachable code error */}  
        {data && data?.images.map((image: string, index: number) => index  % 3 === 0 ?  
         <Image key={index}  onClick={(e) => handleClick(e, index)} className="col-span-2 w-full  object-cover outline  border-4 border-white hover:scale-[102%] transition-all brightness-75 hover:brightness-100"  src={image} width={800} height={400} alt="#" /> 
         : 
         <Image key={index}  onClick={(e) => handleClick(e, index)} src={image} alt="#" width={600} height={800} className="border-4 h-auto border-white hover:scale-[102%] transition-all brightness-75 hover:brightness-100"/>
               )}
        </div>

    </motion.section>

  )
}

export default Interior