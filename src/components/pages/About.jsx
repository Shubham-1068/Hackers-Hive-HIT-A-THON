import React from "react";

function About() {
  return (
    <>
      <div className="h-[90%] mt-16 w-full flex flex-col justify-end fixed right-0 border-t-[1px] border-gray-500">
        <div className=" h-[87%] w-full flex flex-col items-center overflow-y-scroll">


          {/* socials */}

          {/* <div className="w-full h-20 bg-[#3b3b3b] flex items-center justify-around">

            <div className="flex items-center gap-4">
              <img className="h-10 w-10" src="./src/assets/instagram.png" alt="instagram" />
              <img className="h-10 w-10" src="./src/assets/facebook.png" alt="facebook" />
              <img className="h-10 w-10" src="./src/assets/twitter.png" alt="twitter" />
              <img className="h-10 w-10" src="./src/assets/linkedin.png" alt="linkedin" />

            </div>
          </div> */}


          {/* first section */}
          <div className="w-[80%] flex items-center gap-24">
            <img className="h-80 w-[500px] shadow-lg shadow-[#1e1e1e] border-[1px] border-[#D1D5DB]" src="./src/assets/About_banner.png" alt="banner" />
            <div className="text-[#1d1d1d] text-5xl font-bold">
              <p>About</p>
              <p className="text-xl text-gray-800 font-normal mt-8 ">BizAmplify is an innovative platform designed to empower micro and nano entrepreneurs. It offers personalized business recommendations, connects them with potential investors, and fosters a collaborative community. By addressing financial challenges and offering strategic insights, BizAmplify helps small businesses grow, compete, and succeed in today’s rapidly evolving marketplace.</p>
              <button className="bg-[#67da20] p-2 rounded-lg mt-8 text-lg font-semibold w-56">Contant Us </button>
            </div>
          </div>


          {/* second section */}
          <div className="w-[80%] mt-40 gap-5 flex flex-col items-center p-8 rounded-md bg-[#F7F7F7] border-2 mb-10 border-[#d1d5db] ">
            <p className="text-3xl font-bold ">Meet Our Team</p>
            <div className="grid grid-cols-3 gap-8 ">

              
              <div className="h-96 w-[300px] rounded-lg bg-[#1e1e1e] flex flex-col items-center justify-center shadow-md border-[1px] border-[#D1D5DB] shadow-[#3b3b3b]" >
                <img className="h-40 w-40 rounded-full object-cover" src="./src/assets/rajveer.png" alt="rajveer" />
                <p className="text-2xl font-bold text-white mt-5">Rajveer</p>
                <p className="text-sm text-gray-300 font-normal mt-3">UI / UX Designer | Frontend Developer </p>
              </div>

              <div className="h-96 w-[300px] rounded-lg bg-[#1e1e1e] flex flex-col items-center justify-center shadow-md border-[1px] border-[#D1D5DB] shadow-[#3b3b3b]" >
                <img className="h-40 w-40 rounded-full" src="./src/assets/shubham.jpg" alt="rajveer" />
                <p className="text-2xl font-bold text-white mt-5">Shubham Kumar</p>
                <p className="text-sm text-gray-300 font-normal mt-3">Fullstack Developer | Team Lead</p>
              </div>

              <div className="h-96 w-[300px] rounded-lg bg-[#1e1e1e] flex flex-col items-center justify-center shadow-md border-[1px] border-[#D1D5DB] shadow-[#3b3b3b]" >
                <img className="h-40 w-40 rounded-full object-cover" src="./src/assets/rajat.jpg" alt="rajveer" />
                <p className="text-2xl font-bold text-white mt-5">Rajat Dubey</p>
                <p className="text-sm text-gray-300 font-normal mt-3">Support Member</p>
              </div>
            </div>

          </div>
        </div>

      </div>


    </>
  );
}

export default About;
