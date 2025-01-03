import React from 'react'
import { TbDeviceMobileMessage } from 'react-icons/tb';
import { HashLink as Link } from 'react-router-hash-link';
import Resume from '../KAYODE _OLOWO.pdf'
import { IoMailUnreadOutline } from "react-icons/io5";
import { AiOutlineCloudDownload } from 'react-icons/ai';


const Home = () => {
  return (
    <section className='w-full  max-w-xl:h-screen' id='about' >
      <div className='w-11/12 md:w-9/12  mx-auto max-w-[1280px]'>
      <div className=' pt-[8rem] 2xl:pt-[15rem]'> 
               <div className='text-center'> 
                     <h1 className='text-[#E0A040] text-2xl font-Inconsolata font-semibold'> Hello there, my name is  </h1>
                     

                    <a href='https://www.linkedin.com/in/kayode-olowo-21a775124/' target='blank'>
                    <h1 data-aos="zoom-in" className=' mt-4 text-4xl sm:text-6xl md:text-[7rem]  font-bold text-white font-Source   text-center transition ease-in hover:text-[#E0A040] cursor-pointer  duration-500'> Kayode Olowo</h1>
                    
                    </a>
                   
                     {/* <h1 className='mt-6 md:mt-4 sm:w-9/12 lg:w-7/12  leading-snug  text-gray-100 font-fira text-start sm:text-start text-2xl  '> I am a Creative front-end engineer with years of experience in building appealing web applications in front-end web development. Am passionate about building and developing user friendly websites and web based applications.   </h1> <h2 className=' mt-6 font-fira text-lg sm:text-xl leading-snug text-gray-100 text-start sm:w-9/12  lg:w-7/12'> </h2>
                */}
               </div>

               


            </div>

            <div className='  '>

<div className=' items-center '>
  <div className=''>
     
  <img className='mt-8  w-[10rem] 2xl:mt-10 cursor-pointer   mx-auto ' src="./images/boy.png" alt='' />
    <h1 className='text-gray-300 tracking-wide md:w-[70%] mt-6 2xl:mt-8 md:mt-4 max-w-[40rem] mx-auto text-center text-lg 2xl:text-xl  font-normal   leading-0'  > 
     

    I am a professional software developer skilled in both Front-end and Back-end development. From building responsive, interactive interfaces to designing efficient back-end systems, I enjoy creating seamless web experiences. I have worked on multiple successful projects and take pride in delivering solutions that look great and perform even better.

    </h1>


  </div>

  

</div>


<div className='flex sm:flex-row flex-col sm:space-x-4 w-fit mx-auto 2xl:mt-10'>
<a href={Resume} download>
  <button className='flex items-center mx-auto   mt-6 px-6 py-2 md:py-2 text-lg bg-[#152d46]  rounded-lg text-white font-Ubuntu font-bold transition ease-in hover:bg-[#28405b]  duration-300 ' >  My Resume <span className='ml-2 text-lg'> <AiOutlineCloudDownload /> </span>  </button>
</a>

<a href="mailto:officialkayodeolowo@gmail.com">
  <button className='flex items-center mx-auto  mt-6 px-6 py-2 md:py-2 text-lg bg-[#152d46]  rounded-lg text-white font-Ubuntu font-bold transition ease-in hover:bg-[#28405b]  duration-300 ' >  
  Contact me <span className='ml-2 text-lg'> <IoMailUnreadOutline /> </span>
          </button>
          </a>

</div>

</div>
      </div>
            
    </section>
  )
}

export default Home