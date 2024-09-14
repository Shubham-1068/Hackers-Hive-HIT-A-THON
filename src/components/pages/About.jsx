import React from "react";
import banner from "../../assets/AboutBanner.png";
import shubhamImg from "../../assets/shubham.jpg";
import rajveerImg from "../../assets/rajveer.png";
import rajatImg from "../../assets/rajat.jpg";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <div className="h-[90%] mt-16 w-full flex flex-col justify-end fixed right-0 border-t-[1px] border-gray-500 overflow-auto">
        <div className=" h-[87%] w-full flex flex-col items-center">

          {/* About section */}
          <div className="w-[80%] flex items-center gap-24">
            <motion.img initial={{ opacity: 1 }} whileHover={{ opacity: 1, scale: 1.1 }} transition={{ duration: 0.2 }} className="h-80 w-[500px] shadow-lg shadow-[#1e1e1e] border-[1px] border-[#D1D5DB]" src={banner} alt="banner" />
            <div className="text-[#1d1d1d] text-5xl font-bold">
              <p>About</p>
              <p className="text-lg text-gray-800 font-normal mt-8 ">BizAmplify is an innovative platform designed to empower micro and nano entrepreneurs. It offers personalized business recommendations, connects them with potential investors, and fosters a collaborative community. By addressing financial challenges and offering strategic insights, BizAmplify helps small businesses grow, compete, and succeed in today’s rapidly evolving marketplace.</p>

              <motion.a href="#team" className="cursor-pointer scroll-smooth" ><motion.button initial={{ opacity: 1 }} whileHover={{ opacity: 1, scale: 1.05 }} transition={{ duration: 0.2 }}  className="bg-[#67da20] p-2 rounded-lg mt-8 text-lg font-semibold w-56">Contact Us</motion.button></motion.a>
            </div>
          </div>


          {/* Team section */}
          <div className="w-[80%] mt-32 gap-5 flex flex-col items-center p-8 rounded-md bg-[#F7F7F7] border-2 mb-10 border-[#d1d5db] " id="team">
            <p className="text-3xl font-bold ">Meet Our Team</p>
            <div className="grid grid-cols-3 gap-8 ">

              
              <motion.div initial={{ opacity: 1 }} whileHover={{ opacity: 1, scale: 1.05 }} transition={{ duration: 0.1 }} className="h-96 w-[300px] rounded-lg bg-[#1e1e1e] flex flex-col items-center justify-center shadow-md border-[1px] border-[#D1D5DB] shadow-[#3b3b3b]" >
                <img className="h-40 w-40 rounded-full object-cover" src={rajveerImg} alt="rajveer" />
                <p className="text-2xl font-bold text-white mt-5">Rajveer</p>
                <p className="text-sm text-gray-300 font-normal mt-3">UI / UX Designer | Frontend Developer </p>
                <ul className="flex gap-8 mt-5">
                  <li><a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAECaS0YBnp61amZ_347taYmqr0kYbQ0cRsk&keywords=rajveer%20.&origin=RICH_QUERY_SUGGESTION&position=2&searchId=96271008-4d21-45b3-8e9c-ba88b3048721&sid=.UD&spellCorrectionEnabled=false" target="_blank"><Linkedin size={22} color="white"/></a></li>
                  <li><a href="https://github.com/root-0101" target="_blank"><Github size={22} color="white"/></a></li>
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 1 }} whileHover={{ opacity: 1, scale: 1.05 }} transition={{ duration: 0.1 }} className="h-96 w-[300px] rounded-lg bg-[#1e1e1e] flex flex-col items-center justify-center shadow-md border-[1px] border-[#D1D5DB] shadow-[#3b3b3b]" >
                <img className="h-40 w-40 rounded-full" src={shubhamImg} alt="rajveer" />
                <p className="text-2xl font-bold text-white mt-5">Shubham Raj</p>
                <p className="text-sm text-gray-300 font-normal mt-3">Fullstack Developer | Team Lead</p>
                <ul className="flex gap-8 mt-5">
                  <li><a href="https://www.linkedin.com/in/shubham-raj-13567a308/" target="_blank"><Linkedin size={22} color="white"/></a></li>
                  <li><a href="https://github.com/Shubham-1068" target="_blank"><Github size={22} color="white"/></a></li>
                </ul>
              </motion.div>

              <motion.div initial={{ opacity: 1 }} whileHover={{ opacity: 1, scale: 1.05 }} transition={{ duration: 0.1 }} className="h-96 w-[300px] rounded-lg bg-[#1e1e1e] flex flex-col items-center justify-center shadow-md border-[1px] border-[#D1D5DB] shadow-[#3b3b3b]" >
                <img className="h-40 w-40 rounded-full object-cover" src={rajatImg} alt="rajveer" />
                <p className="text-2xl font-bold text-white mt-5">Rajat Dubey</p>
                <p className="text-sm text-gray-300 font-normal mt-3">Support Member</p>
                <ul className="flex gap-8 mt-5">
                  <li><a href="https://www.linkedin.com/in/rajat-dubey-6b560b1b8/" target="_blank"><Linkedin size={22} color="white"/></a></li>
                  <li><a href="https://github.com/RajatDub3y" target="_blank"><Github size={22} color="white"/></a></li>
                </ul>
              </motion.div>
            </div>

          </div>


          {/* links section */}
          <div className="w-[80%] mt-10 gap-0 flex justify-center items-center p-0 rounded-md bg-[#F7F7F7] border-2 mb-10 border-[#d1d5db] ">
            <p className="text-3xl w-[32%] font-bold ">Get our project details on: </p>
            <div className="w-[20%] p-4 rounded-lg">

               <div className="flex items-center justify-center">
                
                <motion.a initial={{ opacity: 1 }} whileHover={{ opacity: 1, scale: 1.05 }} transition={{ duration: 0.1 }} href="https://github.com/Shubham-1068/Hackers-Hive-HIT-A-THON" target="_blank" className="text-md border-2 border-slate-500 h-32 w-32 flex flex-col items-center justify-around rounded-lg hover:bg-slate-200">
                  <Github className="border-2 border-slate-900 rounded-full p-1 mt-2" size={60} />
                  <p className=" text-lg font-semibold">Github</p>
                </motion.a>
               </div>

            </div>

          </div>

          <div className="w-[80%] mt-10 gap-5 flex justify-center items-center pb-5 cursor-default">
            <p>@ {new Date().getFullYear()} BizAmplify. All rights reserved</p>

            </div>

          </div>

        

      </div>


    </>
  );
}

export default About;
