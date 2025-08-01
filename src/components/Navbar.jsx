import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../../styles'
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [isTransparent, setIsTransparent] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const contact = document.getElementById('contact');
      if (!contact) return;

      const rect = contact.getBoundingClientRect();
      const visibleThreshold = 900;

      if (
        rect.top <= window.innerHeight - visibleThreshold && 
        rect.bottom >= visibleThreshold
      ) {setIsTransparent(true)}
      else {
        setIsTransparent(false)
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <nav className={`${styles.paddingX}  w-full flex items-center py-5 fixed top-0 z-20 transition-colors duration-300  
    ${isTransparent ? 'bg-transparent' : 'bg-primary'}`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/"
        className='flex items-center gap-2'
        onClick={() =>{setActive("")
        window.scrollTo(0, 0);
        }}>
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className={`${styles.logoText} text-white text-[18px] font-bold cursor-pointer`}>Kenath Liyanage</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary text-[18px]"} font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title)
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>))}
        </ul>
        <div className="sm:hidden flex flex-1 justify-end items-center">
              <img
              src={toggle ? close : menu} 
              alt="menu"
              className='w-[28px] h-[28px]
              object-contain cursor-pointer'
              onClick={() => setToggle(!toggle)}/>
        
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex justify-end items-start flex-1 justify-end items-start flex-col gap-4'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-white" : "text-secondary"} text-[16px] font-poppins font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title)
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>))}
        </ul>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar