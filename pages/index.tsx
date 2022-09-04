import type { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>home
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

export default Home
