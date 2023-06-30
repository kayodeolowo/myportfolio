import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../KAYODE _OLOWO.pdf'


import { AiOutlineCloudDownload } from 'react-icons/ai';

const About = () => {

  return (
     <section className='w-full  ' id='about'>
       <div className='w-11/12 md:w-9/12 mx-auto max-w-[1280px]   pt-20 md:pt-20'> 
            <div> 
                <h1 className='text-[#E0A040] text-xl font-Ubuntu font-bold'> 01.  <span className='text-white'> About me </span>  </h1>
            </div> 
           <div className='lg:flex '> 
             <div className='lg:w-1/2 lg:text-base'> 
                 <h1 className='text-gray-100  text-lg      mt-2 font-normal   leading-snug'  > I am a highly motivated and skilled Web Developer 
                 with a passion for my work. Throughout my career, 
                 I have cultivated a broad range of abilities and 
                 qualities that define me as a dedicated professional.
                  My expertise lies in cutting-edge technologies such
                   as Javascript ES6+, React.js, Next.js, HTML5, CSS3,
                    and more. I am always eager to enhance my knowledge 
                    and stay up-to-date with the latest tools and techniques
                     to achieve exceptional results. My track record speaks
                      for itself, showcasing a consistent history of successful 
                      projects and accomplishments.
               
               </h1>

               </div>

             <div className='lg:w-5/12 lg:flex lg:justify-end  mt-16   lg:mt-0 '> 
                <img  className=' lg:pl-4 lg:w-[20rem] cursor-pointer' src="./images/person.png" alt=''/>
             </div>

           </div>
            <a href={Resume} download>
            <button className='flex mx-auto  mt-6 px-6 py-2 md:py-1 text-xl bg-[#E0A040] border-[#173047] rounded-lg text-black font-Ubuntu font-bold transition ease-in hover:bg-red-400  duration-300 ' >  My Resume <span className='ml-2 text-[30px]'> <AiOutlineCloudDownload/> </span>  </button>
            </a>

        </div>
    


    </section>
  )
}

export default About