import Link from 'next/link'
import React from 'react'

function Home() {
  return (
    <div>
      Welcome Every One. <br/>
      <Link href='/recipie-list'>Explore Recipies.</Link>
    </div>
  )
}

export default Home