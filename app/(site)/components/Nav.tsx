import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function Nav(){
    return (
        <nav className="h-[60px] w-full px-10 bg-[#cce5d830] z-30 flex  justify-center gap-10 place-items-center -translate-y-50  transition-all duration-200 fixed text-[#dee5e8]">
            <a href="/" className="absolute left-8 font-semibold text-lg">
                LOGO
            </a>
            <a href="#layout" className="">
                layout
                <div className=" flex flex-col gap-2 ">
                    <Link href="#">
                        Interior
                    </Link>
                    <Link href="#">
                        Exterior
                    </Link>                
                </div>
            </a>


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