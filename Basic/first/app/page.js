"use client"
import React from 'react'
import { useState,useEffect } from 'react'
const page = () => {
  const [count, setcount] = useState(0)
  return (
    <div>
      <h1 className='text-red-700'>
        The count is {count}
      </h1>
      <button onClick={()=>{setcount(count+1)}}>Click</button>
    </div>
  )
}

export default page