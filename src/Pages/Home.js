import React from 'react'
import { TbDeviceMobileMessage } from 'react-icons/tb';
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../KAYODE _OLOWO.pdf'
import { IoMailUnreadOutline } from "react-icons/io5";
import { AiOutlineCloudDownload } from 'react-icons/ai';


const Home = () => {
  return (
    <section className='w-full min-h-screen flex items-center justify-center relative overflow-hidden' id='about'>
      <div className='absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-pink-900/10'></div>
      <div className='w-11/12 md:w-9/12 mx-auto max-w-[1280px] relative z-10'>
        <div className='pt-20 pb-20'>
          <div className='text-center animate-fade-in'>
            <div className='inline-block mb-6'>
              <span className='text-emerald-400 text-lg font-inter font-medium tracking-wide uppercase'>
                Hello there, my name is
              </span>
            </div>
                     

            <a href='https://www.linkedin.com/in/kayode-olowo-21a775124/' target='_blank' className='group block'>
              <h1 className='text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-grotesk font-black leading-tight'>
                <span className='gradient-text group-hover:scale-105 transition-transform duration-500 inline-block'>
                  Kayode Olowo
                </span>
              </h1>
            </a>
          </div>

          <div className='mt-16'>
            <div className='flex flex-col items-center'>
              <div className='relative group'>
                <div className='absolute -inset-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500'></div>
                <img className='relative w-40 h-40 2xl:w-48 2xl:h-48 rounded-full object-cover animate-float border-4 border-white/20 shadow-2xl' src="./images/boy.png" alt='Kayode Olowo' />
              </div>
              
              <div className='mt-12 max-w-3xl mx-auto'>
                <p className='text-gray-300 text-lg md:text-xl leading-relaxed font-inter text-center tracking-wide'>
                  I am a <span className='font-semibold text-white'>professional software developer</span> skilled in both 
                  <span className='gradient-text font-semibold'> Frontend and Backend development</span>. 
                  From building responsive, interactive interfaces to designing efficient backend systems, 
                  I enjoy creating seamless web experiences. I have worked on multiple successful projects 
                  and take pride in delivering solutions that look great and perform even better.
                </p>
              </div>
              
              <div className='flex flex-col sm:flex-row gap-6 justify-center mt-12'>
                <a href={Resume} download className='group'>
                  <button className='button-primary flex items-center justify-center space-x-3 text-lg font-inter w-full sm:w-auto'>
                    <span>Download Resume</span>
                    <AiOutlineCloudDownload className='text-xl group-hover:animate-bounce' />
                  </button>
                </a>
                
                <a href="mailto:officialkayodeolowo@gmail.com" className='group'>
                  <button className='button-secondary flex items-center justify-center space-x-3 text-lg font-inter w-full sm:w-auto'>
                    <span>Contact Me</span>
                    <IoMailUnreadOutline className='text-xl group-hover:animate-pulse' />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
            
    </section>
  )
}

export default Home