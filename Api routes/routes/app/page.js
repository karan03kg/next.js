"use client"
import Image from "next/image";
import { POST } from "./api/route";

export default function Home() {
const handleClick = async()=>{
  let data = {
    name:"harry",
    role:"coder"
  }
  let a = await fetch("/api",{
    method:"POST",headers:{
      "content-Type":"application/json",
    },
    body:JSON.stringify(data)
  })
  let res = await a.json();
  console.log(res)
}
  return (
    <div className="mx-10">
      <h1 className="text-xl font-bold">This is a api fetching post request</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
    
  );
}
