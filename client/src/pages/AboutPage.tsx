import React from "react";

const AboutPage: React.FC = () => {
  const profileImageUrl = "/assets/images/myPhoto.png";

  const description = `Hello! I'm Eshaan, a passionate Software Developer based in Pune. 
  With a love for creating web applications, I enjoy solving DSA problems as well. 
  When I'm not working, you can find me playing Badminton or Sleeping.`;

  const skills = ["Web Development", "React.js", "Node.js", "C++", "Database Management"];

  return (
    <div className="container mx-auto p-6 max-w-5xl bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-[5vh] mb-[5vh]">
      {/* Heading */}
      <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        About Me
      </h1>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row items-center md:items-start mb-8">
        {/* Profile Image */}
        <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
          <img
            src={profileImageUrl}
            alt="Profile"
            className="rounded-full w-56 h-56 shadow-lg object-cover border-4 border-indigo-600"
            onError={(e) => (e.currentTarget.src = "/assets/images/myPhoto.jpg")}
          />
        </div>

        {/* Description */}
        <div className="text-gray-700 dark:text-gray-300 text-lg text-justify">
          <p className="mb-6 leading-relaxed">{description}</p>

          <div>
            <h2 className="text-3xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400">
              Skills
            </h2>
            <ul className="list-disc ml-6 space-y-2">
              {skills.map((skill, index) => (
                <li key={index} className="text-gray-600 dark:text-gray-400">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Additional Section */}
      <div className="mt-8 text-justify">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-600 dark:text-indigo-400">
          More About Me
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4">
          I’m always eager to learn new things and share my knowledge with others. 
          Whether it's through coding, collaborating on exciting projects, or exploring 
          innovative ideas, I strive to make a positive impact on the world around me.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          If you'd like to connect, feel free to reach out to me on 
          <span className="font-medium text-indigo-600 dark:text-indigo-400"> [+91-8251888633]</span>.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
