
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import Dropdown from "./Dropdown";


export default function Nav(){

    return (
        <nav  className={` bg-[#212b3935] min-h-[60px] w-full px-10 py-2  z-30 flex  justify-center sm:gap-11 md:gap-20 place-items-center -translate-y-50  transition-all duration-200 fixed text-[#dee5e8] font-extralight lg:text-xl tracking-widest`}>

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