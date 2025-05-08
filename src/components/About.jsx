import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pt-20 pb-20'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
        <div className=' pb-8'>
          <p className=' text-4xl font-bold inline border-b-4 border-gray-400'>About</p>
        </div >
        <p className='text-xl mt-10'>Hi, I’m Devansh Khare — a passionate and driven software developer currently pursuing my B.Tech  at JIIT Noida. With a strong foundation in Data Structures and Algorithms (Leetcode Rating-1662, Codechef - 3 ⭐️) and hands-on experience in frontend development, I love building scalable, efficient, and user-focused applications.

          I recently interned at Gence Studio, where I led the complete UI revamp of their platform from AngularJS to React and Tailwind, set up their CI/CD pipeline for streamlined deployments, and integrated Firebase Authentication and Uppy for robust file handling. I thrive in fast-paced environments and enjoy collaborating across teams to ship impactful products.
        </p>

        <br />

        <p className='text-xl'>Beyond development, I’ve contributed to open-source projects, earned top 30 recognition in Smart India Hackathon 2024, and was recognized at SWOC 2024 for innovation and excellence.

          I'm always looking to learn, improve, and take on challenges that push my limits. Whether it’s optimizing a backend system or crafting sleek front-end interfaces — I bring accountability, curiosity, and a builder’s mindset to every project I take on.</p>

      </div>

    </div>
  )
}

export default About
