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
    >{resolvedTheme === 'dark' ? (
        "sun"
    ) : (
        "moon"
    )}</button>
  )
}

export default ThemeButton