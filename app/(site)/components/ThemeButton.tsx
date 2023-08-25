"use client"

import { useTheme } from "next-themes"
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
    className="absolute right-5" 
    >{resolvedTheme === 'dark' ? (
        "light"
    ) : (
        "dark"
    )}</button>
  )
}

export default ThemeButton