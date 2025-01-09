"use client"
import { useRouter } from 'next/navigation'
import React from 'react'
import { useState } from 'react'
function Page() {
  var router = useRouter()
  const navigate = (route)=>{
    router.push(route)
  }
  var [count,setCount] = useState(0)
  return (
    <>
    {/* <p>{count}</p>
    <button onClick={()=>{setCount(count=count+1)}}>count +</button>
    <div>Wel</div> */}
    <div className='text-center text-4xl mt-10'>Welcome to the Home page</div>
    
    <br/>

    <div className='flex justify-center '>
      <button onClick={()=>navigate("/login")} className='text-center text-green mb-10'>go to Login Page</button>
      <button onClick={()=>navigate("/about")} className='text-center text-green '>go to About Page</button>

    </div>

    </>
  )
}

export default Page



//
// i will create two routes login and about routes
// will use link componnet to go to that route....
// and we will use navigation stae to navigate when we click on a btn...