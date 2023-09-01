"use client"

import { useTheme } from "next-themes"
import Image from "next/image"
import { useEffect, useState } from "react"

function ThemeButton() {
    const {setTheme, resolvedTheme} = useTheme()
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) {
        return null
    }

  return (
    <button
    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    className="absolute flex gap-1 text-sm place-items-center right-5 z-50 transition-all  bg-[#b1d2e3c2] dark:bg-[#4d5c65] rounded-2xl px-3 " 
    >{resolvedTheme === 'dark' ? (
        <>
        <span>light</span>
        <Image src='/dark.png' alt='dark button' width={30} height={30} />
        </>
    ) : (
        <>
        <Image src='/light.png' alt='light button' width={30} height={30} />
        <span>dark</span>
        
        </>
    )}</button>
  )
}

export default ThemeButton