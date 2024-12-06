import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../KAYODE _OLOWO.pdf'
import { IoMailUnreadOutline } from "react-icons/io5";
import { AiOutlineCloudDownload } from 'react-icons/ai';

const About = () => {

  return (
    <section className='w-full min-h-screen' >
      <div className='w-11/12 md:w-9/12 mx-auto max-w-[1280px]  '>

        <div className=' items-center '>
          <div className=''>
             
          <img className='mt-4  w-[10rem] cursor-pointer   mx-auto ' src="./images/boy.png" alt='' />
            <h1 className='text-gray-300 tracking-wide md:w-[70%] mt-4 max-w-[40rem] mx-auto text-center text-lg  font-normal   leading-0'  > 
             

                  I am a Professional frontend developer passionate about translating 
                  visions into interactive web experiences. With expertise in HTML, CSS, 
                  and modern JavaScript frameworks, i am committed to building pixel-perfect, 
                  responsive websites that captivate users.
                  My track record? Well, it is filled with numerous 
                  successful projects and achievements that i am really proud of.

            </h1>


          </div>

          

        </div>
    

    <div className='flex sm:flex-row flex-col sm:space-x-4 w-fit mx-auto'>
    <a href={Resume} download>
          <button className='flex items-center mx-auto  mt-6 px-6 py-2 md:py-2 text-lg bg-[#152d46]  rounded-lg text-white font-Ubuntu font-bold transition ease-in hover:bg-[#28405b]  duration-300 ' >  My Resume <span className='ml-2 text-lg'> <AiOutlineCloudDownload /> </span>  </button>
        </a>

        <a href="mailto:officialkayodeolowo@gmail.com">
          <button className='flex items-center mx-auto  mt-6 px-6 py-2 md:py-2 text-lg bg-[#152d46]  rounded-lg text-white font-Ubuntu font-bold transition ease-in hover:bg-[#28405b]  duration-300 ' >  
          Contact me <span className='ml-2 text-lg'> <IoMailUnreadOutline /> </span>
                  </button>
                  </a>
        
    </div>

      </div>



    </section>
  )
}

export default About