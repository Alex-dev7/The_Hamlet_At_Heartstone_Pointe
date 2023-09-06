"use client"
import { useState } from "react"
import Link from "next/link"

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)

  return (

    <div className="outline relative"  onMouseLeave={() => setIsOpen(false)}>
        <button onClick={() => setIsOpen(!isOpen)} onMouseOver={() => setIsOpen(true)}    className="block outline p-3">
            dropdown
        </button>
        {
            isOpen && 
            <div onMouseLeave={() => setIsOpen(false)} className="absolute flex flex-col gap-2 ">
                <Link href="#">
                    Interior
                </Link>
                <Link href="#">
                    Exterior
                </Link>                
            </div>
        }
                
    </div> 


  )
}

export default Dropdown