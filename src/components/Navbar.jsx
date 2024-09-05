import React from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  return (
    <>
      <div className="h-20 w-screen fixed top-2 z-10">
        <div className="h-full w-full flex items-center justify-between">
          <img src={Logo} alt="logo" className="h-14 ml-4 mt-1" />

          <div className="mr-2 h-12 w-[450px] flex justify-center items-center gap-4 rounded-full bg-[#3b3b3b]" >
            <input type="text" className="h-8 w-96 rounded-full outline-none text-center" />
            <button className="h-8 w-8 bg-white border-2 border-slate-100 rounded-full flex justify-center items-center">
              <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlYXJjaCI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxwYXRoIGQ9Im0yMSAyMS00LjMtNC4zIi8+PC9zdmc+" alt="search" className="h-5 mb-[1px]" />
            </button>
          </div>

          <div className="flex items-center gap-8">
            <img
              src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg"
              alt="profile"
              className="h-10 rounded-full"
            />

            <button className=" rounded-full px-3 py-2 mr-10 bg-[#67da20] text-black font-semibold">
              Sign-out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
