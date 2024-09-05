import React from "react";
import { Link } from "react-router-dom";

function Login() {



  return (
    <>
      <div className="w-screen h-screen">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[60%] h-full"></div>

          <div className="w-[40%] h-full border-2 flex justify-center items-center">
            <div className="w-[80%] h-[80%] border-2 flex flex-col justify-around items-center text-white rounded-lg relative">
              <p className="text-3xl font-bold">Login / Sign-in</p>
              <form
                action=""
                method="POST"
                className="w-full h-[70%] flex items-center justify-around flex-col"
              >
                <div className="w-full flex justify-center items-center flex-col gap-6">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-[80%] h-10 border-b-2 border-gray-500 bg-transparent mb-2 outline-none pl-2"
                  />
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-[80%] h-10 border-b-2 border-gray-500 bg-transparent mb-2 outline-none pl-2"
                  />
                </div>

                <div className="w-full">
                  {/* toggle */}
                  
                </div>
                  
                    <button type="submit" className="w-[70%] h-10"><Link to="/feeds" className="w-full h-full border-2 border-gray-500 rounded-md mb-2 flex justify-center items-center text-xl bg-white text-black font-semibold">Login</Link></button>
              </form>
              <div className="w-full flex justify-center items-center">
                <Link to="" className="absolute bottom-10 hover:underline">Forgot Password</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
