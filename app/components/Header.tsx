import React from 'react'
import Image from 'next/image'
import Logo from './Logo'
import Link from 'next/link'

const Header = () => {
  return (
<nav className='fixed w-full h-24 shadow-xl bg-white'>
  <div className='flex justify-between items-center h-full w-full px-24 '>
    <Link href="/">
    <Logo/>
    </Link>
    <div className='font-semibold'>
      <Link className="px-12 hover:text-slate-600" href="/register">Register</Link>
      <Link className="hover:text-slate-600" href="/login">Login</Link>
    </div>
  </div>

</nav>
  )
}

export default Header


