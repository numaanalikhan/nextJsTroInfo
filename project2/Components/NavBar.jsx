"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
function NavBar() {
  var pathname = usePathname();
  return (
    <div className='flex justify-between w-full bg-purple-400 border-4 border-black text-4xl p-5'>
    <div>Deccan College</div>
    <div className='flex justify-between gap-2'>

                   <p><Link href="/">Home</Link></p>
                   <p><Link href="/about">About</Link></p>
                   <p><Link href="/login">Login</Link></p>
                   <p><Link href="/student">Student</Link></p>
        
    </div>
    </div>
  )
}

export default NavBar