import React from "react";
import { useState } from "react";
import { CircleX, Bookmark, Mail, Phone, Twitter, Instagram, Linkedin, Link, Forward } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

function PopInfo({ visible, setvisible, currpost }) {

  const [bookmark, setbookmark] = useState(false)
  const [isvisible, issetvisible] = useState(false)

  return (
    <>
      {visible && (
        <div className="hidden w-screen h-screen fixed top-0 left-0 md:flex justify-center bg-black bg-opacity-50 px-20">
          <motion.div initial={{ opacity: 1, scale: -1 }} animate={{ opacity: 1, scale: [1.2, 1] }} transition={{ duration: 0.2 }} className="mt-28 w-[95%] h-[80%] bg-[#f3f3f3] flex justify-around items-center rounded-xl">
            <div className="h-full w-2/3 flex justify-around items-center">
              <div className="w-[95%] h-[95%] border-2 border-gray-300 rounded-xl overflow-hidden bg-white">
                <img
                  src={currpost.banner}
                  alt="banner"
                  className="w-full h-[30%] object-cover"
                />
                <div className="w-full h-[30%] -mt-14 relative">
                  <motion.div initial={{ opacity: 1, scale: 1 }} whileHover={{ opacity: 1, scale: 1.12 }} className="cursor-pointer ml-8 p-4 bg-white relative h-[160px] w-[160px] rounded-full border-2 border-slate-300">
                    <img
                      src={currpost.logo}
                      alt="logo"
                      className="h-full w-full rounded-full"
                    />
                  </motion.div>
                  <div className=" absolute left-52 top-16 h-auto">
                    <p className="text-2xl font-bold">{currpost.name}</p>
                    <p className="mt-2">{currpost.content}</p>

                    <p className="mt-2 font-semibold">
                      Location: {currpost.location}
                    </p>
                  </div>

                  <div>

                    <div className="absolute flex justify-center items-center rounded-md right-6 min-h-1 w-[6vw] ml-[2.5%] bg-[#67DA20] text-white font-bold py-1 px-4 cursor-pointer hover:bg-[#56f11e`]">
                      Share

                    </div>
                  </div>

                  <div className="absolute left-0 top-48 mt-3 min-h-20 w-[95%] ml-[2.5%] border-t-2 border-gray-300 pt-4">
                    <p className="text-xl font-semibold">Summary</p>
                    <div className="h-[150px] w-full mt-2 overflow-y-scroll">
                      {currpost.summary}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-1/3 flex justify-around items-center flex-col relative">
              <button
                onClick={() => setvisible(!visible)}
                className="absolute -right-3 -top-3"
              >
                <CircleX size={40} fill="white" color="red" className="cursor-pointer" onClick={() => issetvisible(!isvisible)} />
              </button>

              <div className="h-[94%] w-[95%] flex justify-between items-center flex-col">
                <div className="w-[95%] h-[60%] flex flex-col border-2 border-gray-300 rounded-xl p-4 mr-5 bg-white">
                  <p className="text-[22px] font-semibold flex justify-between">
                    <p>Contact details</p>
                    {!bookmark ? <motion.span initial={{ scale: 1 }} whileTap={{ scale: [1.2, 1] }} transition={{ ease: "easeOut", duration: 0.2 }} onClick={() => setbookmark(!bookmark)}><Bookmark size={30} className="cursor-pointer" /></motion.span> : <motion.span initial={{ scale: 1 }} whileTap={{ scale: [1.2, 1] }} transition={{ ease: "easeOut", duration: 0.2 }} onClick={() => setbookmark(!bookmark)}><Bookmark size={30} className="cursor-pointer" fill="#67DA20" /></motion.span>}
                  </p>

                  <p className="border-b-2 border-gray-300 mt-2"></p>

                  <div className="w-full h-full mt-4 flex flex-col gap-4 overflow-auto">
                    <p className="w-full flex-wrap flex items-center gap-1"><span className="font-semibold text-md flex items-center gap-1"><Mail size={20} />Email:</span><span className="text-[#67DA20] font-semibold font-[DM Sans]">{currpost.email}</span></p>
                    <p className="w-full flex-wrap flex items-center gap-1"><span className="font-semibold text-md flex items-center gap-1"><Phone size={20} />Phone:</span> <span className="text-[#67DA20] font-semibold font-[DM Sans]">{currpost.phone}</span></p>
                    <p className="w-full flex-wrap flex items-center gap-1"><span className="font-semibold text-md flex items-center gap-1"><Link size={20} />Website:</span> <a href={currpost.website} target="_blank" className="text-[#67DA20] font-semibold font-[DM Sans] hover:underline hover:underline-offset-4">{currpost.name}.com</a></p>
                    <p className="w-full flex-wrap flex items-center gap-1"><span className="font-semibold text-md flex items-center gap-1"><Instagram size={20} />Instagram:</span> <a href={currpost.instagram} target="_blank" className="text-[#67DA20] font-semibold hover:underline hover:underline-offset-2">{currpost.instagram}</a></p>
                    <p className="w-full flex-wrap flex items-center gap-1"><span className="font-semibold text-md flex items-center gap-1"><Twitter size={20} />Twitter:</span> <a href={currpost.twitter} target="_blank" className="text-[#67DA20] font-semibold hover:underline hover:underline-offset-2">{currpost.twitter}</a></p>
                    <p className="w-full flex-wrap flex items-center gap-1"><span className="font-semibold text-md flex items-center gap-1"><Linkedin size={20} />LinkedIn:</span> <a href={currpost.linkedin} target="_blank" className="text-[#67DA20] font-semibold hover:underline hover:underline-offset-2">{currpost.linkedin}</a></p>
                  </div>
                </div>

                <div className="w-[95%] h-[37%] flex flex-col border-2 border-gray-300 rounded-xl p-4 mr-5 bg-white">
                  <p className="text-xl font-semibold flex justify-between">About us</p>

                  <p className="border-b-2 border-gray-300 mt-2"></p>

                  <div className="w-full mt-3 flex justify-center flex-col gap-4">
                    <p className="w-full flex-wrap flex items-center gap-1"><span className="font-semibold text-md flex items-center gap-1">Team size: {currpost.team}</span> </p>
                    <p className="w-full flex-wrap flex items-center gap-1"><span className="font-semibold text-md flex items-center gap-1">Estd: {currpost.estd}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

        {/* for smaller screens */}

      {visible && (
        <div className="md:hidden w-screen h-screen fixed top-0 left-0 flex justify-center bg-black bg-opacity-50 px-6">
          <motion.div initial={{ opacity: 1, scale: -1 }} animate={{ opacity: 1, scale: [1.2, 1] }} transition={{ duration: 0.2 }} className="mt-28 w-full h-[80%] bg-[#f3f3f3] rounded-2xl overflow-auto">
            <div className="h-[800px] w-full flex justify-center items-center overflow-auto -mt-3 px-2 pt-14 relative">

            <button
                onClick={() => setvisible(!visible)}
                className="absolute top-6 right-3"
              >
                <CircleX size={40} fill="white" color="red" className="cursor-pointer" onClick={() => issetvisible(!isvisible)} />
              </button>

              <div className="absolute top-6 left-4 flex justify-center items-center rounded-md bg-[#67DA20] text-white font-bold py-2 px-3 cursor-pointer hover:bg-[#56f11e`]">
                      <Forward size={25} />

                    </div>

              <div className="w-full h-[95%] border-2 border-gray-300 rounded-xl overflow-hidden bg-white">
                <img
                  src={currpost.banner}
                  alt="banner"
                  className="w-full h-[30%] object-cover"
                />
                <div className="w-full h-[30%] -mt-14 relative">
                  <motion.div initial={{ opacity: 1, scale: 1 }} whileHover={{ opacity: 1, scale: 1.12 }} className="cursor-pointer ml-4 p-4 bg-white relative h-[140px] w-[140px] rounded-full border-2 border-slate-300">
                    <img
                      src={currpost.logo}
                      alt="logo"
                      className="h-full w-full rounded-full"
                    />
                  </motion.div>
                  <div className=" absolute left-48 top-16 h-auto">
                    <p className="text-2xl font-bold">{currpost.name}</p>

                    <p className="mt-2 font-semibold">
                      Location: {currpost.location}
                    </p>
                  </div>
                    <div className="w-full px-3 pt-6 mx-auto flex justify-center items-start flex-col mt-4">
                    <p className="text-xl font-semibold">Description: </p>
                    <p className="mt-2">{currpost.content}</p>
                    </div>

                  <div className="absolute left-0 top-[300px] mt-3 min-h-20 w-[95%] ml-[2.5%] border-t-2 border-gray-300 pt-4">
                    <p className="text-xl font-semibold">Summary</p>
                    <div className="h-[150px] w-full mt-2 overflow-y-scroll">
                      {currpost.summary}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full w-full relative">
              

              <div className="h-[94%] w-full flex justify-between items-center flex-col p-2">
                <div className="w-full h-[60%] flex flex-col border-2 border-gray-300 rounded-xl p-4 bg-white">
                  <p className="text-[22px] font-semibold flex justify-between">
                    <p>Contact details</p>
                    {!bookmark ? <motion.span initial={{ scale: 1 }} whileTap={{ scale: [1.2, 1] }} transition={{ ease: "easeOut", duration: 0.2 }} onClick={() => setbookmark(!bookmark)}><Bookmark size={30} className="cursor-pointer" /></motion.span> : <motion.span initial={{ scale: 1 }} whileTap={{ scale: [1.2, 1] }} transition={{ ease: "easeOut", duration: 0.2 }} onClick={() => setbookmark(!bookmark)}><Bookmark size={30} className="cursor-pointer" fill="#67DA20" /></motion.span>}
                  </p>

                  <p className="border-b-2 border-gray-300 mt-2"></p>

                  <div className="w-full h-full mt-4 flex flex-col gap-4 overflow-auto">
                    <p className="w-full flex-wrap flex items-center gap-1"><span className="font-semibold text-md flex items-center gap-1"><Mail size={20} />Email:</span><span className="text-[#67DA20] font-semibold font-[DM Sans]">{currpost.email}</span></p>
                    <p className="w-full flex-wrap flex items-center gap-1"><span className="font-semibold text-md flex items-center gap-1"><Phone size={20} />Phone:</span> <span className="text-[#67DA20] font-semibold font-[DM Sans]">{currpost.phone}</span></p>
                    <p className="w-full flex-wrap flex items-center gap-1"><span className="font-semibold text-md flex items-center gap-1"><Link size={20} />Website:</span> <a href={currpost.website} target="_blank" className="text-[#67DA20] font-semibold font-[DM Sans] hover:underline hover:underline-offset-4">{currpost.name}.com</a></p>
                    <p className="w-full flex-wrap flex items-center gap-1"><span className="font-semibold text-md flex items-center gap-1"><Instagram size={20} />Instagram:</span> <a href={currpost.instagram} target="_blank" className="text-[#67DA20] font-semibold hover:underline hover:underline-offset-2">{currpost.instagram}</a></p>
                    <p className="w-full flex-wrap flex items-center gap-1"><span className="font-semibold text-md flex items-center gap-1"><Twitter size={20} />Twitter:</span> <a href={currpost.twitter} target="_blank" className="text-[#67DA20] font-semibold hover:underline hover:underline-offset-2">{currpost.twitter}</a></p>
                    <p className="w-full flex-wrap flex items-center gap-1"><span className="font-semibold text-md flex items-center gap-1"><Linkedin size={20} />LinkedIn:</span> <a href={currpost.linkedin} target="_blank" className="text-[#67DA20] font-semibold hover:underline hover:underline-offset-2">{currpost.linkedin}</a></p>
                  </div>
                </div>

                <div className="w-full h-[37%] flex flex-col border-2 border-gray-300 rounded-xl p-4 bg-white">
                  <p className="text-xl font-semibold flex justify-between">About us</p>

                  <p className="border-b-2 border-gray-300 mt-2"></p>

                  <div className="w-full mt-3 flex justify-center flex-col gap-4">
                    <p className="w-full flex-wrap flex items-center gap-1"><span className="font-semibold text-md flex items-center gap-1">Team size: {currpost.team}</span> </p>
                    <p className="w-full flex-wrap flex items-center gap-1"><span className="font-semibold text-md flex items-center gap-1">Estd: {currpost.estd}</span></p>
                  </div>
                </div>
              </div>
            <p className="absolute bottom-4 w-full text-center">@{currpost.name}, {new Date().getFullYear()}</p>
            </div>

          </motion.div>
        </div>
      )}
    </>
  );
}

export default PopInfo;
