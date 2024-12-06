import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const handleNav = () => setNav(!nav);

  const menuItems = [
    { id: '#', label: '' },
    { id: '#about', label: 'About' },
    { id: '#skills', label: 'Skills' },
    { id: '#projects', label: 'Projects' },
    { id: '#contact', label: 'Contact me' },
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
          to={id}
          smooth
          onClick={() => {
            setActiveSection(id);
            if (isMobile) setNav(false);
          }}
        >
          {label}
        </Link>
      </li>
    ));

  return (
    <div className="flex justify-between items-center h-20 px-4 text-white font-public bg-[#0B1E33] fixed w-full z-10">
      <div className="flex w-11/12 max-w-[1280px] mx-auto justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <h1 className="text-[30px] text-[#E0A040] font-Source font-semibold">K.O</h1>
          <img className="h-8 ml-2 mt-1" src="./images/logoi.png" alt="logo" />
        </div>

        <ul className="hidden md:flex text-base font-mono font-semibold mt-4">
          {renderMenuItems()}
        </ul>

        <div onClick={handleNav} className="md:hidden z-10">
          {nav ? (
            <AiOutlineClose className="text-[#E0A040]" size={32} />
          ) : (
            <HiOutlineMenuAlt3 className="text-[#E0A040]" size={34} />
          )}
        </div>
      </div>

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