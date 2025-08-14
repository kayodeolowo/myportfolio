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
    <footer className='w-full py-16 border-t border-white/10 relative'>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 to-transparent"></div>
      <div className="relative z-10">
        <div className="flex justify-center space-x-8 mb-8">
          <a 
            href="https://twitter.com/Itz_kayman" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-4 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <FiTwitter className="text-xl text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
          </a>
          <a 
            href="https://www.linkedin.com/in/kayode-olowo-21a775124/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-4 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <FaLinkedin className="text-xl text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
          </a>
          <a 
            href="https://github.com/kayodeolowo" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group p-4 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <BsGithub className="text-xl text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
          </a>
          <a 
            href="mailto:officialkayodeolowo@gmail.com"
            className="group p-4 rounded-full glass-effect hover:bg-white/10 transition-all duration-300 hover:scale-110"
          >
            <TbBrandGmail className="text-xl text-gray-400 group-hover:text-emerald-400 transition-colors duration-300" />
          </a>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-8"></div>
        
        <div className="text-center">
          <a 
            href='https://www.linkedin.com/in/kayode-olowo-21a775124/' 
            target='_blank' 
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <p className="text-gray-400 font-inter font-medium group-hover:text-emerald-400 transition-colors duration-300">
              Designed & Built by <span className="font-semibold gradient-text">Kayode Olowo</span>
            </p>
          </a>
        </div>
      </div>
        
    </footer>
  )
}

export default Footer