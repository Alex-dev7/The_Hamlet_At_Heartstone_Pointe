"use client"
import { useState } from "react"

const initValues = {
  name: "",
  email: "",
  message: "",
}

const initState = {values: initValues}

function Contact() {
const [state, setState] = useState(initState)
 
const {values} = state

const handleChange = ({target}) => setState((prev) => ({
  ...prev,
  values: {
    ...prev.values,
    [target.name] : target.value,
  }
}) ) 

  return (
    <div className="h-screen w-screen flex place-items-center justify-evenly bg-[#314F44] ">
        <div className="w-[50%] h-[90%] outline ">
            <p>
                hi
            </p>
        </div>
        <div className="w-[50%] h-[90%] outline " >
          <form 
          className="w-[600px] h-fit mx-auto flex flex-col gap-10 outline p-6 my-[50%]"> 
            <fieldset className="flex flex-col gap-2 text-white font-thin">
              {/* <label>Name</label> */}
              <input type="text" name="name" placeholder="Name"  required value={values.name} onChange={handleChange}
              className="w-full py-6 bg-transparent border-b-[1px] border-white focus:outline-none focus:border-cyan-300"/>
            </fieldset>
            <fieldset className="flex flex-col gap-2 text-white font-thin">
              {/* <label>Email</label> */}
              <input type="email" name="email" placeholder="Email" required value={values.email} onChange={handleChange}
              className="w-full py-6 bg-transparent border-b-[1px] border-white focus:outline-none focus:border-cyan-300"/>
            </fieldset>
            <fieldset className="flex flex-col gap-2 text-white font-thin">
              {/* <label>Email</label> */}
              <textarea  name="message" rows={4} placeholder="Type your message here..." required value={values.message} onChange={handleChange}
              className="w-full py-6 bg-transparent border-b-[1px] border-white focus:outline-none focus:border-cyan-300"/>
            </fieldset>

          </form>
        </div>
     py-6
    </div>
  )
}

export default Contact