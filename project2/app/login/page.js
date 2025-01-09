"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
function Login() {
  const router = useRouter()
  function navigate (route){
    router.push(route)
  }
  return (
    <>
    <div className='text-center text-4xl mt-10'>Welcome to the login page</div>
    <div className='text-center text-2xl'>
      <button onClick={()=>{navigate("/")}}>Go to Home Route</button>
      <br/>
      <button onClick={()=>{navigate("/about")}}>Go to About Route</button>
      <br/>

      <Link href="/login/loginstudent" className='text-center mt-12 text-3xl'>Welcome to Student Login Page</Link>
      <br/>
      <Link href="/login/loginteacher" className='text-center mt-12 text-3xl'>Welcome to Teacher Login Page</Link>


    </div>
    </>
  )
}

export default Login