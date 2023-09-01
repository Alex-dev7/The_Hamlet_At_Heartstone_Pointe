"use client"
import { useState } from "react"
import Map from "./components/Map"
// import { sendContactForm } from "@/lib/utils"

const initValues = {
  name: "",
  email: "",
  message: "",
}

const initState = {values: initValues}

function Contact() {

const [state, setState] = useState(initState)
 
const {values} = state

const handleChange = ({target}: any) => {

    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name] : target.value,
      }
    }) ) 
}


  const sendEmail = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(values)
    })
      console.log(await response.json())
  }



// const onSubmit = async (e) => {
//   e.preventDefault()
//   console.log(values, "pagesssss")
//   setState((prev) => ({
//     ...prev
//   }))
//   await sendContactForm(values)
// }

  return (
    <div className="min-h-screen w-screen relative flex place-items-center justify-evenly bg-[#314F44] ">
      <h2 className="absolute text-[2rem] text-slate-200 top-[10%]">Contact</h2>
      <div className="w-[50%] h-[90%] outline ">
        <Map/>
      </div>
      <div className="w-[50%] h-[90%] outline ">
        <form  onSubmit={sendEmail} method="POST" encType="application/json"  className="w-[95%] h-fit mx-auto flex flex-col gap-10 outline p-6 my-[50%]">
          <fieldset className="flex flex-col gap-2 text-white font-thin text-sm">
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              value={values.name}
              onChange={handleChange}
              className="w-full py-6 bg-transparent border-b-[1px]   placeholder-white border-white focus:outline-none focus:border-cyan-300 "
            />
          </fieldset>

          <fieldset className="flex flex-col gap-2 text-white font-thin">
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={values.email}
              onChange={handleChange}
              className="w-full py-6 bg-transparent border-b-[1px]  placeholder-white border-white focus:outline-none focus:border-cyan-300"
            />
          </fieldset>

          <fieldset className="flex flex-col gap-2 text-white font-thin">
            <textarea
              name="message"
              rows={4}
              placeholder="Type your message here..."
              required
              value={values.message}
              onChange={handleChange}
              className="w-full py-6 bg-transparent border-b-[1px]  placeholder-white border-white focus:outline-none focus:border-cyan-300"
            />
          </fieldset>
          <button
         
            type="submit"
            disabled={!values.name || !values.email || !values.message}
          
           
            className="bg-neutral-200 sm:w-full lg:w-fit px-12 py-3 font-extralight text-sm place-self-end hover:bg-white"
          >
            SUBMIT
          </button>
        </form>
      </div>
      
    </div>
  );
}

export default Contact