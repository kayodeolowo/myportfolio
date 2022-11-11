import React, {useState, useEffect} from 'react'
import { NavLink } from "react-router-dom"
import styled from "styled-components"

import Categories from '../Data'
import {CgEnter } from 'react-icons/cg';
import {BsGithub} from 'react-icons/bs'
import Aos from 'aos';
import 'aos/dist/aos.css';


const Projects = () => {
  const [data, setData ] = useState (Categories);
   const [value, setValue] = useState(0);


  

 const filterResult = (output) => {
  const result = Categories.filter((curData)=>{
    return curData.categories === output;
  });
  setData(result)
 }

 useEffect(()=>{
        Aos.init({ duration: 2500});
    },[]);
  return (
     <section className='w-full pt-20  text-white ' >
      <div  id="projects" className='w-11/12 md:w-9/12 mx-auto max-w-[1280px]' > 
          <div> 
           <div>
              <h1  className='text-[20px] text-[#E0A040] font-Ubuntu font-bold'> 03. <span className='text-white'> My projects</span> </h1>
              <p className='mt-4 text-gray-100  text-lg md:text-[20px]'> Here are some selected projects that showcase my skills, experiences and capabalities in Frontend web development.</p>
            </div> 
           </div>

            {/* <div className='flex justify-center mt-6' > 
                 <button className=' rounded-full py-1 px-4 bg-[#E0A040] text-black font-bold' onClick={(e)=> setIsActive(!isActive)}> 
                  Filter Projects
                 </button>
           </div>  */}
      
      
        <div className='leading-[30px] lg:leading-[20px] flex  justify-center mx-auto items-center w-fit space-x-6 px-4 py-0.5 mt-8  bg-white rounded-lg text-black  '> 
      
         
          
          <button className='active:underline active:text-[#E0A040]'  onClick={()=>setData(Categories)}>All </button>
         
        <button className='active:underline active:text-[#E0A040]' onClick={()=>filterResult('web apps')}>Web Apps </button>

        
        <button  className='active:underline active:text-[#E0A040]'  onClick={()=>filterResult('websites')}  >Websites </button>
      
         </div>
      
     

      <div  className=' pt-4 sm:grid sm:gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-20 2xl:grid-cols-4   '> 
            {data.map((values)=>{
              const{id, name, img,type, description, languages, link, github} = values;
              return(
                <section key={id}  className=' mt-8 mx-auto  w-10/12 sm:w-full bg-[#072a4b]   rounded-lg  shadow-2xl hover:bg-[#142a3f] hover:-translate-y-2 duration-300 hover:ease-in transition hover:shadow-2xl hover:border-b-orange-600 hover:cursor-pointer hover:border-b-2
                '> 
                      
                     <div data-aos="fade-up" className=''> 
                     
                         <a href={link} > <img className=' w-full h-[180px] sm:h-[180px] lg:h-[150px] rounded-t-lg' src={img} alt=""/> </a>
                         <div className='flex items-baseline justify-between'>
                             <h1 className='text-left pt-1 sm:pt-4 mx-2 font-Ubuntu font-semibold sm:text-[18px] lg:text-[15px] lg:mx-3 text-[18px] '> {name}  </h1>
                             <p className='mr-1 text-[12px] lg:text-[10px] uppercase font-bold text-gray-400'>{type} </p>
                         </div>
                     
                      <p className='mt-3 mx-2 lg:mx-3 font-mono text-[14px] lg:text-[12px] lg:mt-1  sm:h-[90px] lg:h-[70px]  '> {description } </p>
                      <p className='mt-2  mx-2 lg:mx-3 text-gray-500 text-[14px] lg:text-[11px]  '> {languages}</p>
                     </div>
                  
                    <div data-aos="fade-down" className='flex flex-row justify-between mx-2 pt-6 lg:pt-4 pb-4 lg:mx-3'> 
                       <a href={link}> <button className='flex mx-auto  px-2 lg:px-3 py-1 lg:py-1 text-[12px] lg:text-[11px] bg-[#E0A040] border-[#173047] hover:bg-[#d48308] rounded-lg text-black font-Ubuntu font-bold'> Vist Project <span className='ml-2 text-[20px] lg:text-[12px] lg:mt-[2px]'> <CgEnter/>  </span> </button>       </a> 

                         <a className='text-[30px] md:text-[25px] text-gray-400  hover:text-[#E0A040]'  href={github}> <BsGithub/> </a> 
                    </div>
                      

               </section>
              )
            })}
      </div>
      </div>

      


     </section>
  )
}

export default Projects

