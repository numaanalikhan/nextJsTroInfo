import Link from 'next/link'
import React from 'react'

function LoginStudent
() {
  return (
    <>
    <div className='text-center text-4xl text-amber-50'>Welcome to Login Student Page</div>

    <Link href="/login" className='text-center text-4xl'>Go back to Login Page Route</Link>
    </>
  )
}

export default LoginStudent
