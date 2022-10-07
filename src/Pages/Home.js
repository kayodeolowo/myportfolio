import React from 'react'
import { TbDeviceMobileMessage } from 'react-icons/tb';
import { HashLink as Link } from 'react-router-hash-link';
import RubberBand from 'react-reveal/RubberBand';

const Home = () => {
  return (
    <section className='w-full  ' id='home' >
            <div className='w-11/12 md:w-9/12 mx-auto max-w-[1280px]  pt-[120px] '> 
               <div className=''> 
                     <h1 className='text-[#E0A040] text-2xl font-Inconsolata font-semibold'> Hi, my name is  </h1>
                     <RubberBand>

                       <h1 className='mt-6 text-3xl sm:text-4xl md:text-5xl  font-bold text-white font-Source sm:text-start '> kayode Olowo</h1>
                     </RubberBand>
                   
                     <h1 className='mt-6 md:mt-4 sm:w-9/12 lg:w-7/12 font-semibold leading-snug  text-gray-100 font-fira text-start sm:text-start text-2xl '> I am passionate about building and developing user friendly websites, web based applications and software’s.  </h1>
                    <h2 className=' mt-6 font-fira text-lg sm:text-xl leading-snug text-gray-100 text-start sm:w-9/12  lg:w-7/12'>I love to create beautiful and responsive websites with delightful user experiences. Working on creative projects that require exceptional skills and capabalities has shaped me greatly over time. </h2>
               </div>

            <Link to='#contact'> <button className='flex border-2 mt-6 px-6 lg:px-4  lg:py-1 py-2 md:py-1 text-[20px] lg:text-[17px] bg-[#E0A040] border-[#173047] rounded-lg text-black font-Ubuntu font-bold transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300    ' >  Contact me <span className='ml-2 text-[30px] lg:text-[23px]'> <TbDeviceMobileMessage/> </span>  </button>  </Link>   


            </div>
    </section>
  )
}

export default Home