import React from 'react'
import Logo from '../assets/images/logo.svg'

const Header = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full p-20">
        <img src={Logo} alt="logo" className="h-8 w-auto" />
        <button className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600">
        Units
    </button>
    </div>
  )
}

export default Header