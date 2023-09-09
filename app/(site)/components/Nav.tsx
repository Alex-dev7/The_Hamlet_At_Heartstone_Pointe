
import Link from "next/link";
import ThemeButton from "./ThemeButton";
import Dropdown from "./Dropdown";
import Image from "next/image";
import { usePathname } from "next/navigation";



export default function Nav(){
 const pathname = usePathname()

    return (
        <nav   className={` bg-[#13775100]  min-h-[60px] w-full px-10 py-2   z-30 flex  justify-center sm:gap-11 md:gap-20 place-items-center -translate-y-50  transition-all duration-200 fixed text-[#dee5e8] font-extralight lg:text-xl tracking-widest `}>

            <a  href="/" className=" left-8 font-semibold text-lg hover:text-white  absolute top-2">
                <Image src="/LOGO.svg" alt="svg logo" width={180} height={60} className="object-contain h-[52px]"/>
            </a>
            <Link href="/#banner" className="hover:text-white hover:translate-y-1 transition-all">
                home
            </Link> 
            {
                pathname === '/' ? 
                <a href="#about" className="hover:text-white hover:translate-y-1 transition-all" >about</a>
                :
            <Link  href="/#about"   className="hover:text-white hover:translate-y-1 transition-all"
            >
                about
            </Link>                
            }

            <Dropdown  />           
            <Link href="/contact" className="hover:text-white hover:translate-y-1 transition-all">
                contact
            </Link>
            <ThemeButton />
        </nav>
    )
}