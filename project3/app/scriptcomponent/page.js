import Script from 'next/script'
import React from 'react'

function ScriptComponent() {
  return (
    <div>
        <h1 className='main'>Script Component</h1>
        <Script
        src='location.js'
        />
    </div>
  )
}

export default ScriptComponent