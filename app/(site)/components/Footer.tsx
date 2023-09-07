import { usePathname } from "next/navigation"

function Footer() {
  const pathname = usePathname()

  return (
    <footer
    className={`w-full h-[15vh] ${pathname === "/contact" ? "bg-[#314F44] " : "bg-[#314f4400]"}  flex justify-between px-[3rem] py-2 `}
    >
      <div>
        <h3>LOGO</h3>
      </div>
      <div>

      </div>
      <div className="flex flex-col gap-1 justify-end items-end ">
        <a href="#">
          social media link
        </a>
        <a href="#">
          email link
        </a>
        <p>© 2023 The Hamlet at Hearthstone Pointe | <a href="#">privacy policy</a></p>
      </div>  

    </footer>
  )
}

export default Footer