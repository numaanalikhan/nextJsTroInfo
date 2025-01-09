"use client"
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react'
function  StudentDetails({params}) {
    var id = React.use(params)

    var [details,setDetails] = useState({})
        useEffect(()=>{
            axios.get(`https://jsonplaceholder.typicode.com/users/${id.studentdetail}`)
        .then((res)=>{
            console.log(res.data);
            
            setDetails(res.data)})
        },[])
    return (

    <>
    <div className='text-black text-2xl'> <Link href="/student">StudentDetails</Link></div>
    <p  className='text-black text-4xl font-bold'>{details?.name}</p>
    <p  className='text-black text-4xl'>{details?.email}</p>
    
    </>
  )
}

export default  StudentDetails