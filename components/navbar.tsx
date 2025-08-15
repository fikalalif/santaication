import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full bg-white shadow-sm z-20'>
        <div className='max-w-screen-xl mx-auto flex flex-wrap items-center  justify-between p-4'>
            <Link href="/">
                <Image src="/santaication_logo.png" alt="logo" width={128} height={49} priority/>
            </Link>
        </div>
    </div>
  )
}

export default Navbar