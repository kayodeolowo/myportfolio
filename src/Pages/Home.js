import React from 'react'
import { TbDeviceMobileMessage } from 'react-icons/tb';
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../KAYODE _OLOWO.pdf'
import { IoMailUnreadOutline } from "react-icons/io5";
import { AiOutlineCloudDownload } from 'react-icons/ai';


const Home = () => {
  return (
    <section className='relative flex items-center justify-center w-full min-h-screen overflow-hidden' id='about'>
      <div className='absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-purple-900/5 to-pink-900/10'></div>
      <div className='w-11/12 md:w-9/12 mx-auto max-w-[1280px] relative z-10'>
        <div className='pt-20 pb-20'>
          <div className='text-center animate-fade-in'>
            <div className='inline-block mt-4 mb-6'>
              <span className='text-lg font-medium tracking-wide uppercase text-emerald-400 font-inter'>
                Hello there, my name is
              </span>
            </div>
                     

            <a href='https://www.linkedin.com/in/kayode-olowo-21a775124/' target='_blank' className='block group'>
              <h1 className='text-5xl font-black leading-tight sm:text-7xl md:text-8xl lg:text-9xl font-grotesk'>
                <span className='inline-block transition-transform duration-500 gradient-text group-hover:scale-105'>
                  Kayode Olowo
                </span>
              </h1>
            </a>
          </div>

          <div className='mt-16'>
            <div className='flex flex-col items-center'>
              <div className='relative group'>
                <div className='absolute transition-opacity duration-500 rounded-full -inset-4 bg-gradient-to-r from-emerald-500 to-teal-600 opacity-20 blur-xl group-hover:opacity-40'></div>
                <img className='relative object-cover w-40 h-40 border-4 rounded-full shadow-2xl 2xl:w-48 2xl:h-48 animate-float border-white/20' src="./images/boy.png" alt='Kayode Olowo' />
              </div>
              
              <div className='max-w-3xl mx-auto mt-12'>
                <p className='text-lg leading-relaxed tracking-wide text-center text-gray-300 md:text-xl font-inter'>
                  I am a <span className='font-semibold text-white'>professional software developer</span> skilled in both 
                  <span className='font-semibold gradient-text'> Frontend and Backend development</span>. 
                  From building responsive, interactive interfaces to designing efficient backend systems, 
                  I enjoy creating seamless web experiences. I have worked on multiple successful projects 
                  and take pride in delivering solutions that look great and perform even better.
                </p>
              </div>
              
              <div className='flex flex-col justify-center gap-6 mt-12 sm:flex-row'>
                <a href={Resume} download className='group'>
                  <button className='flex items-center justify-center w-full space-x-3 text-lg button-primary font-inter sm:w-auto'>
                    <span>Download Resume</span>
                    <AiOutlineCloudDownload className='text-xl group-hover:animate-bounce' />
                  </button>
                </a>
                
                <a href="mailto:officialkayodeolowo@gmail.com" className='group'>
                  <button className='flex items-center justify-center w-full space-x-3 text-lg button-secondary font-inter sm:w-auto'>
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