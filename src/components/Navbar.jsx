import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full h-[100px] bg-[#121619] flex flex-row items-center'>
        <div className='flex-[50%] h-full flex items-center pl-40'>
            <img className='w-36' src={logo} alt='tech store'></img>
        </div>
        <div className='flex-[50%] h-full flex items-center justify-center gap-8'>
            <Link className='text-gray-100 text-lg' to="/">Home</Link>
            <Link className='text-gray-100 text-lg' to="/store">Store</Link>
            <Link className='text-gray-100 text-lg' to="/about">About</Link>
            <Link className='text-gray-100 text-lg' to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Navbar