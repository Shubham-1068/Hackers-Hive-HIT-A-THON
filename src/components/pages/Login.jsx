import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Factory from "../../assets/undraw_factory.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const style = {
    backgroundImage: `url(${Factory})`,
    opacity: 0.9,
  }

  return (
    <>
      {/* Home page banner */}
      <div style={style} className="w-[70vw] h-full bg-center md:mt-10 bg-contain bg-no-repeat fixed hidden sm:block">

        <div className="text-left ml-20">
          <p className="text-6xl m-4 mt-20 font-bold ">BizAmplify</p>

          <p className="text-xl font-normal mt-10">An innovative platform designed to <b className="text-[#67da20] text-2xl">Empower</b>
            <br /> <b>Micro & Nano Businesses</b></p>

          <div className="flex flex-col gap-8 text-xl font-semibold mt-10">
            <p className="flex gap-2">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2N2RhMjAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1jaGVjay1iaWciPjxwYXRoIGQ9Ik0yMS44MDEgMTBBMTAgMTAgMCAxIDEgMTcgMy4zMzUiLz48cGF0aCBkPSJtOSAxMSAzIDNMMjIgNCIvPjwvc3ZnPg=="
                alt="check"
              />{" "}
              Personalized Feed
            </p>
            <p className="flex gap-2">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2N2RhMjAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1jaGVjay1iaWciPjxwYXRoIGQ9Ik0yMS44MDEgMTBBMTAgMTAgMCAxIDEgMTcgMy4zMzUiLz48cGF0aCBkPSJtOSAxMSAzIDNMMjIgNCIvPjwvc3ZnPg=="
                alt="check"
              />{" "}
              Financial Support
            </p>
            <p className="flex gap-2">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOCIgaGVpZ2h0PSIyOCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM2N2RhMjAiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNpcmNsZS1jaGVjay1iaWciPjxwYXRoIGQ9Ik0yMS44MDEgMTBBMTAgMTAgMCAxIDEgMTcgMy4zMzUiLz48cGF0aCBkPSJtOSAxMSAzIDNMMjIgNCIvPjwvc3ZnPg=="
                alt="check"
              />{" "}
              Enganging Community
            </p>
          </div>
        </div>
      </div>

      {/* login popup */}
      <div
        id="login-popup"
        tabIndex="-1"
        className="bg-[#F6F6F6] md:mt-0 top-0 right-0 z-50 h-screen md:fixed fixed md:flex items-center justify-center p-5 mt-40 sm:p-10 md:p-14 w-full sm:w-[90vw] md:w-[50vw] lg:w-[30vw] hidden"
      >
        <div className="relative w-full max-w-md h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow">
            {/* header */}

            <div className="p-5">
              <div className="text-center">
                <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                  Login
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-2">
                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                  <img
                    src="https://www.svgrepo.com/show/512317/github-142.svg"
                    alt="GitHub"
                    className="h-[18px] w-[18px]"
                  />
                  Continue with GitHub
                </button>

                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="h-[18px] w-[18px]"
                  />
                  Continue with Google
                </button>

                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                  <img
                    src="https://www.svgrepo.com/show/448234/linkedin.svg"
                    alt="LinkedIn"
                    className="h-[18px] w-[18px]"
                  />
                  Continue with LinkedIn
                </button>
              </div>

              <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                <div className="h-px w-full bg-slate-200"></div>
                OR
                <div className="h-px w-full bg-slate-200"></div>
              </div>

              <form className="w-full">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  placeholder="Email Address"
                />
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  placeholder="Password"
                />
                <p className="mb-3 mt-2 text-sm text-gray-500">
                  <Link to="/forgot-password" className="text-blue-800 hover:underline hover:text-blue-600">
                    Reset your password?
                  </Link>
                </p>
                <Link
                  to="/feeds"
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg hover:bg-[#4285f4] bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                >
                  Continue
                </Link>
              </form>

              <div className="mt-6 text-center text-sm text-slate-600">
                Don't have an account?
                <Link to="/signup" className="font-medium hover:underline text-[#4285f4]">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* for small screens */}

      <p className="fixed top-5 w-screen h-32 flex justify-center items-center flex-col z-20 md:hidden">
          <p className="text-[10vw] font-bold">BizAmplify</p>
          <p className="text-slate-600 text-md">Empower your business</p>
      </p>
      <div style={style} className="w-screen h-screen fixed top-0 md:hidden"></div>

      <div
        id="login-popup"
        className="bg-transparent p-5 w-screen h-screen flex justify-center relative md:hidden"
      >
        <div className="relative w-full max-w-md h-full md:h-auto">
          <div className="absolute bottom-16 w-full bg-[#bebebeea] rounded-lg shadow">
            {/* header */}

            <div className="p-5">
              <div className="text-center">
                <p className="mb-3 text-2xl font-semibold leading-5 text-slate-900">
                  Login
                </p>
              </div>

              <div className="mt-7 flex flex-col gap-2">
                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                  <img
                    src="https://www.svgrepo.com/show/512317/github-142.svg"
                    alt="GitHub"
                    className="h-[18px] w-[18px]"
                  />
                  Continue with GitHub
                </button>

                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="h-[18px] w-[18px]"
                  />
                  Continue with Google
                </button>

                <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                  <img
                    src="https://www.svgrepo.com/show/448234/linkedin.svg"
                    alt="LinkedIn"
                    className="h-[18px] w-[18px]"
                  />
                  Continue with LinkedIn
                </button>
              </div>

              <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                <div className="h-px w-full bg-slate-200"></div>
                OR
                <div className="h-px w-full bg-slate-200"></div>
              </div>

              <form className="w-full">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  placeholder="Email Address"
                />
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1"
                  placeholder="Password"
                />
                <p className="mb-3 mt-2 text-sm text-gray-500">
                  <Link to="/forgot-password" className="text-blue-800 hover:underline hover:text-blue-600">
                    Reset your password?
                  </Link>
                </p>
                <Link
                  to="/feeds"
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-lg hover:bg-[#4285f4] bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400"
                >
                  Continue
                </Link>
              </form>

              <div className="mt-6 text-center text-sm text-slate-600">
                Don't have an account?
                <Link to="/signup" className="font-medium hover:underline text-[#4285f4]">
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Login;
