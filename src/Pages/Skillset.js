import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { IoMdCodeWorking } from "react-icons/io";

const Skillset = () => {
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <section className="w-full  " id="skills">
      <div className="w-11/12  md:w-9/12  mx-auto max-w-[1280px] ">
        <div className="flex items-center w-fit mx-auto">
          <h1 className="text-2xl  md:text-4xl text-white font-Ubuntu  font-black text-center">
            {" "}
            Skills{" "}
          </h1>
          <IoMdCodeWorking className="text-3xl md:text-5xl ml-2 text-[#E0A040] font-bold " />
        </div>

        <h2 className="  mt-4 leading-8 tracking-wide  text-gray-300 text-lg     ">
          {" "}
          I am always eager to enhance my knowledge and stay up-to-date with the
          latest tools and technologies. With years of experience in Software
          development, I specialize in creating dynamic, responsive, and
          accessible applications using modern frameworks. Here are my stacks i
          work with:
        </h2>
        <div className="  w-full mx-auto px-4 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7  gap-14 mt-10 pb-4 ">
        
        
        <div
            data-aos="fade-up"
            className="flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 bg-[#152d46] rounded-md p-2 pt-3 w-16"
          >
            <img className="w-8 " src="./images/react.png" alt="" />
            <h1 className="text-white mt-1 text-xs  "> ReactJs </h1>
          </div>
          <div
            data-aos="fade-up"
            className="flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 bg-[#152d46] rounded-md p-2 pt-3 w-16"
          >
            <img className="w-8 " src="./images/next.png" alt="" />
            <h1 className="text-white mt-1 text-xs"> Next Js </h1>
          </div>

          <div
            data-aos="fade-up"
            className="flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 bg-[#152d46] rounded-md p-2 pt-3 w-16"
          >
            <img className="w-8 " src="./images/javascript.png" alt="" />
            <h1 className="text-white mt-1 text-xs"> Javascript </h1>
          </div>

          <div
            data-aos="fade-up"
            className="flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 bg-[#152d46] rounded-md p-2 pt-3 w-16"
          >
            <img className="w-8 " src="./images/typescript.png" alt="" />
            <h1 className="text-white mt-1 text-xs"> Typescript </h1>
          </div>


          <div
            data-aos="fade-up"
            className="flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 bg-[#152d46] rounded-md p-2 pt-3 w-16"
          >
            <img className="h-8" src="./images/html.png" alt="" />
            <h1 className="text-white text-xs mt-1"> Html </h1>
          </div>

          <div
            data-aos="fade-up"
            className="flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 bg-[#152d46] rounded-md p-2 pt-3 w-16"
          >
            <img className="w-8" src="./images/css.png" alt="" />
            <h1 className="text-white mt-1 text-xs"> CSS </h1>
          </div>

          <div
            data-aos="fade-up"
            className="flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 bg-[#152d46] rounded-md p-2 pt-3 w-16"
          >
            <img className="w-8 mt-2" src="./images/tailwind.png" alt="" />
            <h1 className="text-white mt-2 text-xs"> Tailwind </h1>
          </div>

          <div
            data-aos="fade-up"
            className="flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 bg-[#152d46] rounded-md p-2 pt-3 w-16"
          >
            <img className="w-8 " src="./images/bootstraplogo.png" alt="" />
            <h1 className="text-white mt-1 text-xs"> Bootstrap </h1>
          </div>

          

          

          <div
            data-aos="fade-up"
            className="flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 bg-[#152d46] rounded-md p-2 pt-3 w-16"
          >
            <img className="w-8 " src="./images/redux.png" alt="" />
            <h1 className="text-white mt-1 text-xs"> Redux </h1>
          </div>

          <div
            data-aos="fade-up"
            className="flex flex-col  items-center cursor-pointer hover:-translate-y-1 duration-200 bg-[#152d46] rounded-md p-2 pt-3 w-16"
          >
            <img className="w-8 " src="./images/git.png" alt="" />
            <h1 className="text-white mt-1 text-xs"> Git </h1>
          </div>

          <div
            data-aos="fade-up"
            className="flex flex-col items-center cursor-pointer hover:-translate-y-1 duration-200 bg-[#152d46] rounded-md p-2 pt-3 w-16"
          >
            <img className="w-8 " src="./images/github.png" alt="" />
            <h1 className="text-white mt-1 text-xs"> Github </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skillset;
