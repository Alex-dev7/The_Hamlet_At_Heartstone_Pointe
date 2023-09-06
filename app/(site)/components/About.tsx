import Image from "next/image"


function About() {
  return (
    <div
    className="min-h-screen h-screen flex place-items-center "
    id="about"
    >
        <div className="w-[100%] h-[600px]  flex flex-col gap-10 py-10 text-center relative">
            {/* <Image src='/im.jpg' alt='landscape image' width={600} height={500} className="w-[70%] h-[100%] mx-auto object-cover" /> */}
            <div className="absolute top-[25%] left-[50%] -translate-x-[50%] w-fit flex gap-5 flex-col mx-auto place-items-center border-[1px] border-black rounded-xl px-10 py-5 ">
                <h2>
                    ABOUT US
                </h2>
                
                <p className="w-[600px] mx-auto ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>                
            </div>

        </div>
    
    </div>
  )
}

export default About