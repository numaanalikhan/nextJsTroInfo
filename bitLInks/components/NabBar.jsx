import Link from 'next/link'
import React from 'react'

function NabBar() {
  return (
    <div className='flex items-center justify-between h-16 bg-purple-600 px-4 font-bold'>
        <div className='text-2xl'>
        <Link href='/shorten'>Bitlinks</Link>
        </div>
        <ul className='flex items-center justify-between gap-4'>
            <Link href='/'><li>Home</li></Link>
            <Link href='/about'><li>About</li></Link>
            <Link href='/shorten'><li>Shorten</li></Link>
            <Link href='/contact'><li>Contact Us</li></Link>
            <Link href='/shorten'><li className='bg-purple-400 px-4 py-1 rounded-l' ><button>Try Now</button></li></Link>
            <Link href='/github'><li className='bg-purple-400 px-4 py-1 rounded-l' ><button>Github</button></li></Link>
        </ul>

    </div>
  )
}

export default NabBar