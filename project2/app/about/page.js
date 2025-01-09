"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link';
// export const metadata = {
//     title:"Contact Route"
// }

function About() {
    let router = useRouter();
  return (
    <>
    <div className='text-center text-4xl mt-10'>Welcome to the About page</div>
    <button onClick={()=>{router.push("/")}}>Go to Home Page</button>
    <br/>
    <button onClick={()=>{router.push("/login")}}>Go to Login Page</button>
    <br/>
    <Link href="/about/aboutstudent">Go to About Student Route Page</Link>
    <br/>
    <Link href="/about/aboutcollege">Go to About College Route Page</Link>

    </>
  )
}

export default About