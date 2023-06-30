
import React, { useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import {TbSend, TbBrandGmail} from  'react-icons/tb'
import {FiTwitter} from 'react-icons/fi'
import {FaLinkedin} from 'react-icons/fa'
import {BsGithub} from 'react-icons/bs' 
import { HashLink as Link } from 'react-router-hash-link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Jump from 'react-reveal/Jump';


const Contact = () => {
      const form = useRef()
        const sendEmail = (e) => {
           e.preventDefault();

               emailjs.sendForm('service_vriu9bs', 'template_ynmr9w9', form.current, 'okMwkF6Q2ELNMtan8')
              .then((result) => {
             console.log("Mail sent, You will receive a feedback shortly");
              }, (error) => {
              console.log(error.text);
          });
        e.target.reset()
         };


      
   useEffect(()=>{
        Aos.init({ duration: 2000});
    },[]);

  return (
    <section className='w-full  ' id="contact">
            <div className='w-11/12 md:w-9/12  mx-auto max-w-[1280px]   pt-20 md:pt-24 text-white'> 
                <h1 className='text-[20px] text-[#E0A040] font-Ubuntu font-bold'> 04. <span className='text-white '> Contact me </span>   </h1> 

                 

                <div className='lg:flex lg:flex-row'> 
                    
                    
                     <div> 
                          <div className='mt-2  text-gray-100 text-lg md:text-[20px]'> 
                             <p> 
                                     Let’s talk about how I can help you accomplish your web goals. You can send me a mail directly.
                                </p>
                        </div>
                            <form ref={form} onSubmit={sendEmail} className='flex flex-col mt-8 '> 
                            <input className='mb-4 mx-10 py-3 px-6  rounded-full  bg-[#27253b] font-Inconsolata font-semibold focus:border-red-400 outline-[#E0A040] outline-0' type="text" placeholder="Full name" name="user_name" required/>
                            <input className='mb-4 mx-10 py-3 px-6 rounded-full bg-[#27253b] font-Inconsolata font-semibold outline-[#E0A040] outline-0' type="email" placeholder="Email" required name="user_email"/>
                            <input className='mb-4 mx-10 py-3 px-6 font-Inconsolata font-semibold rounded-full bg-[#27253b] outline-[#E0A040] outline-0' type="text" placeholder="Subject" required name="subject"/>
                         <textarea  name="message" placeholder="Message" className='mb-4 mx-10 py-3 px-2 rounded-2xl bg-[#27253b] h-[120px] outline-0 outline-[#E0A040]'  required  > </textarea>
                          <button className='bg-[#E0A040] transition ease-in hover:bg-red-400  duration-300 w-5/12 mx-auto rounded-lg py-2 text-black flex justify-center mt-8 font-Ubuntu font-bold' type='submit'> Send me a mail <span className='ml-2 text-[20px]'> <TbSend/> </span> </button>
                        </form>
                     </div>

                      <div className=''> 
                    {/* <div className='mt-10'> 
                       <p>or connect with me via </p>
                    </div> */}
                    <div data-aos="flip-down" className='flex justify-around lg:ml-40 lg:flex-col mx-auto mt-16 md:mt-2  w-3/4  text-center text-[25px] md:text-[30px] text-[#f7d19a] '> 
                      <button className='hover:-translate-y-2 hover:text-red-400 duration-500 md:mt-20'> <a href='https://twitter.com/Itz_kayman'> <FiTwitter/> </a> </button>  
                        <button className='lg:mt-10 hover:-translate-y-2 duration-500 hover:text-red-400'>  <a href='https://www.linkedin.com/in/kayode-olowo-21a775124/'> <FaLinkedin/> </a> </button>  
                        <button className='lg:mt-10 hover:-translate-y-2 duration-500 hover:text-red-400'>   <a href='https://github.com/kayodeolowo'>  <BsGithub/> </a> </button>  
                        <button className='lg:mt-10 hover:-translate-y-2 duration-500 hover:text-red-400'>   <a href='mailto:officialkayodeolowo@gmail.com'>  <TbBrandGmail/> </a> </button>  
                       
                    </div>
                      
                </div>
                </div> 

               


            </div>
    </section>
  )
}

export default Contact