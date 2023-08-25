import ThemeButton from "./ThemeButton";

export default function Nav(){
    return (
        <nav className="w-full h-14 border-b-1 flex justify-center gap-10 place-items-center transition-all duration-200 fixed">
            <a href="#">
                About
            </a>
            <a href="#">
                Contact
            </a>
            <ThemeButton />
        </nav>
    )
}