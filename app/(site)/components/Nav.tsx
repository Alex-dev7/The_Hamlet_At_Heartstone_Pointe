import Link from "next/link";
import ThemeButton from "./ThemeButton";
import Dropdown from "./Dropdown";

export default function Nav(){
    return (
        <nav className="min-h-[60px] w-full px-10 bg-[#cce5d830] z-30 flex  justify-center gap-10 place-items-center -translate-y-50  transition-all duration-200 fixed text-[#dee5e8]">
            <a  href="/" className="absolute left-8 font-semibold text-lg">
                LOGO
            </a>

            <Dropdown />
            <Link href="/#about"
            className=""
            >
                about
            </Link>
            <Link href="/#banner">
                home
            </Link>            
            <Link href="/contact">
                contact
            </Link>
            <ThemeButton />
        </nav>
    )
}