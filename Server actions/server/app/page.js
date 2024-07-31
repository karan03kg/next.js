"use client"
import { submitAction } from "@/actions/form";
import { useRef } from "react";
export default function Home() {
  const ref = useRef()
  return (
    <div className="m-10">
      <form ref={ref} action={(e)=>{submitAction(e);ref.current.reset()}}>
        <div>
          <label htmlFor="name">Name:</label>
          <input name="name" id="name" type="text" className="text-black mx-5" />
        </div>

        <div className="my-3">
          <label htmlFor="add">Address:</label>
          <input name="add" id="add" type="text" className="text-black mx-5"/>
        </div>

        <div>
          <button className="bg-red-600 p-3 rounded-xl mx-20 my-5">Submit</button>
        </div>
        
      </form>
    </div>
  );
}
