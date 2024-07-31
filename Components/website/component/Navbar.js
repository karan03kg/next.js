import React from 'react'
import './Navbar.css'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>Facebook</div>
      <ul>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
      </ul>
    </nav>
  )
}

export default Navbar