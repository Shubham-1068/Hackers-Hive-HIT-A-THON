import React from "react";

function About() {
  return (
    <>
      <div className="h-screen w-[85%] flex flex-col justify-end right-0 fixed bottom-0 ">
        <div className="border-t-[1px] mt-4 border-gray-500 h-[87%] w-full flex flex-col items-center justify-center overflow-y-scroll">

          {/* first section */}
          <div className="w-[80%] flex items-center gap-24">
            <img className="h-80 w-[500px]" src="./src/assets/About_banner.png" alt="banner" />
            <div className="text-[#1d1d1d] text-5xl font-bold">
              <p>About</p>
              <p className="text-sm text-gray-800 font-normal mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, natus itaque error voluptates debitis quasi commodi cumque tenetur rem eveniet fuga in blanditiis et nulla sed? Dolore error voluptatibus nemo maxime. Molestiae molestias soluta cumque. Odit voluptatum provident iusto, maxime nemo dicta consequuntur ipsum eligendi debitis eveniet tempore corrupti illo!</p>
              <button className="bg-[#67da20] p-2 rounded-lg mt-8 text-lg font-semibold w-56">Contant Us</button>
            </div>
          </div>


          

        </div>
      </div>
    </>
  );
}

export default About;
