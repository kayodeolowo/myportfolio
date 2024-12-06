import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { HashLink as Link } from 'react-router-hash-link';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const [activeSection, setActiveSection] = useState('#home'); // Default active section

  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  useEffect(() => {
    Aos.init({ duration: 3500 });

    // IntersectionObserver for tracking active sections
    const sections = document.querySelectorAll('section');
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.6, // Adjust as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div
      className="flex w-full justify-between items-center h-20 sm:h-18 px-4 
        text-white font-public bg-[#0B1E33] fixed z-10"
    >
      <div className="flex w-11/12 max-w-[1280px] mx-auto justify-between">
        <div>
          <Link to="#">
            <div className="flex items-center">
              <h1 className="text-[30px] text-[#E0A040] font-Source font-semibold">
                K.O
              </h1>
              <img className="h-8 ml-2 mt-1" src="./images/logoi.png" alt="" />
            </div>
          </Link>
        </div>

        <div>
          <ul
            data-aos="fade-down"
            className="hidden md:flex text-base mt-4 text-white font-mono font-semibold"
          >
            <Link
              to="#about"
              className={`md:mx-3 transition ease-in  duration-300 ${
                activeSection === '#about' ? 'text-[#E0A040]' : 'hover:text-[#E0A040]'
              }`}
            >
              About
            </Link>
            <Link
              to="#skills"
              className={`md:mx-3 transition ease-in duration-300 ${
                activeSection === '#skills' ? 'text-[#E0A040]' : 'hover:text-[#E0A040]'
              }`}
            >
              Skills
            </Link>
            <Link
              to="#projects"
              className={`md:mx-3 transition ease-in duration-300 ${
                activeSection === '#projects' ? 'text-[#E0A040]' : 'hover:text-[#E0A040]'
              }`}
            >
              Projects
            </Link>
            <Link
              to="#contact"
              className={`md:mx-3 transition ease-in duration-300 ${
                activeSection === '#contact' ? 'text-[#E0A040]' : 'hover:text-[#E0A040]'
              }`}
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>

      {/* Hamburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-[#E0A040]" size={32} />
        ) : (
          <HiOutlineMenuAlt3 className="text-[#E0A040] font-bold" size={34} />
        )}
      </div>

      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? 'leading-loose text-center border-t text-2xl  absolute text-white left-0 top-0 w-full m-auto z-10 flex h-[20rem] mt-[4.9rem] bg-[#0B1E33] flex-col'
            : 'absolute left-[-100%]'
        }
      >
        <div>
          <ul className="md:hidden text-xlg font-semibold mt-10 font-fira flex flex-col">
            <Link
              to="#about"
              className={`mt-2 ${
                activeSection === '#about' ? 'text-[#E0A040]' : ''
              }`}
            >
              About
            </Link>
            <Link
              to="#skills"
              className={`mt-2 ${
                activeSection === '#skills' ? 'text-[#E0A040]' : ''
              }`}
            >
              Skills
            </Link>
            <Link
              to="#projects"
              className={`mt-2 ${
                activeSection === '#projects' ? 'text-[#E0A040]' : ''
              }`}
            >
              Projects
            </Link>
            <Link
              to="#contact"
              className={`mt-2 ${
                activeSection === '#contact' ? 'text-[#E0A040]' : ''
              }`}
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
