import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "GENCE STUDIO",
      role: "Software Development Intern",
      duration: "March 2024 – May 2024",
      location: "Remote",
      details: [
        "Revamped UI of Gence Studio's platform from AngularJS and Bootstrap to React and Tailwind, enhancing user experience and modernizing design aesthetics.",
        "Spearheaded the setup of CI/CD pipeline for hosting, ensuring seamless deployment processes and efficient project management.",
        "Led the development of authentication pages using Firebase Authentication, integrated Uppy for faster file uploads to Firestore, and collaborated with designers and backend engineers to implement designs and integrate backend APIs, enhancing overall platform functionality and performance.",
      ],
      techStack: ["React", "Tailwind", "Firebase", "Uppy", "CI/CD"],
    },
    // we can add more experience here
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-1 gap-8 text-left py-8 px-12 sm:px-0">
          {experiences.map(({ id, company, role, duration, location, details, techStack }) => (
            <div
              key={id}
              className="shadow-md hover:scale-105 duration-500 py-2 px-4 rounded-lg bg-gray-700 max-w-none "
            >
              <h2 className="text-2xl font-bold text-pink-600 py-2">{company}</h2>
              <h3 className="text-xl font-semibold py-1">{role}</h3>
              <p className="italic py-1">{duration}</p>
              <p className="italic ">{location}</p>
              <ul className="list-disc list-inside mt-3 mb-2">
                {details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              {/* Tech Stack */}
              {techStack && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-base font-semibold ${
                        tech.toLowerCase() === "react"
                          ? "text-blue-400"
                          : tech.toLowerCase() === "tailwind"
                          ? "text-cyan-400"
                          : tech.toLowerCase() === "firebase"
                          ? "text-yellow-400"
                          : tech.toLowerCase() === "ci/cd"
                          ? "text-green-400"
                          : "text-pink-400"
                      }`}
                    >
                      #{tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
