import React, { useState } from 'react'
import { SiLeetcode } from "react-icons/si";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const SocialLinks = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        {
            id:1,
            child:(
                <>
        Linkedin <FaLinkedin size={30} />
          </> 
            ),
            href:"https://linkedin.com",
            style: { backgroundColor: "#0a66c2", borderRadius:"0 5px 0 0"}
        },
        {
            id:2,
            child:(
                <>
                    Github <FaGithub size={30}/>
                </> 
            ),
            href:"https://github.com/kharedevansh11",
            style: { backgroundColor: "#010409" }
        },
        {
            id:3,
            child:(
                <>
                    Leetcode <SiLeetcode size={30}/>
                </> 
            ),
            href:"https://leetcode.com/devansh2788",
            style: { backgroundColor: "rgb(40 40 40" }
        },
        {
            id:4,
            child:(
                <>
                    Mail <HiOutlineMail size={30}/>
                </> 
            ),
            href:"mailto:devanshkhare11072004@gmail.com",
            style: { backgroundColor: "rgb(198, 211, 230)" }
        },
        {
            id:5,
            child:(
                <>
                    Resume<BsFillPersonLinesFill size={30}/>
                </> 
            ),
            href:"/Devansh Khare Resume Latest.pdf",
            download:"devansh_khare_resume.pdf",
            style: { backgroundColor: "rgb(219 39 119 " , borderRadius:"0 0 5px 0" }
        }
    ];

    return (
        <>
            {/* Desktop View */}
            <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
                <ul>
                    {links.map(({id, child, href, download, style}) => (
                        <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300"} style={style}>
                            <a href={href} 
                                className='flex justify-between items-center w-full text-white'
                                download={download}
                                target='_blank'
                                rel="noreferrer"
                            >
                                {child}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile View */}
            <div className="lg:hidden fixed top-4 right-4 z-50">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                    {isOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
                </button>
            </div>

            {isOpen && (
                <div className="lg:hidden fixed top-0 right-0 w-64 h-screen bg-[#050e1d] z-40 pt-16">
                    <ul className="flex flex-col">
                        {links.map(({id, child, href, download, style}) => (
                            <li key={id} className="px-4 py-3 hover:bg-gray-800">
                                <a href={href} 
                                    className='flex items-center text-white'
                                    download={download}
                                    target='_blank'
                                    rel="noreferrer"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {child}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default SocialLinks;
