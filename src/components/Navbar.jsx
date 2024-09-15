import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <>
      <div className="h-20 w-screen fixed z-10 bg-[#1e1e1ef5]">
        <div className="h-full w-full flex items-center justify-between">
          <Link to="/feeds" className="h-14 ml-4 mt-1">
            <img src={Logo} alt="logo" className="h-14 ml-4" />
          </Link>

          <div className="mr-2 h-12 w-[450px] flex justify-center items-center gap-4 rounded-full bg-[#3b3b3b]" >
            <input type="text" className="h-8 w-96 rounded-full outline-none text-center" placeholder="Explore businesses" />
            <button className="h-8 w-8 bg-white border-2 border-slate-100 rounded-full flex justify-center items-center">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlYXJjaCI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxwYXRoIGQ9Im0yMSAyMS00LjMtNC4zIi8+PC9zdmc+" alt="search" className="h-5 mb-[1px]" />
            </button>
          </div>


          {/* navigation */}
          <div className="flex items-center gap-4">
            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} className="flex items-center flex-col gap-1 p-2 px-3 rounded-lg hover:bg-[#3b3b3b]">
              <Link to="/feeds" className="flex items-center flex-col gap-1">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNjMmMyYzIiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1ob3VzZSI+PHBhdGggZD0iTTE1IDIxdi04YTEgMSAwIDAgMC0xLTFoLTRhMSAxIDAgMCAwLTEgMXY4Ii8+PHBhdGggZD0iTTMgMTBhMiAyIDAgMCAxIC43MDktMS41MjhsNy01Ljk5OWEyIDIgMCAwIDEgMi41ODIgMGw3IDUuOTk5QTIgMiAwIDAgMSAyMSAxMHY5YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0yeiIvPjwvc3ZnPg=="
                  alt="Home"
                  className="h-7"
                />
                <p className="text-white text-xs">Home</p>
              </Link>

            </motion.div>

            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} className="flex items-center flex-col gap-1 p-2 px-3 rounded-lg hover:bg-[#3b3b3b]">
              <Link to="/finance" className="flex items-center flex-col gap-1">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNjMmMyYzIiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1iYWRnZS1pbmRpYW4tcnVwZWUiPjxwYXRoIGQ9Ik0zLjg1IDguNjJhNCA0IDAgMCAxIDQuNzgtNC43NyA0IDQgMCAwIDEgNi43NCAwIDQgNCAwIDAgMSA0Ljc4IDQuNzggNCA0IDAgMCAxIDAgNi43NCA0IDQgMCAwIDEtNC43NyA0Ljc4IDQgNCAwIDAgMS02Ljc1IDAgNCA0IDAgMCAxLTQuNzgtNC43NyA0IDQgMCAwIDEgMC02Ljc2WiIvPjxwYXRoIGQ9Ik04IDhoOCIvPjxwYXRoIGQ9Ik04IDEyaDgiLz48cGF0aCBkPSJtMTMgMTctNS0xaDFhNCA0IDAgMCAwIDAtOCIvPjwvc3ZnPg=="
                  alt="Home"
                  className="h-7"
                />
                <p className="text-white text-xs">Finance</p>
              </Link>
            </motion.div>

            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} className="flex items-center flex-col gap-1 p-2 px-3 rounded-lg hover:bg-[#3b3b3b]">
              <Link to="/community" className="flex items-center flex-col gap-1">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNjMmMyYzIiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tZXNzYWdlLWNpcmNsZS1tb3JlIj48cGF0aCBkPSJNNy45IDIwQTkgOSAwIDEgMCA0IDE2LjFMMiAyMloiLz48cGF0aCBkPSJNOCAxMmguMDEiLz48cGF0aCBkPSJNMTIgMTJoLjAxIi8+PHBhdGggZD0iTTE2IDEyaC4wMSIvPjwvc3ZnPg=="
                  alt="Home"
                  className="h-7"
                />
                <p className="text-white text-xs">Community</p>
              </Link>
            </motion.div>

            <motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} className="flex items-center flex-col gap-1 p-2 px-3 rounded-lg hover:bg-[#3b3b3b]">
              <Link to="/about" className="flex items-center flex-col gap-1">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNjMmMyYzIiIHN0cm9rZS13aWR0aD0iMS4yNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1pbmZvIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIvPjxwYXRoIGQ9Ik0xMiAxNnYtNCIvPjxwYXRoIGQ9Ik0xMiA4aC4wMSIvPjwvc3ZnPg=="
                  alt="Home"
                  className="h-7"
                />
                <p className="text-white text-xs">About</p>
              </Link>
            </motion.div>
          </div>


          <div className="flex items-center gap-8">
            <motion.img
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.1 }}
              src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg"
              alt="profile"
              className="h-10 rounded-full cursor-pointer"
            />

            <motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.07 }} className=" rounded-full px-3 py-2 mr-10 bg-[#67da20] text-black font-semibold" onClick={() => {localStorage.setItem('islogged', 'false');}}>
              <Link to="/">Sign Out</Link>
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
