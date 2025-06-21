import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import "./styles/navbar.css"

const NavBar = () => {
  return (
    <>
    <nav className='bg-gray-950 flex'>
      <Image src="/assets/boscoLogo.png" className='ml-50 p-1' width={110} height={110}></Image>
      
        <Link href="/" className='bLI text-white py-10 ml-50'>Home</Link>
        <Link href="/conference-details" className='bLI text-white py-10 ml-20'>Conference Details</Link>
        <Link href="/about" className='bLI text-white py-10 ml-15'>About</Link>
        <Link href="/committees" className='bLI text-white py-10 ml-15'>Committees</Link>
        <Link href="/resources" className='bLI text-white py-10 ml-15'>Resources</Link>
        <Link href="/contact" className='bLI text-white py-10 ml-15'>Contact us</Link>
    </nav>
    </>
  )
}

export default NavBar