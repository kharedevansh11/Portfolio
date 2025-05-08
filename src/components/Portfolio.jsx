import React from 'react'
import cineStream from "../assests/portfolio/cineStream.png";
import urlShortner from "../assests/portfolio/urlShortner.png";
import leetcodePage from "../assests/portfolio/leetcodePage.png"
import codeChefPage from "../assests/portfolio/codeChefPage.png"
import newsFlash from "../assests/portfolio/newsFlasher.png";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  image,
  title,
  description,
  github,
  tags = [],
  external,
  link,
}) => {
  const CardContent = (
    <div className="relative bg-[#23203a] rounded-3xl p-6 shadow-lg max-w-md mx-auto cursor-pointer hover:scale-105 transition">
      {/* Project Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="rounded-2xl w-full h-56 object-cover"
        />
        {/* GitHub Icon (only if not external) */}
        {!external && github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-4 right-4 bg-[#23203a] rounded-full p-2 shadow-lg hover:bg-gray-800 transition"
          >
            <FaGithub size={28} className="text-white" />
          </a>
        )}
      </div>
      {/* Project Title */}
      <h2 className="mt-4 text-3xl font-bold text-white">{title}</h2>
      {/* Project Description */}
      <p className="mt-2 text-sm text-gray-300 font-medium">
        {description}
      </p>
      {/* Tags */}
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag, idx) => (
          <span
            key={idx}
            className={`text-base font-semibold ${
              tag === "react"
                ? "text-blue-400"
                : tag === "restapi"
                ? "text-green-400"
                : tag === "redux"
                ? "text-pink-400"
                : tag === "firebase"
                ? "text-yellow-400"
                  : tag === "javascript"
                ? "text-orange-400"
                  : tag === "infinite scroll"
                ? "text-purple-400"
                : "text-gray-400"
            }`}
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );

  // If external, wrap the card in an <a> tag
  return external && link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {CardContent}
    </a>
  ) : (
    CardContent
  );
};

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: cineStream,
      titleName: "CineStream",
      demo: "https://netflix-clone-d61b5.web.app/",
      github: "https://github.com/kharedevansh11/CineStream",
      description: "Fully responsive and visually rich movie streaming platform with 140,000+ titles. Offers smooth trailer playback, intuitive UI, and categorized content like trending, top-rated, and upcoming — all optimized for seamless user experience across devices.",
      tags: ["react", "redux", "firebase", "restapi"],
    },
    {
      id: 2,
      src: urlShortner,
      titleName: "SwiftLink",
      github: "https://github.com/kharedevansh11/URL_shortner_chrome_extension",
      description: "One-click Chrome extension for instant URL shortening.Simplifies link sharing by eliminating the need for external tools—boosting productivity with real-time copy-to-clipboard functionality.",
      tags: ["javascript", "Chrome Extension API",],
    },
    {
      id: 3,
      src: newsFlash,
      titleName: "NewsFlasher",
      github: "https://github.com/kharedevansh11/NewsFlasher",
      description: "Real-time news aggregator with mutltiple categories, delivering the latest stories and trending topics in a sleek, responsive interface, with infinite scroll and eliminating noise as on other similar platforms.",
      tags: ["react", "infinite scroll", "restapi"],
    },
    {
      id: 4,
      src: leetcodePage,
      titleName: "Leetcode",
      external : true,
      link :  "https://leetcode.com/u/devansh2788/",
      description: "Solved 500+ DSA problems with a max rating of 1662. Earned many badges for consistent problem-solving across key topics like DP, graphs, and sliding window.",
      tags: ["problem-solving"],
    },
    {
      id: 5,
      src: codeChefPage,
      titleName: "Competetive Programming",
      external : true,
      link: "https://www.codechef.com/users/khare11",
      description: "Max rating: 3★ (Rank 377/41,493 in Starters 153, Div 3). Regular contest participation showcasing strong logic building and time-bound problem-solving skills.",
      tags: ["problem-solving"],
    },

  ];
  return (
    <div>
        <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo ,titleName,description,tags,github, external, link}) => (
            <ProjectCard
              key={id}
              image={src}
              title={titleName}
              description={description}
              github={github}
              tags={tags}
              external={external}
              link={link}
            />
          ))}
        </div>
      </div>
    </div>

    </div>
  )
}

export default Portfolio
