import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Skillset = () => {
    useEffect(()=>{
        Aos.init({ duration: 2500});
    },[]);
  return (
     <section className='w-full  ' id="skills">
        <div className='w-11/12 md:w-9/12  mx-auto max-w-[1280px]   pt-20 md:pt-24'> 

            <h1 className='text-[20px] text-[#E0A040] font-Ubuntu font-bold'> 02. <span className='text-white'> Skills </span>   </h1> 
            <h2 className='  mt-2  text-gray-100 text-lg md:text-[20px]  leading-[35px]  '> With  years of experience in Frontend Web development, my proficient skills are </h2>
            <div data-aos="flip-down" className='  w-full mx-auto px-4 grid grid-cols-4 lg:grid-cols-8   gap-14 mt-10 pb-4 '> 
                <img className='w-[50px] cursor-pointer hover:-translate-y-3 duration-200' src="./images/html.png" alt=''/>
             <img className='w-[50px] cursor-pointer hover:-translate-y-3 duration-200' src="./images/css.png" alt=''/>
              <img className='w-[50px] cursor-pointer hover:-translate-y-3 duration-200' src="./images/tailwind.png" alt=''/>
               <img className='w-[50px] cursor-pointer hover:-translate-y-3 duration-200' src="./images/bootstrap.png" alt=''/>
              <img className='w-[50px] cursor-pointer hover:-translate-y-3 duration-200' src="./images/javascript_LOGO.png" alt=''/>
              <img className='w-[50px] cursor-pointer hover:-translate-y-3 duration-200' src="./images/react.png" alt='' />
               <img className='w-[50px] cursor-pointer hover:-translate-y-3 duration-200' src="./images/github.png "/>
                <img className='w-[50px] hover:ease-in transition cursor-pointer hover:-translate-y-3 duration-200' src="./images/git.png" alt=''/>
               
            </div>

        </div>


     </section>
  )
}

export default Skillset