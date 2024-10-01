import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 pt-9"
    >
      <div>
        <h1 className="text-5xl font-bold mb-8 text-center text-gray-800">
          About Me
        </h1>

        <p className="text-xl mb-6 text-gray-700 leading-relaxed">
          Hello, I'm Ayushi, a dedicated Web Developer with a strong focus on
          the Java Full-Stack. With a solid IT background, I am committed to
          crafting impactful and visually striking software solutions that make
          a lasting impression.
        </p>

        <h2 className="text-green-600 font-semibold text-3xl mb-4">
          Education & Training
        </h2>
        <p className="text-xl mb-6 text-gray-600">
          B.Sc (CS), Hemvati Nandan Bahuguna Garhwal University, UK (2024)
        </p>

        <h2 className="text-green-600 font-semibold text-3xl mb-4">
          Skills & Expertise
        </h2>
        <ul className="list-disc list-inside mb-6 text-xl text-gray-600">
          <li>Proficient in React</li>
          <li>HTML5, CSS, Tailwind CSS, JavaScript</li>
        </ul>

        <h2 className="text-green-600 font-semibold text-3xl mb-4">
          Professional Experience
        </h2>
        <p className="text-xl mb-6 text-gray-600">
          <strong>Cetpa Infotech (Web Development) Intern</strong>
          <br />
          July 2024 - Present | India - Remote
          <br />
          Learned and developed new skills while gaining hands-on experience in
          creating cutting-edge web solutions. Contributed to live projects and
          learned from industry experts, applying practical knowledge to
          real-world examples.
        </p>

        <h2 className="text-green-600 font-semibold text-3xl mb-4">
          Achievements & Awards
        </h2>
        <ul className="list-disc list-inside mb-6 text-xl text-gray-600">
        
          <li>Kabaddi winner in college University tournament</li>
          <li>I have played Athletics at state level </li>
        </ul>

        <h2 className="text-green-600 font-semibold text-3xl mb-4">
          Mission Statement
        </h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          My mission is to leverage my technical skills and creativity to
          deliver innovative software solutions that exceed client expectations
          and enhance the digital landscape. I am committed to continuous
          learning and growth, embracing challenges that push the boundaries of
          web development. My goal is to make a lasting impact through visually
          striking and functionally robust applications.
        </p>
      </div>
    </div>
  );
}

export default About;
