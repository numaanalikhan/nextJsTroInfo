import React from 'react'
import Link from 'next/link'
function Navbar() {
  return (
    <div className='flex justify-between p-5 font-bold text-2xl bg-purple-500'>
        <div>Facebook</div>
        <div className='flex justify-around  gap-5'>
            <Link href="/">
              <li className='list-none'>Home</li>
            </Link>
            
            <Link href="/about">
              <li className='list-none'>About</li>
            </Link>

            <Link href="/contact">
              <li className='list-none'>Contact</li>
            </Link>
        </div>
    </div>
  )
}

export default Navbar