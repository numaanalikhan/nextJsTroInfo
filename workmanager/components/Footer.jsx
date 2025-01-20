import React from 'react'

function Footer() {
  return (
    <div className='bg-blue-600 h-60  w-full px-4 flex justify-between items-center mt-2'>
        <div className='w-3/4'>
            <h1 className='font-bold text-xl'>Welcome to Work Manager</h1>
            <p className='text-justify'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque voluptas voluptatibus nulla voluptatem quaerat molestias, libero placeat velit dignissimos consequatur ab illum ratione nihil ex aspernatur exercitationem ipsam dolore? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores reprehenderit aliquam ut consectetur eaque quidem animi ad quaerat. Velit corporis quam saepe quasi quia illum voluptatem earum cumque sequi fugit.
            </p>
        </div>
        <div className='w-1/4 text-center'>
            <h1 className='font-bold text-xl'>Contact Us!</h1>
            <ul className=''>
                <li>Reddit</li>
                <li>Instagram</li>
                <li>Youtube</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
