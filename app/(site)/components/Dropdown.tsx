"use client"
import { useState } from "react"
import Link from "next/link"

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)

  return (

    <div className=" relative "  onMouseLeave={() => setIsOpen(false)}>
        <button onClick={() => setIsOpen(!isOpen)} onMouseOver={() => setIsOpen(true)}    className="block  p-3 hover:text-white hover:translate-y-1 transition-all">
            layout
        </button>
        {
            isOpen && 
            <div onMouseLeave={() => setIsOpen(false)} className="absolute flex flex-col gap-3 px-3 py-3  text-base font-medium tracking-widest ">
                <Link href="/interior" className="hover:text-white hover:font-extrabold hover:underline">
                    INTERIOR
                </Link>
                <Link href="/exterior" className="hover:text-white hover:font-extrabold hover:underline ">
                    EXTERIOR
                </Link>
                {/* <a href="#" className="hover:text-white hover:font-normal hover:underline">
                    map
                </a>                 */}
            </div>
        }
                
    </div> 


  )
}

export default Dropdown