"use client"
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import Dropdown from "./Dropdown";
import { useState } from "react";

export default function Nav(){
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav onScroll={() => setIsOpen(true)} className={`${isOpen && "bg-[#010101b2]"} min-h-[60px] w-full px-10 bg-transparent z-30 flex  justify-center sm:gap-11 md:gap-20 place-items-center -translate-y-50  transition-all duration-200 fixed text-[#dee5e8] font-extralight lg:text-xl tracking-widest`}>

            <a  href="/" className="absolute left-8 font-semibold text-lg hover:text-white ">
                LOGO
            </a>
            <Link href="/#banner" className="hover:text-white">
                home
            </Link> 
            <Link href="/#about" className="hover:text-white"
            >
                about
            </Link>
            <Dropdown  />           
            <Link href="/contact" className="hover:text-white">
                contact
            </Link>
            <ThemeButton />
        </nav>
    )
}