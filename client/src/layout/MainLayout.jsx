import React, { useState } from 'react'
import Header from '../components/Header'
import { Link, Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import searchIcon from '../assets/search.svg'
import { scrollFromTo } from '../data/data'
import close from '../assets/cross.svg'
const MainLayout = ({ setSearch, search }) => {
  const location = useLocation()
  const [modal, setModal] = useState(false)
  const pages2 = ['', 'creations', 'contact'];

  const finded = pages2.find(f => {
    f.toLowerCase() === location.pathname.toLowerCase()
  })
  return (
    <>
      <div className={`w-full h-full bg-white fixed z-50 containerb hidden max-sm:flex flex-col items-start justify-start gap-5 transition-all ${modal ? "left-0" : "-left-full"}`}>
        <button className='self-end' onClick={() => setModal(false)}>.
          <img src={close} className='w-7' alt="close img" />
        </button>

        <nav className=''>
          <ul className='flex items-start justify-between max-sm:flex-col h-full text-black gap-10'>
            <li>
              <Link to='/' onClick={() => setModal(false)} className='text-black text-md myFont font- tracking-widest'>home</Link>
            </li>
            <li>
              <Link to='/' onClick={() => scrollFromTo(1500) || setModal(false)} className='text-black cursor-pointer text-md myFont font- tracking-widest'>about</Link>
            </li>
            <li>
              <Link to='/creations' onClick={() => setModal(false)} className='text-black text-md myFont font- tracking-widest'>creations</Link>
            </li>
            <li>
              <Link to='/contact' onClick={() => setModal(false)} className='text-black text-md myFont font- tracking-widest'>contact</Link>
            </li>
          </ul>
        </nav>


      </div>
      {!finded && <Header setModal={setModal} setSearch={setSearch} search={search} />}
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default MainLayout