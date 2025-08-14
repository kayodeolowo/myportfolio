
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
import { IoMailUnreadOutline } from "react-icons/io5";



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
    <section className="w-full py-20 md:py-32 relative" id="contact">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/5 to-transparent"></div>
      <div className="w-11/12 md:w-9/12 mx-auto max-w-[1280px] text-white relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <IoChatboxEllipsesOutline className="text-3xl md:text-4xl text-emerald-400" />
            <h1 className="text-3xl md:text-5xl font-grotesk font-bold gradient-text">
              Let's Connect
            </h1>
          </div>

          <div className="max-w-3xl mx-auto">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-inter text-center mb-12">
              I'm excited to discuss how we can bring your vision to life and create something amazing together.
              Whether it's building a <span className="text-white font-semibold">stunning website</span>, 
              enhancing user experiences, or exploring new possibilities, I'm here to help.
              Let's start a conversation about your next project!
            </p>
            {/* <form ref={form} onSubmit={sendEmail} className="flex flex-col mt-8 md:w-[60%] md:mx-auto">
              <input
                className="px-2 py-3 mb-4 font-semibold bg-gray-800 rounded-lg outline-none focus:bg-gray-800 font-Inconsolata outline-0"
                type="text"
                placeholder="FullName"
                name="user_name"
                required
              />
              <input
                className="px-2 py-3 mb-4 font-semibold bg-gray-800 rounded-lg focus:bg-gray-800 font-Inconsolata outline-0"
                type="email"
                placeholder="Email"
                required
                name="user_email"
              />
              <input
                className="px-2 py-3 mb-4 font-semibold bg-gray-800 rounded-lg font-Inconsolata focus:bg-gray-800 outline-0"
                type="text"
                placeholder="Subject"
                required
                name="subject"
              />
              <textarea
                name="message"
                placeholder="Message"
                className="mb-4  py-3 px-2 rounded-lg focus:bg-gray-800 bg-gray-800 h-[120px] outline-0 "
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
            </form> */}

            <div className="flex justify-center">
              <a href="mailto:officialkayodeolowo@gmail.com" className="group">
                <button className="button-primary flex items-center space-x-3 text-lg font-inter px-8 py-4">
                  <span>Get In Touch</span>
                  <IoMailUnreadOutline className="text-xl group-hover:animate-pulse" />
                </button>
              </a>
            </div>
          </div>

         
        </div>
      </div>
      <ToastContainer />
    </section>
  )
}
export default Contact;