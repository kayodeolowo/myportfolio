import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoMdCodeWorking } from "react-icons/io";
import SkillCard from "../components/SkillCard";
import { skillsData } from "../data/skillsData";

const Skillset = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  
  return (
    <section className="w-full py-20 md:py-32 relative" id="skills">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent"></div>
      <div className="w-11/12 md:w-9/12 mx-auto max-w-[1280px] relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <IoMdCodeWorking className="text-3xl md:text-4xl text-emerald-400" />
            <h1 className="text-3xl md:text-5xl font-grotesk font-bold gradient-text">
              Skills & Technologies
            </h1>
          </div>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-inter">
            I'm passionate about staying current with the latest technologies and frameworks.
            With years of experience in <span className="text-white font-semibold">full-stack development</span>,
            I specialize in creating <span className="gradient-text font-semibold">dynamic, responsive, and accessible applications</span>.
            Here are the technologies I work with:
          </p>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6">
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skillset;