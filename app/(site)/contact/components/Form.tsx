"use client"
import { useState } from "react"

const initValues = {
    name: "",
    email: "",
    message: "",
  }
  const initState = {values: initValues}


function Form() {

    const [state, setState] = useState(initState);
    const [popup, setPopup] = useState(false);
    const { values } = state;

    const handleChange = ({ target }: any) => {
      setState((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          [target.name]: target.value,
        },
      }));
    };

    const sendEmail = async (e: any) => {
      e.preventDefault();

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }
      // console.log(await response.json())
      setState(() => ({
        values: {
          name: "",
          email: "",
          message: "",
        },
      }));
    };



  return (
    <form  onSubmit={sendEmail} method="POST" encType="application/json"  className="w-[95%] h-fit mx-auto flex flex-col gap-10 p-6 my-[50%]">
    <fieldset className="flex flex-col gap-2 text-white font-thin text-sm">
      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={values.name}
        onChange={handleChange}
        className="w-full py-6 bg-transparent border-b-[1px]   placeholder-white border-white focus:outline-none focus:border-rose-700 "
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
        className="w-full py-6 bg-transparent border-b-[1px]  placeholder-white border-white focus:outline-none focus:border-rose-700"
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
        className="w-full py-6 bg-transparent border-b-[1px]  placeholder-white border-white focus:outline-none focus:border-rose-700"
      />
    </fieldset>
    <button
   
      type="submit"
      disabled={!values.name || !values.email || !values.message}
    
     
      className="bg-neutral-200 dark:text-black sm:w-full lg:w-fit px-12 py-3 font-extralight text-sm place-self-end hover:bg-white"
    >
      SUBMIT
    </button>
  </form>
  )
}

export default Form