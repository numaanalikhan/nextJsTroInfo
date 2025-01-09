import Link from 'next/link'
import React from 'react'

function LoginTeacher() {
  return (
    <>
    <div className='text-center text-4xl mb-20 text-purple-600'>Welcome to Login Teacher Nested Route Page</div>
    <Link href='/login' className='text-4xl text-center mt-5'>Go back to Login Route Page</Link>
    </>
  )
}

export default LoginTeacher