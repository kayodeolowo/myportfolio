import React, { useState, useEffect } from 'react'
import Categories from '../Data'
import { BsGithub } from 'react-icons/bs'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BiBriefcase } from "react-icons/bi";


const Projects = () => {
  const [data, setData] = useState(Categories);
  const [value, setValue] = useState(0);






  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  
  return (
    <section   className='w-full'  id='projects' >
      <div   className='w-11/12 text-white  pt-40 md:w-9/12 mx-auto max-w-[1280px' >
        <div>
          <div>
          <div className='flex w-fit mx-auto items-center'>
<h1 className= ' text-2xl md:text-4xl text-white font-Ubuntu  font-black text-center'>  Projects </h1> 
<BiBriefcase  className='text-2xl md:text-4xl ml-2 text-[#E0A040] font-bold '/>
    </div>
            <p className='mt-4 text-gray-300  text-lg leading-8 tracking-wide'> Welcome to this part of my portfolio! I am thrilled to share a curated selection of projects that truly 
            highlight my journey and proficiency in Frontend web development. Each project has been a stepping stone.
              As you explore these projects, you will witness firsthand how I have transformed design concepts into functional and visually appealing web interfaces. </p>
          </div>
        </div>

      



        <div className=' pt-4 sm:grid sm:gap-8 sm:grid-cols-2 lg:grid-cols-4  2xl:grid-cols-5 lg:gap-x-8   max-w-[20rem] sm:max-w-fit mx-auto '>
          {data.map((values) => {
            const { id, name, img, type, description, languages, link, github, data } = values;
            return (
              <section data-aos="zoom-in" key={id} className=' mt-8 mx-auto  w-10/12 sm:w-full bg-[#072a4b]   rounded-lg  shadow-2xl hover:bg-[#0C1B46]  duration-300 hover:ease-in transition hover:shadow-2xl  hover:cursor-pointer 
                '>

                <div className=''>

                  <a href={link} target='_blank' > <img  className=' w-full h-[160px] sm:h-[160px] lg:h-[120px] rounded-t-lg' src={img} alt="" /> </a>
                  <div className='flex mt-1 items-center justify-between'>
                    <a href={link} target='_blank' >  <h1 className='text-left pt-1 sm:pt-1 mx-2 font-Ubuntu font-semibold sm:text-[18px] lg:text-[15px] lg:mx-2 text-[18px] hover:text-[#e7b467]'> {name}  </h1> </a>
                    {/* <a className='text-[1.2rem] mr-2   text-gray-400  hover:text-[#E0A040]' href={github}> <BsGithub /> </a> */}
                    <a href={link} target='_blank'> <button className='flex mx-auto  px-2 mr-2  text-[12px] lg:text-[11px] bg-[#d48308]  hover:bg-[#e7b467] rounded  text-black text-xs font-semibold '> Link  </button>       </a>
                  </div>

                  {/* <p className='mt-3 mx-2 lg:mx-3 font-mono text-[14px] lg:text-[12px] lg:mt-1  sm:h-[90px] lg:h-[70px]  '> {description } </p> */}
                  <div className='flex mt-2 justify-between items-center '>
                    <p  className='ml-2 w-fit  text-white font-200 text-xs'>
                      {languages.map((language, index) => (
                        <span
                          key={index}
                          style={{ backgroundColor: 'black', padding: '1px 2px', marginRight: '4px', borderRadius: '3px' }}
                        >
                          {language}
                        </span>
                      ))}
                    </p>
                    <a data-aos="zoom-in" className='text-[1.2rem] mr-2   text-gray-400  hover:text-[#E0A040]' href={github}> <BsGithub /> </a>
                  </div>
                </div>

                <div className='flex flex-row justify-between  pt-2 lg:pt-2 pb-2 w-fit mx-auto'>
                  {/* <a href={link}> <button className='flex mx-auto  px-6 py-1 lg:py-1 text-[12px] lg:text-[11px] bg-[#469e4c] border-[#173047] hover:bg-[#d48308] rounded-md text-black  font-semibold'> Live Demo  </button>       </a> */}
                  {/* <span className='ml-2 text-[20px] lg:text-[12px] lg:mt-[2px]'> <CgEnter/>  </span> */}

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

