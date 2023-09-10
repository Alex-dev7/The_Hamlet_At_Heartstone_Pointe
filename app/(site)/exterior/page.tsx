"use client"
import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { getInteriorInfo } from "@/sanity/sanity-utils"
import { Interior } from "@/types/Interior"

function Exterior() {
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
    initial={{opacity: 0}}
    animate={{ opacity: 1}}
    exit={{opacity: 0}}
    transition={{duration: 0.3, ease: "easeOut"}}
    > 
    { openModal &&
      <div onClick={closeModal} className="fixed flex justify-center place-items-center z-50 bg-black bg-opacity-75 top-0 right-0 w-screen h-full">
        { img && <Image src={`https://picsum.photos/800/400`} alt="" width={800} height={400} className=""/>}

      </div>
    }

        <div className="grid grid-cols-2 gap-5 grid-flow-row ">
           
        {images.map((i) => i % 3 === 0 ?  
         <Image key={i} onClick={handleClick} className="col-span-2 w-full  object-cover outline  border-4 border-white hover:scale-[102%] transition-all brightness-75 hover:brightness-100"  src="https://picsum.photos/800/400" width={800} height={400} alt="#" /> 
         : 
         <Image key={i} onClick={handleClick} src="https://picsum.photos/600/800" alt="#" width={600} height={800} className="border-4 border-white hover:scale-[102%] transition-all brightness-75 hover:brightness-100"/>
               )}
             
       </div>
        <div className="flex flex-col place-content-center relative">
            <div className="fixed w-[45%] top-[20%] right-5 flex flex-col gap-10 ">
                <h3 className="text-end mr-10 text-[2.8rem]">exterior.</h3>
                <hr/>
                <p className="text-[1.1rem]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p> 
                <Image src={"https://i.imgur.com/RQgw2hA.jpeg"} alt=""  width={600} height={800} className="w-[900px] "/>                 
            </div>
        </div>


    </motion.section>
  )
}

export default Exterior