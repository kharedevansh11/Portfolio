import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
const NavBar = () => {
    const [nav,setNav] = useState(false);
    const links=[
        {
            id:1,
            link:"Home"
        },
        {
            id:2,
            link:"About"
        },
        {
            id:3,
            link:"Portfolio"
        },
        {
            id:4,
            link:"Achievement"
        },
        {
            id:5,
            link:"Contact"
        },
    ];
    return (
        <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#050e1d] fixed">

            <div>
                <h1 className='text-5xl font-signature ml-2 text-pink-600'>DK</h1>
            </div>
            <ul className="hidden md:flex">
                {links.map(({id,link}) =>(
                <li
                 key={id}
                  className='px-4 cursor-pointer capitalize font-medium text-gray-400 hover:scale-110 duration-200'>
                {link}
                </li>
                ))}

            </ul>

            <div onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-400 md:hidden'>
            {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>

            {nav &&  <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#050e1d] to-gray-800 text-gray-500">
            {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
                {link}
            </li>
          ))}
            </ul>}
           
        </div>
    )
}

export default NavBar
