import React from "react";

import Github from "../assets/Github.svg";

function SideNav() {
  return (
    <>
      <div className="h-[87%] w-[15%] flex flex-col justify-end fixed left-0 bottom-0">
        <div className="border-t-2 border-gray-500 h-full w-full flex flex-col justify-around bg-[#3b3b3b] relative">
          <div className="h-96 w-full flex flex-col items-end absolute top-0 mt-8">
            <ul className="w-full h-full flex flex-col items-center justify-around">
              <li className="font-bold rounded-md h-12 w-[80%] flex items-center justify-center text-[17px] bg-[#67da20] cursor-pointer">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvdXNlIj48cGF0aCBkPSJNMTUgMjF2LThhMSAxIDAgMCAwLTEtMWgtNGExIDEgMCAwIDAtMSAxdjgiLz48cGF0aCBkPSJNMyAxMGEyIDIgMCAwIDEgLjcwOS0xLjUyOGw3LTUuOTk5YTIgMiAwIDAgMSAyLjU4MiAwbDcgNS45OTlBMiAyIDAgMCAxIDIxIDEwdjlhMiAyIDAgMCAxLTIgMkg1YTIgMiAwIDAgMS0yLTJ6Ii8+PC9zdmc+" alt="home" className="h-6 mr-2" />
                Home
              </li>
              <li className="font-bold rounded-md h-12 w-[80%] flex items-center justify-center text-[17px] bg-[#202124] cursor-pointer text-white">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1iYWRnZS1pbmRpYW4tcnVwZWUiPjxwYXRoIGQ9Ik0zLjg1IDguNjJhNCA0IDAgMCAxIDQuNzgtNC43NyA0IDQgMCAwIDEgNi43NCAwIDQgNCAwIDAgMSA0Ljc4IDQuNzggNCA0IDAgMCAxIDAgNi43NCA0IDQgMCAwIDEtNC43NyA0Ljc4IDQgNCAwIDAgMS02Ljc1IDAgNCA0IDAgMCAxLTQuNzgtNC43NyA0IDQgMCAwIDEgMC02Ljc2WiIvPjxwYXRoIGQ9Ik04IDhoOCIvPjxwYXRoIGQ9Ik04IDEyaDgiLz48cGF0aCBkPSJtMTMgMTctNS0xaDFhNCA0IDAgMCAwIDAtOCIvPjwvc3ZnPg==" alt="Finance" className="h-6 mr-2" />
                Finance
              </li>
              <li className="font-bold rounded-md h-12 w-[80%] flex items-center justify-center text-[17px] bg-[#202124] cursor-pointer text-white">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tZXNzYWdlcy1zcXVhcmUiPjxwYXRoIGQ9Ik0xNCA5YTIgMiAwIDAgMS0yIDJINmwtNCA0VjRjMC0xLjEuOS0yIDItMmg4YTIgMiAwIDAgMSAyIDJ6Ii8+PHBhdGggZD0iTTE4IDloMmEyIDIgMCAwIDEgMiAydjExbC00LTRoLTZhMiAyIDAgMCAxLTItMnYtMSIvPjwvc3ZnPg==" alt="Community" className="h-6 mr-2" />
                Community
              </li>
              <li className="font-bold rounded-md h-12 w-[80%] flex items-center justify-center text-[17px] bg-[#202124] cursor-pointer text-white">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1pbmZvIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik0xMiAxNnYtNCIvPjxwYXRoIGQ9Ik0xMiA4aC4wMSIvPjwvc3ZnPg==" alt="About" className="h-6 mr-2" />
                About Us
              </li>
            </ul>
          </div>
          <div className="absolute bottom-0 border-t-2 border-gray-500 h-12 w-full flex items-center justify-center px-8">
            <a
              href="https://github.com/Shubham-1068/Hackers-Hive-HIT-A-THON"
              target="_blank"
              className="h-full w-1/4 flex items-center justify-center"
            >
              <img src={Github} alt="profile" className="h-8" />
            </a>
            <a
              href="https://github.com/Shubham-1068/Hackers-Hive-HIT-A-THON"
              target="_blank"
              className="h-full w-3/4"
            >
              <p className="h-full w-full text-white flex items-center justify-center italic">
                #Hackers-Hive
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideNav;
