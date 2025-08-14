import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState('#about');

  const handleNav = () => setNav(!nav);

  const menuItems = [
    { id: '#about', label: 'About' },
    { id: '#skills', label: 'Skills' },
    { id: '#projects', label: 'Projects' },
    { id: '#contact', label: 'Contact me' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If we're near the bottom of the page, activate contact
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection('#contact');
        return;
      }

      // Check each section
      let currentActive = '#about'; // default
      
      sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - 120; // Offset for navbar height
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentActive = `#${sectionId}`;
          }
        }
      });
      
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderMenuItems = (isMobile = false) =>
    menuItems.map(({ id, label }) => (
      <li key={id} className={`${isMobile ? 'mb-2' : ''}`}>
        <Link
          to={id}
          smooth
          className={`
            nav-link-artistic
            ${activeSection === id ? 'active text-emerald-300 nav-link-active' : 'text-gray-300 hover:text-white'}
            ${isMobile ? 'text-lg' : 'text-base'}
            font-inter font-medium block transition-all duration-300
            ${activeSection === id ? 'font-semibold' : ''}
          `}
          onClick={() => {
            if (isMobile) setNav(false);
          }}
        >
          {label}
        </Link>
      </li>
    ));

  return (
    <div className="fixed top-0 w-full z-50 transition-all duration-300">
      <div className="glass-effect border-b border-white/10">
        <div className="flex justify-between items-center h-20 px-4 text-white">
          <div className="flex w-11/12 max-w-[1280px] mx-auto justify-between items-center">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <h1 className="text-3xl font-grotesk font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                K.O
              </h1>
              <img className="h-8 ml-3 group-hover:rotate-12 transition-transform duration-300" src="./images/logoi.png" alt="logo" />
            </div>

            <ul className="hidden md:flex text-base font-inter font-medium space-x-8">
              {renderMenuItems()}
            </ul>

            <div onClick={handleNav} className="md:hidden z-20 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200">
              {nav ? (
                <AiOutlineClose className="text-emerald-400" size={28} />
              ) : (
                <HiOutlineMenuAlt3 className="text-emerald-400" size={28} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${
          nav ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } md:hidden absolute top-20 left-0 w-full glass-effect border-b border-white/10 transition-all duration-300 ease-out`}
      >
        <ul className="text-lg font-inter font-medium py-8 px-4 space-y-6">
          {renderMenuItems(true)}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;