import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import { useState } from "react";
import logo from '../Assets/Logo.png';

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            links: 'HOME',
            href: '#home'
        },
        {
            id: 2,
            links: 'ABOUT',
            href: '#about'
        },
        {
            id: 3,
            links: 'PORTFOLIO',
            href: '#portfolio'
        },
        {
            id: 4,
            links: 'EXPERIENCE',
            href: '#experience'
        },
        // {
        //     id: 5,
        //     links: 'contact'
        // },
    ]

    return (
        <div className="flex justify-between items-center w-full h-10 sm:h-20 px-4 py-4 dark-back fixed z-10"> 
            <div className="flex cursor-default">
                <img src={logo} alt="my logo" className="w-4 h-4 sm:h-6 sm:w-6 sm:ml-24 mt-1"/>
                <h1 className="text-base font-bold sm:text-lg font-main ml-4 text-teal-400">RUKI7H</h1>
                <h2 className="ml-1 mt-1 text-xs font-logo text-teal-400">TM</h2>
            </div>

            <ul className="hidden md:flex mr-24">

            {links.map(({ id, links, href}) =>(
            <a href={href}><li key={id} className="px-4 cursor-pointer capitalize font-light font-hero text-base font-color1 hover:-rotate-3 hover:scale-110 hover:text-teal-400 duration-200">{links}</li></a>  ))}

            </ul> 

        <div onClick={() => setNav(!nav)} className="cursor-pointer z-10 font-color1 md:hidden mt-1">
            {nav ? <FaTimes size={25} /> : <FaBars size={25}/>}
        </div>
                {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen dark-back">
                {links.map(({ id, links, href}) =>(
                    <a onClick={() => setNav(!nav)} href={href}><li key={id} className="px-4 cursor-pointer capitalize py-6 text-3xl text-white font-hero font-color1 hover:text-teal-400 hover:-rotate-6 hover:scale-110 duration-300">{links}</li></a>  ))}
                </ul>
                )}
        </div>
    )
}

export default NavBar
