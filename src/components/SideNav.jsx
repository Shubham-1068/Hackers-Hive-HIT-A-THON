import React from "react";
import { Link } from "react-router-dom";
import Github from "../assets/Github.svg";
import AdSection from "./pages/AdSection";


const adImagesArray = [
  "https://th.bing.com/th/id/OIP.rquVvPOGtBLFHBnlObikpAAAAA?rs=1&pid=ImgDetMain",
  "https://i.pinimg.com/originals/56/26/b7/5626b7d931069cddc5c28b590114ef2b.jpg",
  "https://static.vecteezy.com/system/resources/previews/000/656/664/non_2x/fast-food-restaurant-social-media-advertising-frame-border-background-menu-list-appetizer-food-template-design-creative-watercolor-vector-illustration-design.jpg",
  "https://static.sooperarticles.com/media/b/1/130d274fa5fd83354fbfa14600f8c2f3-mannington-carpet-flooring.jpg",
  "https://cdn1.smartprix.com/rx-iVAXy7ePN-w420-h420/ifb-elite-mxs-7012-7.jpg",
  "https://th.bing.com/th/id/OIP.tjLBMTnEOQMMAORQCnGi8QAAAA?rs=1&pid=ImgDetMain",
  "https://th.bing.com/th/id/OIP.F8YaFHFqFNjTsgM8lYHjlAAAAA?rs=1&pid=ImgDetMain",
];


function SideNav() {
  return (
    <>
      <div className="h-full w-[18vw] flex flex-col left-0 bottom-0">
        <div className="border-t-[1px] border-r-[1px] w-full h-full flex flex-col bg-[#F7F7F7] relative border-gray-400">


          {/* News feed */}
          <div className="w-full p-2 pl-4 h-[70%] flex flex-col gap-4 justify-center items-center border-gray-500 mt-10">
            <p className="text-2xl font-bold bg-white py-[6px] px-[99px] border-b-2 border-gray-400 text-center flex fixed top-20">Trending</p>
            <div className="w-full h-full overflow-y-scroll">
                <marquee direction="up" width="250" height="80%" className="mt-24" behavior="alternate">
              <ul className="flex flex-col font-semibold gap-3 cursor-pointer text-[16px]">
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>Tech Giants Surge</span>
                  <span className="text-gray-500 text-sm">1 hour ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>Startups Skyrocket</span>
                  <span className="text-gray-500 text-sm">2 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>Crypto Market Recovers</span>
                  <span className="text-gray-500 text-sm">3 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>AI in Healthcare</span>
                  <span className="text-gray-500 text-sm">4 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>E-commerce Sales Boost</span>
                  <span className="text-gray-500 text-sm">5 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>SpaceX Launch Success</span>
                  <span className="text-gray-500 text-sm">6 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>Fintech Investments Grow</span>
                  <span className="text-gray-500 text-sm">7 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>EV Sales Surge</span>
                  <span className="text-gray-500 text-sm">8 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>Renewable Energy Boom</span>
                  <span className="text-gray-500 text-sm">9 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>Cloud Services Expand</span>
                  <span className="text-gray-500 text-sm">10 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>Tech Regulations Tighten</span>
                  <span className="text-gray-500 text-sm">11 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>Global Markets Stabilize</span>
                  <span className="text-gray-500 text-sm">12 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>India's Startup Boom</span>
                  <span className="text-gray-500 text-sm">13 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>Green Tech Innovations</span>
                  <span className="text-gray-500 text-sm">14 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>Fintech Disruptions Rise</span>
                  <span className="text-gray-500 text-sm">15 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>Telecom Sector Grows</span>
                  <span className="text-gray-500 text-sm">16 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>Renewable Energy Surge</span>
                  <span className="text-gray-500 text-sm">17 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>AI in Retail Expands</span>
                  <span className="text-gray-500 text-sm">18 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>Space Exploration Advances</span>
                  <span className="text-gray-500 text-sm">19 hours ago</span>
                </li>
                <li className="flex flex-col hover:bg-[#CBCDD1] rounded-lg p-2">
                  <span>Electric Vehicle Sales Spike</span>
                  <span className="text-gray-500 text-sm">20 hours ago</span>
                </li>
              </ul>
                </marquee>
            </div>
          </div>

          <div className="w-full h-[30%] rounded-md bg-white pt-18 cursor-pointer"> 
            <AdSection ads={adImagesArray} />
          </div>




          {/* <a
            href="https://github.com/Shubham-1068/Hackers-Hive-HIT-A-THON"
            target="_blank"
            className="absolute bottom-0 border-t-2 border-gray-500 h-12 w-full flex items-center justify-center px-8"
          >
            <div className="h-full w-full flex items-center justify-center">
              <img src={Github} alt="profile" className="h-8" />

              <p className="h-full w-full text-white hover:text-[#67da20] flex items-center justify-center italic font-semibold">
                #Hackers-Hive
              </p>
            </div>
          </a> */}

        </div>
      </div>
    </>
  );
}

export default SideNav;
