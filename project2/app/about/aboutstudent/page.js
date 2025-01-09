import Link from 'next/link'
import React from 'react'

function AboutStudent() {
  return (
    <>
    <div className='text-center mt-10 text-4xl text-orange-700'>Welcome to About Student Page</div>
    
    <div><Link href="/about">Go back to About Route Page</Link></div>
    </>
  )
}

export default AboutStudent