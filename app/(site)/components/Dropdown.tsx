"use client"
import { useState } from "react"
import Link from "next/link"

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)

  return (

    <div className=" relative "  onMouseLeave={() => setIsOpen(false)}>
        <button onClick={() => setIsOpen(!isOpen)} onMouseOver={() => setIsOpen(true)}    className="block  p-3 hover:text-white ">
            layout
        </button>
        {
            isOpen && 
            <div onMouseLeave={() => setIsOpen(false)} className="absolute flex flex-col gap-3 px-3 py-3  text-base tracking-widest">
                <Link href="#" className="hover:text-white hover:font-normal hover:underline">
                    interior
                </Link>
                <Link href="#" className="hover:text-white hover:font-normal hover:underline ">
                    exterior
                </Link>
                <a href="#" className="hover:text-white hover:font-normal hover:underline">
                    layout
                </a>                
            </div>
        }
                
    </div> 


  )
}

export default Dropdown