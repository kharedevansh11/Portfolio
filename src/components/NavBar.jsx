/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState(1);

  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'experience',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];

  const underlineAnimation = css`
    position: relative;
    &:after {
      content: '';
      display: block;
      width: 0;
      height: 2px;
      background: #D81B60;
      position: absolute;
      bottom: -2px;
      left: 50%;
      transition: width 0.3s ease, left 0.3s ease;
    }
    &:hover:after {
      width: 100%;
      left: 0;
    }
  `;

  const activeUnderline = css`
    &:after { 
      content: '';
      display: block;
      width: 100%;
      height: 2px;
      background: #D81B60;
      position: absolute;
      bottom: -2px;
      left: 0;
      
    }
  `;

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-[#050e1d] fixed z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2 text-pink-600">DK</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium text-gray-400 ${
              activeLink === id ? 'border-b-1 border-pink-600 ' : ''
            }`}
            css={[underlineAnimation, activeLink === id && activeUnderline]}
          >
            <Link
              to={link}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="active"
              onClick={() => setActiveLink(id)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
        {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#050e1d] to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                to={link}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => {
                  setNav(false);
                  setActiveLink(id);
                }}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
