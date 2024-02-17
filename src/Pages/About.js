import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../KAYODE _OLOWO.pdf'


import { AiOutlineCloudDownload } from 'react-icons/ai';

const About = () => {

  return (
    <section className='w-full ' id='about'>
      <div className='w-11/12 md:w-9/12 mx-auto max-w-[1280px]   pt-20 md:pt-20'>
        <div>
          <h1 className='text-[#E0A040] text-xl font-Ubuntu font-bold'> 01.  <span className='text-white'> About me </span>  </h1>
        </div>
        <div className='lg:flex justify-between items-center '>
          <div className='lg:w-1/2 lg:text-base'>
             {/* with a passion for my work. Throughout my career,
              I have cultivated a broad range of abilities and
              qualities that define me as a dedicated professional.
              My expertise lies in cutting-edge technologies such
              as Javascript ES6+, React.js, Next.js, HTML5, CSS3,
              and more.  My track record speaks
              for itself, showcasing a consistent history of successful
              projects and accomplishments. 
              
               I'm a super motivated Web Developer who absolutely
               loves what I do. Over the course of my career,
                I've picked up a bunch of cool skills that make me a dedicated professional.
                 I'm all about the latest tech, like Javascript ES6+,
                  React.js, Next.js, HTML5, CSS3, and more. */}
            <h1 className='text-gray-100  text-lg  font-normal xl:-mt-8  leading-8'  > 
             

             
                  
                  I am a professional frontend developer passionate about translating 
                  visions into interactive web experiences. With expertise in HTML, CSS, 
                  and modern JavaScript frameworks, i am committed to building pixel-perfect, 
                  responsive websites that captivate users.
                  My track record? Well, it is filled with numerous 
                  successful projects and achievements that i am really proud of.

            </h1>


          </div>

          <img className='  lg:w-[25rem] cursor-pointer mt-4 lg:-mt-8 w-fit mx-auto lg:mx-0' src="./images/person.png" alt='' />

        </div>
        <a href={Resume} download>
          <button className='flex mx-auto  mt-6 px-6 py-2 md:py-2 text-lg bg-[#152d46]  rounded-lg text-white font-Ubuntu font-bold transition ease-in hover:bg-[#28405b]  duration-300 ' >  My Resume <span className='ml-2 text-[30px]'> <AiOutlineCloudDownload /> </span>  </button>
        </a>

      </div>



    </section>
  )
}

export default About