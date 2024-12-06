import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { HashLink as Link } from 'react-router-hash-link'; // Import HashLink for smooth scrolling
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState('#home'); // Default section to be active

  const handleNav = () => setNav(!nav);

  const handleScrollToSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  useEffect(() => {
    Aos.init({ duration: 3500 });

    // Track active section based on scroll position
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
            window.history.replaceState(null, '', `#${entry.target.id}`); // Update the URL hash on scroll
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    // Update active section when the route changes (if the user directly accesses a section)
    const handleHashChange = () => {
      setActiveSection(window.location.hash);
    };

    // Add event listener to detect URL changes
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const menuItems = [
    { id: '#about', label: 'About' },
    { id: '#skills', label: 'Skills' },
    { id: '#projects', label: 'Projects' },
    { id: '#contact', label: 'Contact' },
  ];

  const renderMenuItems = (isMobile = false) =>
    menuItems.map(({ id, label }) => (
      <li
        key={id}
        className={`${
          activeSection === id ? 'text-[#E0A040]' : 'hover:text-[#E0A040]'
        } ${isMobile ? 'mt-2' : 'md:mx-3 cursor-pointer'}`}
      >
        <Link
          to={id} // HashLink for smooth scrolling
          smooth
          onClick={() => {
            handleScrollToSection(id); // Set active section on click
            if (isMobile) setNav(false); // Close the mobile menu if a link is clicked
          }}
        >
          {label}
        </Link>
      </li>
    ));

  return (
    <div className="flex justify-between items-center h-20 px-4 text-white font-public bg-[#0B1E33] fixed w-full z-10">
      <div className="flex w-11/12 max-w-[1280px] mx-auto justify-between">
        {/* Logo click scrolls to the top */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <h1 className="text-[30px] text-[#E0A040] font-Source font-semibold">K.O</h1>
          <img className="h-8 ml-2 mt-1" src="./images/logoi.png" alt="logo" />
        </div>

        {/* Desktop Menu */}
        <ul
          data-aos="fade-down"
          className="hidden md:flex text-base font-mono font-semibold mt-4"
        >
          {renderMenuItems()}
        </ul>

        {/* Mobile Menu Toggle */}
        <div onClick={handleNav} className="md:hidden z-10">
          {nav ? (
            <AiOutlineClose className="text-[#E0A040]" size={32} />
          ) : (
            <HiOutlineMenuAlt3 className="text-[#E0A040]" size={34} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          nav ? 'absolute' : 'hidden'
        } top-0 left-0 w-full bg-[#0B1E33] text-center z-10 h-[20rem] flex flex-col mt-[4.9rem]`}
      >
        <ul className="md:hidden text-xl font-semibold mt-6 flex flex-col space-y-4">
          {renderMenuItems(true)}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
