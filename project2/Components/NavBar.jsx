import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <div className='flex justify-between mt-10 px-5 text-2xl '>
    <div className='text-2xl'>Deccan College</div>
    <div className='flex justify-around gap-2 text-2xl'>
        <Link href="/">
            <p>Home</p>
        </Link>
        <Link href="/about">
            <p>About</p>
        </Link>
        <Link href="/login">
            <p>Login</p>
        </Link>
    </div>
    </div>
  )
}

export default NavBar