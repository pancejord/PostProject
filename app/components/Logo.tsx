import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <Image
    src="/Post.png"
    alt="Logo"
    className="p-2"
    width={300}
    height={300}
    priority
  />
  )
}

export default Logo