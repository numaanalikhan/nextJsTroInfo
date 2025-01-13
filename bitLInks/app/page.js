import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Home() {
  return (
    <div className='bg-purple-200'>
      <div className='grid grid-cols-2  '>
        <div className=' flex flex-col items-center justify-center p-10 gap-2'>
          <p className='text-black font-bold text-2xl'>The Best URL Shortner in the Market</p>
          <p className='text-black'>We are the most strightforward url shorten in the world!!! Most of the url shortners will track you or ask you give your details for login. We understand your needs and hence we have created this URL shortner</p>
        </div>
        <div className='relative '>
          <Image
          className='mix-blend-darken'
          src='https://static.vecteezy.com/system/resources/previews/003/339/942/non_2x/office-work-concept-problems-and-solutions-business-illustration-free-vector.jpg'
          // fill={true}
          width={500}
          height={500}
          alt='vector image'
         />
        </div>
        <div className=' flex flex-row justify-center items-center gap-2'>
        <Link href='/shorten'><div className='bg-purple-400 px-4 py-1 rounded-md font-bold'><button >Try Now</button></div></Link>
        <Link href='/github'><div className='bg-purple-400 px-4 py-1 rounded-md font-bold'><button >Github</button></div></Link>
        </div>
      </div> 
    </div>
  )
}

export default Home