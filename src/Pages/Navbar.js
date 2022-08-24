import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { HashLink as Link } from 'react-router-hash-link';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

 
 useEffect(()=>{
        Aos.init({ duration: 2500});
    },[]);

    return (
        <div className="flex w-full  justify-between  items-center h-20 sm:h-18 px-4 
          text-white font-public bg-[#0B1E33] fixed z-10 "> 
            
            <div className='flex  w-11/12 max-w-[1280px] mx-auto justify-between '>
                    <div className='' >
                
                            <h1 className=' text-white text-[30px]'> KO<span className='text-[40px]'>. </span> </h1>
                
                     </div> 

             <div data-aos="fade-left" className='  '> 
              <ul className=' hidden md:flex text-[19px]    mt-4  text-white font-mono  '> 
                      <Link to='#'  className='md:mx-3 hover:text-[#E0A040] hover:-translate-x-1 duration-200 ' >   Home    </Link>
                      <Link to='#about'  className='md:mx-3 hover:text-[#E0A040] hover:-translate-x-1 duration-200 ' >   About    </Link>
                      <Link to='#skills' className='md:mx-3 hover:text-[#E0A040] hover:-translate-x-1 duration-200 ' >    Skills   </Link>
                      <Link to='#projects' className='md:mx-3 hover:text-[#E0A040]   hover:-translate-x-1 duration-200' >   Projects    </Link>
                      <Link to='#contact' className='md:mx-3 hover:text-[#E0A040]  hover:-translate-x-1 duration-200' >     Contact  </Link>
                     
                            
                        </ul>
            </div>    
            </div> 
           

         
            {/* hamburger */} 
            <div   onClick={handleNav} className=' md:hidden z-10 '> 
            {nav ? <AiOutlineClose className='text-[#E0A040] ' size={32}/> :   <BiMenuAltRight className='text-[#E0A040] ' size={32}/>}
              
            </div>


             <div   onClick={handleNav} className={nav ? ' leading-loose text-center text-2xl rounded-lg absolute text-white  left-0 top-0    w-full m-auto z-10    flex h-[400px]   mt-20 bg-[#0B1E33]   flex-col' : 'absolute left-[-100%] '}>
              <div > 
                    <ul data-aos="fade-up"  className='md:hidden text-[19px] mt-10 font-fira  flex flex-col '>
                       <Link   to='#' className='mt-2' >Home</Link>
                      <Link to='#about'  className='mt-2' >About</Link>
                      <Link to='#skills' className='mt-2' >Skills</Link>
                      <Link to='#projects' className='mt-2' >Projects</Link>
                      <Link to='#contact' className='mt-2'>Contact </Link>
        </ul> 
        </div>
      </div>
            
        </div>
    )
}

export default Navbar;