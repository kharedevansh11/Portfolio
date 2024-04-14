import React from 'react'
import { SiLeetcode } from "react-icons/si";
import { FaGithub,FaLinkedin } from 'react-icons/fa6';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
const SocialLinks = () => {
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
            href:"https://leetcode.com/devansh1677",
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
            style: { backgroundColor: "	rgb(198, 211, 230)" }

        },
        {
            id:5,
            child:(
                <>
        Resume<BsFillPersonLinesFill size={30}/>
          </> 
            ),
            href:"/devansh_khare.pdf",
            download:true,
            style: { backgroundColor: "rgb(219 39 119 " , borderRadius:"0 0 5px 0" }

        }
    ]
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id,child,href,download,style})=>(
             <li key={id} className= {"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300"} style={style}>
             <a href={href} 
             className='flex justify-between items-center w-full text-white'
             download={download}
             target='_blank'
             rel="noreferrer"
             > <>
            {child}
          </> </a></li>
        ))}
      </ul>
    </div>
  )
}

export default SocialLinks
