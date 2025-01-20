import Link from 'next/link'
import React from 'react'

function CustumNavbar() {
  return (
    <div className='bg-blue-600 h-16 px-6 py-4 flex justify-between items-center shadow-xl'>

        <div className='font-bold text-2xl'><Link href="/">Work Manager</Link>
        </div>
        <div>
            <ul className='flex justify-center items-center space-x-5 font-bold'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/add-task"><li>Add Task</li></Link>
                <Link href="/show-tasks"><li>Show Tasks</li></Link>
            </ul>
        </div>
        <div>
            <ul className='flex justify-center items-center space-x-5 font-bold'>
            <Link href="/login"><li>Login</li></Link>
            <Link href="/signup"><li>Sign Up</li></Link>
            </ul>
        </div>

    </div>
  )
}

export default CustumNavbar