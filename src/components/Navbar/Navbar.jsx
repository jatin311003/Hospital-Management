import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import sthesco from '../../assets/sthesco.png'
const Navbar = () => {
    const [activeLink,setActiveLink]=useState('/')
  return (
    <nav className='sticky top-0 z-10' >
        <div className='navbar  border-b border-gray-300 flex justify-between items-center p-4 bg-white shadow-md'>
            <div className='flex items-center space-x-2'>
            <img src={sthesco} className='transform transition-transform duration-300 hover:scale-110 w-20 h-16' alt="" />
            <h2 className='text-4xl transform transition-transform duration-300 hover:scale-110 font-bold text-blue-900'>Vital Care</h2>
            </div>

            <div className='mr-2' >
            <ul className='flex space-x-6 text-2xl'>
                        {['/', '/services', '/appointment', '/contact'].map((path) => (
                            <li key={path} className='relative group'>
                                <Link
                                    to={path}
                                    className={` cursor-pointer hover:text-blue-700 ${
                                        activeLink === path ? 'text-blue-700 font-semibold ' : 'text-gray-800'
                                    }`}
                                    onClick={() => setActiveLink(path)} // Set active link on click
                                >
                                    {path === '/' ? 'Home' : path.charAt(1).toUpperCase() + path.slice(2)}
                                </Link>
                                <span className={` absolute left-0 right-0 bottom-0 h-1 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeLink === path ? 'scale-x-100' : ''}`}></span>
                            </li>
                        ))}
                    </ul>
            </div>
            
            
        </div>
    </nav>
  )
}

export default Navbar
