import React from 'react'
import logo from '../assets/logo.png'
import searchIcon from '../assets/search.svg'
import { Link } from 'react-router-dom'
import { scrollFromTo } from '../data/data'
import menu from '../assets/menu.svg'
const Header = ({ setModal, setSearch, search }) => {
  return (
    <header className='bg-headerColor/20 backdrop-blur-md py-5'>
      <div className="containerb">
        <div className="w-full h-full flex items-center justify-between mb-5">
          <Link to='/'><img src={logo} className='w-28 h-12' alt="header logo" />
          </Link>
          <nav className='w-1/3 max-lg:w-1/2 max-sm:hidden '>
            <ul className='flex items-center justify-between max-sm:flex-col h-full'>
              <li>
                <Link to='/' className='text-md myFont font- tracking-widest'>home</Link>
              </li>
              <li onClick={() => scrollFromTo(1500)}>
                <Link to='/' className='cursor-pointer text-md myFont font- tracking-widest'>about</Link>
              </li>
              <li>
                <Link to='/creations' className='text-md myFont font- tracking-widest'>creations</Link>
              </li>
              <li>
                <Link to='/contact' className='text-md myFont font- tracking-widest'>contact</Link>
              </li>
            </ul>
          </nav>
          <label htmlFor="" className='flex bg-middleGray px-5 rounded-xl w-1/4 max-lg:w-full max-md:w-full max-md:rounded-sm max-sm:hidden'>
            <img src={searchIcon} alt="search icon" />
            <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='Search Art Work' className='bg-transparent placeholder:text-smallGray px-5 py-3 myFont w-full' />
          </label>
          <button onClick={() => setModal(true)} className='hidden max-sm:block'>
            <img src={menu} className='w-10' alt="menu img" />
          </button>
          <Link to='/' onClick={() => scrollFromTo(5300)} className='px-7 max-md:hidden py-4 rounded-2xl bg-darkenColoe text-white inline-block myFont font-semibold'>Connect Painter</Link>
        </div>

        <label htmlFor="" className='max-md:flex bg-middleGray px-5 rounded-xl w-1/4 hidden max-lg:w-full max-md:w-full max-md:rounded-sm'>
          <img src={searchIcon} alt="search icon" />
          <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='Search Art Work' className='bg-transparent placeholder:text-smallGray px-5 py-3 myFont w-full' />
        </label>

      </div>
    </header>
  )
}

export default Header