import React from 'react'
import myself from "../assets/heroImage.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b from-[#050e1d] via-[#050e1d] to-gray-800 pt-20 md:pt-0" >

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

                <div className="flex flex-col justify-center h-full">
                    <p className=' text-pink-600'>Hi, my name is</p>
                    <h1 className='text-4xl sm:text-7xl font-bold text-white'>Devansh Khare</h1>

                    <h2 className="text-3xl sm:text-6xl font-bold text-[#8892b0]">I'm a Software developer</h2>

                    <p className="text-gray-500 py-4 max-w-md">
                        Passionate software developer with a strong hold on Data Structures and Algorithms and solid command over core computer fundamentals. I enjoy solving challenging problems and writing clean, efficient code. I’m a quick learner who loves exploring new concepts and applying them to build smart and reliable solutions.
                    </p>
                    <div>
                        <Link
                            to="portfolio"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                        >
                            View work
                            <span className='group-hover:rotate-90 duration-300 pl-2'>
                                <FaArrowRightLong size={18} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={myself} alt="my profile" className='' />
                </div>
            </div>
        </div>
    )
}

export default Home
