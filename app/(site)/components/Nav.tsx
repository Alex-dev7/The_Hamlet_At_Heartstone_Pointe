import Link from "next/link";
import ThemeButton from "./ThemeButton";

export default function Nav(){
    return (
        <nav className="h-[60px] w-full px-10 bg-[#cce5d830] z-30 flex  justify-center gap-10 place-items-center -translate-y-50  transition-all duration-200 fixed  ">

            {/* <a href="#">
                Interior
            </a>
            <a href="#">
                Exterior
            </a> */}
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