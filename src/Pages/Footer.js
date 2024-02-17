import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { TbSend, TbBrandGmail } from 'react-icons/tb'
import { FiTwitter } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import Aos from 'aos';
import 'aos/dist/aos.css';





const Footer = () => {

  
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);


  return (
    <footer className='w-full text-gray-400  '> 
     <div  className="">
            <div  className="flex  flex-row space-x-10 mx-auto w-fit mt-8  text-center text-xl ">
              <button className="lg:mt-10 hover:text-[#E0A040] duration-500 ">
                <a href="https://twitter.com/Itz_kayman">
                  {' '}
                  <FiTwitter />
                </a>
              </button>
              <button className="lg:mt-10  duration-500 hover:text-[#E0A040]">
                {' '}
                <a href="https://www.linkedin.com/in/kayode-olowo-21a775124/">
                  {' '}
                  <FaLinkedin />
                </a>{' '}
              </button>
              <button className="lg:mt-10  duration-500 hover:text-[#E0A040]">
                {' '}
                <a href="https://github.com/kayodeolowo">
                  {' '}
                  <BsGithub />
                </a>{' '}
              </button>
              <button className="lg:mt-10  duration-500 hover:text-[#E0A040]">
                {' '}
                <a href="mailto:officialkayodeolowo@gmail.com">
                  {' '}
                  <TbBrandGmail />
                </a>{' '}
              </button>
            </div>
          </div>
    
       <Link to='https://www.linkedin.com/in/kayode-olowo-21a775124/' target='blank'>
        
        <h1    className='text-center items-center  mt-4 pb-6  w-fit mx-auto font-Inconsolata font-semibold hover:text-[#E0A040] transition ease-in-out duration-500'> 
           Designed & Built By kayode Olowo
        </h1>
       </Link>
        
    </footer>
  )
}

export default Footer