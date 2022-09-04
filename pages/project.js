import React from 'react'
import Link from 'next/link'

const project = () => {
  return (
    <div>project
       <Link href='/project'>
            Project
        </Link>
        <Link href='/contact'>
            Contact Me
        </Link>
        <Link href='/about'>
            About Me
        </Link>
        <Link href='/'>
            Home
        </Link>
    </div>
  )
}

export default project