import React, { useState, useEffect } from 'react'
import Categories from '../Data'
import { BsGithub } from 'react-icons/bs'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BiBriefcase } from "react-icons/bi";


const Projects = () => {
  const [data, setData] = useState(Categories);
  const [value, setValue] = useState(0);






  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  
  return (
    <section className='relative w-full py-20 md:py-32' id='projects'>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent'></div>
      <div className='w-11/12 md:w-9/12 text-white mx-auto max-w-[1280px] relative z-10'>
        <div className='mb-16 text-center'>
          <div className='inline-flex items-center mb-6 space-x-3'>
            <BiBriefcase className='text-3xl md:text-4xl text-emerald-400' />
            <h1 className='text-3xl font-bold md:text-5xl font-grotesk gradient-text'>
              Featured Projects
            </h1>
          </div>
          <p className='max-w-3xl mx-auto text-lg leading-relaxed text-gray-300 md:text-xl font-inter'>
            Welcome to my project showcase! Here's a curated selection of projects that highlight my journey 
            and expertise in <span className='font-semibold text-white'>Frontend & Backend development</span>. 
            Each project represents a unique challenge and demonstrates my ability to transform ideas into 
            <span className='font-semibold gradient-text'> functional, beautiful solutions</span>.
          </p>
        </div>

      



        <div className='grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {data.map((values) => {
            const { id, name, img, type, description, languages, link, github, data } = values;
            return (
              <div 
                data-aos="zoom-in" 
                key={id} 
                className='group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:bg-white/10 card-shadow hover:border-emerald-400/30'
              >

                <div className='relative overflow-hidden'>
                  <a href={link} target='_blank'>
                    <img 
                      className='object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110' 
                      src={img} 
                      alt={name}
                    />
                    <div className='absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-black/60 to-transparent group-hover:opacity-100'></div>
                  </a>
                </div>
                
                <div className='p-4'>
                  <div className='flex items-start justify-between mb-2'>
                    <a href={link} target='_blank'>
                      <h3 className='text-xl font-semibold text-white transition-colors duration-300 font-grotesk group-hover:text-emerald-400 line-clamp-2'>
                        {name}
                      </h3>
                    </a>
                  </div>

                  <div className='flex flex-wrap gap-2 mb-3'>
                    {languages.map((language, index) => (
                      <span
                        key={index}
                        className='px-3 py-1 font-mono text-xs font-medium border rounded-full bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                      >
                        {language}
                      </span>
                    ))}
                  </div>
                  
                  <div className='flex items-center justify-between'>
                    <a 
                      href={link} 
                      target='_blank'
                      className='flex items-center justify-center px-2 py-1.5 text-xs button-primary'
                    >
                      View Live
                    </a>
                    <a 
                      href={github} 
                      target='_blank'
                      className='p-3 transition-colors duration-300 rounded-full hover:bg-white/10 group/icon'
                    >
                      <BsGithub className='text-xl text-gray-400 transition-colors duration-300 group-hover/icon:text-white' />
                    </a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>




    </section>
  )
}

export default Projects

