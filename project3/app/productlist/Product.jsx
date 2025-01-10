"use client"
import React from 'react'

function Product({price}) {
    console.log(price);
    
  return (
    <div>
        <button onClick={()=>alert(price)}>
            Check Price
        </button>
    </div>
  )
}

export default Product