import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import Fade from 'react-reveal/Fade';
import logo from '../assets/TKJ.png'
import './style.css'

const Navbar = () => {
    const [mobileNav, setMobileNav] = useState(false)
    const menu = [
        { id: 1, text: 'Home', to: '#head' },
        { id: 2, text: 'About', to: '#about' },
        { id: 3, text: 'Service', to: '#service' },
        // { id: 4, text: 'Achievement', to: '/achievement' },
    ]

    //handle click 
    const handleClick = () => {
        setMobileNav(!mobileNav)
    }
    return (
        <header >
            {/* desktop nav  */}
            <nav className="flex items-center px-12 bg-white border-b border-gray-300 py-3  ">
                {/* brand  */}
                <div className="flex items-center space-x-2 flex-grow" >
                    
                    <img    src={logo} alt="logo" className="w-12 h-12" />
                    <button href="/">
                    <h1 className="text-xl font-bold text-blue-600 select-none " >TJKT 2023</h1>
                    </button>
                </div>
                {/* menu s */}

                <div className="hidden md:flex lg:flex space-x-3">
                    <ul className="flex items-center space-x-4 ">
                        {menu.map(item => (
                            <li key={item.id}>
                                <a href={item.to} className="text-blue-600 text-lg font-semibold relative inline-block hover:text-black hover:after:underline-animation ">{item.text}</a>
                            </li>
                        ))}
                    </ul>

                </div>

                {/* menu icon  */}
                <div className="block md:hidden lg:hidden ">
                    <HiMenuAlt3 className="w-10 h-10 ring-blue-300 text-gray-700 border border-gray-400 focus:ring-4 cursor-pointer rounded-lg p-2 transform transition duration-200 hover:scale-110" onClick={handleClick} />
                </div>
            </nav>

            {/* mobile nav  */}
            {mobileNav && (
                <Fade >
                    <nav className="bg-white shadow-lg mx-6 mt-2 mb-2  rounded-lg border border-gray-300 py-4 block md:hidden lg:hidden  ">
                        <ul>
                            {menu.map(item => (
                                <a key={item.id} href={item.to} className="text-gray-600 text-lg hover:text-[#095FB4]">
                                    <li className="py-2 px-3 w-full hover:bg-gray-200 transition duration-300 cursor-default">
                                        {item.text}
                                    </li>
                                </a>
                            ))}
                        </ul>

                        
                    </nav>
                </Fade>
            )}
        </header>
    )
}

export default Navbar