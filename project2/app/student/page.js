"use client"
import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
function Student() {
  var router = useRouter();
  var [userData,setUserData] = useState([])
useEffect(()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((res)=>{
    console.log(res.data)
    setUserData(res.data)
  })
},[])
  
  return (
  <>
    <div>Student List</div>
   {
    userData.map((item)=>{
      return(
        <p key={item.id} className='font-bold text-4xl'><Link href={`/student/${item.id}`}>{item.name}</Link></p>
      )
    })
   }
    </>
  )
}

export default Student