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
 
const {values, isLoading} = state

const handleChange = ({target}) => setState((prev) => ({
  ...prev,
  values: {
    ...prev.values,
    [target.name] : target.value,
  }
}) ) 

const onSubmit = async (e) => {
  e.preventDefault()
  console.log(e)
  setState((prev) => ({
    ...prev,
    isLoading: true
  }))
}

  return (
    <div className="h-screen w-screen flex place-items-center justify-evenly bg-[#314F44] ">
      <div className="w-[50%] h-[90%] outline ">
        <p>hi</p>
      </div>
      <div className="w-[50%] h-[90%] outline ">
        <form className="w-[600px] h-fit mx-auto flex flex-col gap-10 outline p-6 my-[50%]">
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
          <input
            type="submit"
            disabled={!values.name || !values.email || !values.message}
            // isLoading={isLoading}
            onClick={onSubmit}
            className="bg-neutral-200 w-fit px-12 py-3 font-extralight text-sm place-self-end hover:bg-white"
          />
            {/* SUBMIT
          </input> */}
        </form>
      </div>
      py-6
    </div>
  );
}

export default Contact