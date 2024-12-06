
import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { TbSend, TbBrandGmail } from 'react-icons/tb'
import { FiTwitter } from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { HashLink as Link } from 'react-router-hash-link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { IoChatboxEllipsesOutline } from "react-icons/io5";



const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm('service_vriu9bs', 'template_ynmr9w9', form.current, 'okMwkF6Q2ELNMtan8')
      .then((result) => {
        console.log('Mail sent, You will receive a feedback shortly');
        toast.success('Email sent successfully, You will receive a feedback shortly!');
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.text);
        toast.error('Failed to send email.');
        setIsLoading(false);
      });

    e.target.reset();
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="w-full" id="contact">
      <div className="w-11/12 md:w-9/12 mx-auto max-w-[1280px] pt-20 md:pt-40 text-white">
      <div className='flex w-fit mx-auto items-center'>
<h1 className= '  text-4xl text-white font-Ubuntu  font-black text-center'>  Contact me </h1> 
<IoChatboxEllipsesOutline  className='text-3xl ml-2 text-[#E0A040] font-bold '/>
    </div>

        <div className="lg:flex lg:flex-row">
          <div>
            <div className="mt-2 text-gray-100 text-lg ">
              <p className='leading-8 tracking-wide text-gray-300'>
                Let's have a conversation about how I can turn your visions into captivating online realities.
                Feel free to reach out to me via  <span className='font-semibold cursor-pointer hover:text-[#8e7145] hover:border-b-[#8e7145] translate duration-300 ease-out  text-[#E0A040] border-b-2 border-[#E0A040] '>  <a href="mailto:officialkayodeolowo@gmail.com">
                  {' '}
                  E-mail
                </a>{' '} </span> to start a conversation.
                Whether it's building a stunning website, optimizing user experiences,
                or anything in between, I'm here to help. Looking forward to hearing
                from you and exploring the exciting possibilities together!</p>
            </div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col mt-8 md:w-[60%] md:mx-auto">
              <input
                className="mb-4 outline-none focus:bg-[#27253b]  py-3 px-2 rounded-lg bg-[#27253b] font-Inconsolata font-semibold  outline-0"
                type="text"
                placeholder="FullName"
                name="user_name"
                required
              />
              <input
                className="mb-4 py-3 px-2 rounded-lg focus:bg-[#27253b] bg-[#27253b] font-Inconsolata font-semibold  outline-0"
                type="email"
                placeholder="Email"
                required
                name="user_email"
              />
              <input
                className="mb-4  py-3 px-2 font-Inconsolata focus:bg-[#27253b] font-semibold rounded-lg bg-[#27253b]  outline-0"
                type="text"
                placeholder="Subject"
                required
                name="subject"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="mb-4  py-3 px-2 rounded-lg focus:bg-[#27253b] bg-[#27253b] h-[120px] outline-0 "
                required
              ></textarea>
              <button
                className="bg-[#152d46] transition ease-in hover:bg-[#28405b]   duration-300 w-[50%]  md:w-[30%] mx-auto rounded-lg py-2 text-white  flex justify-center items-center mt-2 font-Ubuntu font-semibold"
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                  Sending..... <span className="ml-2 text-lg">  </span>
                </>
                ) : (
                  <>
                    Send  <span className="ml-2 text-lg">  </span>
                  </>
                )}
              </button>
            </form>
          </div>

         
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}
export default Contact;