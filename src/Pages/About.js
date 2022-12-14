import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../KAYODE_OLOWO.pdf'


import { AiOutlineCloudDownload } from 'react-icons/ai';

const About = () => {

  return (
     <section className='w-full  ' id='about'>
       <div className='w-11/12 md:w-9/12 mx-auto max-w-[1280px]   pt-28 md:pt-28'> 
            <div> 
                <h1 className='text-[#E0A040] text-xl font-Ubuntu font-bold'> 01.  <span className='text-white'> About me </span>  </h1>
            </div> 
           <div className='lg:flex '> 
             <div className='lg:w-1/2 lg:text-base'> 
                 <h1 className='text-gray-100  text-lg      mt-2 font-normal   leading-snug'  > I am a positive, enthusiastic, and competent Web Developer, who over the years, has built up a diverse range of skills and attributes, that has made me a devoted professional. Working with modern technologies such as Javascript Es6+, React.js, Next.Js, HTML5, CSS3 and a host of others.  I constantly improve my knowledge about the technologies and tools required for a better output thereby I have a proven track record of success. 
               
               </h1>

               </div>

             <div className='lg:w-5/12 lg:flex lg:justify-end  mt-16   lg:mt-0 '> 
                <img  className=' lg:pl-4 lg:w-[400px]' src="./images/person.png" alt=''/>
             </div>

           </div>
            <a href={Resume} download>
            <button className='flex mx-auto  mt-6 px-6 py-2 md:py-1 text-xl bg-[#E0A040] border-[#173047] rounded-lg text-black font-Ubuntu font-bold transition ease-out-in delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ' >  My Resume <span className='ml-2 text-[30px]'> <AiOutlineCloudDownload/> </span>  </button>
            </a>

        </div>
    


    </section>
  )
}

export default About