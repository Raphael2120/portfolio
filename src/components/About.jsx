import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm RAMANANTSOA Raphaël. I'm an apprenticeship in third year of college now.
          For my future project, I have decided to go in a engering school for next year. 
          However, I need to be hired in a new entreprise to carry on this way. So thtat's why I update my portfolio now. I'm really at ease on what I do. 
          What I do now is not an issue for me. This is a real passion that I want to show to everyone.</p>

        <br />

        <p className="text-xl">
          Now, for those recruiters who is going to see my portfolio. I just want to say that I have a real path on my life. I know where I'm heading. I know my goals and purposes.
          I just need to show you my skills and knowledges around IT. I don't give up on my life and I wanna prove that we can reach our goals  with works and efforts.
          On other hands, I also want to improve my skills to be better. Become a DevOps and finally finishing my path as a CIO or an equal Post
        </p>
      </div>
    </div>
  );
};

export default About;
