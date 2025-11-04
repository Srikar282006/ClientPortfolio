import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from './ThemeContext'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { dark, toggleTheme } = useTheme()

  const navbarBg = dark ? 'bg-black' : 'bg-white'
  const navbarText = dark ? 'text-white' : 'text-black'
  const sidebarBg = dark ? 'bg-black' : 'bg-white'
  const sidebarText = dark ? 'text-white' : 'text-black'

  return (
    <>
      <div className={`navbar shadow-sm fixed top-0 left-0 right-0 z-50 ${navbarBg}`}>
        <div className="navbar-start">
          <button onClick={() => setIsOpen(true)} className={`btn btn-ghost lg:hidden ${navbarText}`}>
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 ${dark ? 'hover:text-black' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <Link to="/" className={`text-xl ${navbarText}`}>Srikar</Link>
        </div>

        {/* desktop menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className={`menu menu-horizontal px-1 ${navbarText}`}>
            {[
              { name: 'Home', to: '/' },
              { name: 'About', to: '/about' },
              { name: 'Experience', to: '/experience' },
              { name: 'Projects', to: '/projects' },
              { name: 'Contact', to: '/contact' },
            ].map((item) => (
              <li key={item.name} className={`${dark ? 'hover:bg-gray-800' : ''}`}>
                <Link to={item.to}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* theme toggle */}
        <div className="navbar-end">
          <button
            onClick={toggleTheme}
            className={`btn btn-ghost ${navbarText} ${
              dark ? 'hover:text-black' : 'hover:text-yellow-500'
            }`}
          >
            {dark ? (
              <svg className="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M21.64,13a1,1,0,0,0-1.05-.14A8.05,8.05,0,0,1,9.08,5.49,8.59,8.59,0,0,1,9.33,3.5a1,1,0,0,0-1.08-1.14A10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
              </svg>
            ) : (
              <svg className="h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 6.5A5.5 5.5 0 1 0 17.5 12 5.51 5.51 0 0 0 12 6.5Z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 shadow-lg transform transition-transform duration-300 z-50 ${sidebarBg} ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className={`flex justify-between items-center p-4 border-b ${sidebarText}`}>
          <h2 className={`text-lg font-bold ${sidebarText}`}>Srikar Acharya</h2>
          <button onClick={() => setIsOpen(false)} className={sidebarText}>✕</button>
        </div>
        <ul className={`p-4 space-y-2 ${sidebarText}`}>
          {[
            { name: 'Home', to: '/' },
            { name: 'About', to: '/about' },
            { name: 'Experience', to: '/experience' },
            { name: 'Projects', to: '/projects' },
            { name: 'Contact', to: '/contact' },
          ].map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                onClick={() => setIsOpen(false)}
                className={`block w-full px-4 py-2 rounded-none ${
                  dark ? 'hover:bg-gray-800 hover:text-white' : 'hover:bg-gray-200 hover:text-black'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navbar
