import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { scrollFromTo } from '../data/data'
import instaLogo from '../assets/instalog.png'
import telegramLogo from '../assets/telegram.webp'
import facebook from '../assets/facebook-icon.webp'
const Footer = () => {
  return (
    <div className="py-5 bg-headerColor">
      <div className='containerb flex items-center justify-between max-md:flex-col max-md:gap-5'>
        <Link to='/'>
          <img src={logo} className='w-28 h-12' alt="header logo" />
        </Link>
        <span className='myFont w-36 inline-block max-md:w-4/5 max-md:text-center'>© 2024 EATLY All Rights Reserved.</span>
        <nav className='w-1/3'>
          <ul className='flex items-center justify-between max-md:flex-wrap max-md:justify-center max-md:gap-2 gap-2'>
            <li>
              <Link onClick={() => scrollFromTo(0)} to='/' className='text-md myFont font- tracking-widest'>home</Link>
            </li>
            <li>
              <Link to="/" onClick={() => scrollFromTo(1500)} className='cursor-pointer text-md myFont font- tracking-widest'>about</Link>
            </li>
            <li>
              <Link onClick={() => scrollFromTo(0)} to='/creations' className='text-md myFont font- tracking-widest'>creations</Link>
            </li>
            <li>
              <Link onClick={() => scrollFromTo(0)} to='/contact' className='text-md myFont font- tracking-widest'>contact</Link>
            </li>
          </ul>
        </nav>

        <div className="w-1/12 h-5 flex items-center justify-between max-md:w-1/2">

          <a className='h-full inline-block' target='_blank' href="https://www.instagram.com/xusan_art_?utm_source=qr&igsh=YjlpbHkxN3plMm5k">
            <img alt="instaLogo img" src={instaLogo} className='h-full contrast-0 transition-all hover:contrast-200' />
          </a>

          <a className='h-full inline-block' target='_blank' href="https://www.facebook.com/profile.php?id=100077729833036&mibextid=ZbWKwL">
            <img alt="telegramLogo img" src={telegramLogo} className='h-full contrast-0 transition-all hover:contrast-200' />
          </a>
          <a className='h-full inline-block' target='_blank' href="https://t.me/Yui_uzb">
            <img alt="facebook img" src={facebook} className='h-5 contrast-0 transition-all hover:contrast-200' />
          </a>
        </div>

      </div>
    </div>
  )
}

export default Footer