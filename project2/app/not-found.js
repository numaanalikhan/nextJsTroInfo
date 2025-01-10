"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

function NotFound() {

    var router = useRouter()

  return (
    <div className='text-center text-4xl font-bold mt-20' onClick={()=>{router.push("/")}}>
        This Page is not Avialable click here to go to home page</div>
  )
}

export default NotFound