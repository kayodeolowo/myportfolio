import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full text-gray-400 pb-6 '> 
    
       <Link to='https://www.linkedin.com/in/kayode-olowo-21a775124/' target='blank'>
        
        <h1 className='text-center items-center mt-20 lg:mt-[100px] w-fit mx-auto font-Inconsolata font-semibold hover:text-red-300 transition ease-in duration-500'> 
           Designed & Built By kayode Olowo
        </h1>
       </Link>
        
    </footer>
  )
}

export default Footer