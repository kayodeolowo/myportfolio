import React from 'react';

const SkillCard = ({ skill, index }) => {
  const { name, image, alt } = skill;
  
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="flex flex-col items-center p-4 transition-all duration-300 border group glass-effect rounded-2xl hover:scale-105 hover:bg-white/10 border-white/10 hover:border-emerald-400/30"
    >
      <div className="flex items-center justify-center w-8 h-8 mb-3">
        <img 
          className="object-contain w-full h-full" 
          src={image} 
          alt={alt || name} 
        />
      </div>
      <h3 className="text-sm font-medium text-white transition-colors duration-300 font-inter group-hover:text-emerald-400">
        {name}
      </h3>
    </div>
  );
};

export default SkillCard;