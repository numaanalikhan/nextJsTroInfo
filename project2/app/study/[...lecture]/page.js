import React from 'react'

async function Lecture({params}) {
    let resolved = await params
    console.log(resolved.lecture)
  return (
    <>
    <div className='text-center text-4xl font-bold mt-20'> {resolved?.lecture[0]}</div>
    <div className='text-center text-4xl font-bold mt-20'> {resolved?.lecture[1]}</div>

    </>
  )
}

export default Lecture 