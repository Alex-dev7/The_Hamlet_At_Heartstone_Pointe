import ThemeButton from "./ThemeButton";

export default function Nav(){
    return (
        <nav className="h-[60px] w-full px-10 bg-[#7e9fab32] z-30 flex  justify-center gap-10 place-items-center -translate-y-50  transition-all duration-200 fixed  ">
            <a href="#"
            className=""
            >
                About
            </a>
            <a href="#">
                Contact
            </a>
            <ThemeButton />
        </nav>
    )
}