"use client"
import React from 'react'
import { useState } from 'react'
function Home() {
  const [bg,setBG] = useState(false)
  return (
    <div style={bg ?{backgroundColor:"purple"}:{backgroundColor:"white"}}>
      <h2 style={{backgroundColor:'yellow',fontSize:'100',color:"red"}}>Home</h2>
              <h1>This is a User Page Route... and all h1 will be pink and bold in color</h1>
             {bg ? <h1>True </h1>:""}
             <button onClick={()=>{setBG((prev)=>!prev)}}>Update CSS</button>

    </div>

  )
}


export default Home