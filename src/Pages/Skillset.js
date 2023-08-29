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
            <h2 className='  mt-2  text-gray-100 text-lg   leading-[35px]  '> With  years of experience in Frontend Web development, my proficient skills are </h2>
            <div data-aos="fade-up" className='  w-full mx-auto px-4 grid grid-cols-4 sm:grid-cols-4 lg:grid-cols-7 gap-8 lg:gap-14 mt-10 pb-4 '> 
               
                <div className='flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 border-2 border-[#E0A040] rounded-tr-lg rounded-bl-lg p-2 pt-3 w-17 lg:w-16'> 
                    <img className='h-8' src="./images/html.png" alt=''/> 
                    <h1 className='text-white text-xs mt-1'> Html </h1>
                </div>

                 <div className='flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 border-2 border-[#E0A040] rounded-tr-lg rounded-bl-lg p-2 pt-3 w-17 lg:w-16'> 
                    <img className='w-8' src="./images/css.png" alt=''/> 
                    <h1 className='text-white mt-1 text-xs'> CSS </h1>
                </div>

                 <div className='flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 border-2 border-[#E0A040] rounded-tr-lg rounded-bl-lg p-2 pt-3 w-17 lg:w-16'> 
                    <img className='w-8 mt-2' src="./images/tailwind.png" alt=''/> 
                    <h1 className='text-white mt-2 text-xs'> Tailwind </h1>
                </div>

                <div className='flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 border-2 border-[#E0A040] rounded-tr-lg rounded-bl-lg p-2 pt-3 w-17 lg:w-16'> 
                    <img className='w-8 ' src="./images/bootstraplogo.png" alt=''/> 
                    <h1 className='text-white mt-1 text-xs'> Bootstrap </h1>
                </div>

                 <div className='flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 border-2 border-[#E0A040] rounded-tr-lg rounded-bl-lg p-2 pt-3 w-17 lg:w-16'> 
                    <img className='w-8 ' src="./images/javascript.png" alt=''/> 
                    <h1 className='text-white mt-1 text-xs'> Javascript </h1>
                </div>

                <div className='flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 border-2 border-[#E0A040] rounded-tr-lg rounded-bl-lg p-2 pt-3 w-17 lg:w-16'> 
                    <img className='w-8 ' src="./images/typescript.png" alt=''/> 
                    <h1 className='text-white mt-1 text-xs'> Typescript </h1>
                </div>

                 <div className='flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 border-2 border-[#E0A040] rounded-tr-lg rounded-bl-lg p-2 pt-3 w-17 lg:w-16'> 
                    <img className='w-8 ' src="./images/react.png" alt=''/> 
                    <h1 className='text-white mt-1 text-xs  '> React Js </h1>
                </div>
               <div className='flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 border-2 border-[#E0A040] rounded-tr-lg rounded-bl-lg p-2 pt-3 w-17 lg:w-16'> 
                    <img className='w-8 ' src="./images/next.png" alt=''/> 
                    <h1 className='text-white mt-1 text-xs'> Next Js </h1>
                </div>

                <div className='flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 border-2 border-[#E0A040] rounded-tr-lg rounded-bl-lg p-2 pt-3 w-17 lg:w-16'> 
                    <img className='w-8 ' src="./images/redux.png" alt=''/> 
                    <h1 className='text-white mt-1 text-xs'> Redux </h1>
                </div>

               <div className='flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 border-2 border-[#E0A040] rounded-tr-lg rounded-bl-lg p-2 pt-3 w-17 lg:w-16'> 
                    <img className='w-8 ' src="./images/git.png" alt=''/> 
                    <h1 className='text-white mt-1 text-xs'> Git </h1>
                </div>

                 <div className='flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 border-2 border-[#E0A040] rounded-tr-lg rounded-bl-lg p-2 pt-3 w-17 lg:w-16'> 
                    <img className='w-8 ' src="./images/github.png" alt=''/> 
                    <h1 className='text-white mt-1 text-xs'> Github </h1>
                </div>
              
               
            </div>

        </div>


     </section>
  )
}

export default Skillset