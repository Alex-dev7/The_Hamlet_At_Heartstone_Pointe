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
    className="absolute flex gap-1 text-sm place-items-center right-5 z-50 transition-all  bg-[#b1d2e394] dark:bg-[#4d5c655c] rounded-2xl px-3 " 
    >{resolvedTheme === 'dark' ? (
        <>
        <span>light</span>
        <Image src='/dark.png' alt='dark button' width={25} height={25} />
        </>
    ) : (
        <>
        <Image src='/light.png' alt='light button' width={25} height={25} />
        <span>dark</span>
        
        </>
    )}</button>
  )
}

export default ThemeButton