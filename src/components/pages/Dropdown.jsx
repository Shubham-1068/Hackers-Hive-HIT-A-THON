import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, Landmark, MessageCircle } from "lucide-react";

function Dropdown({ pop, setpop }) {
  return (
    <>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ x: [1000, 0] }}
        transition={{ duration: 0.5 }}
        className="w-[90vw] h-[430px] bg-[#dadadae8] absolute top-[85px] right-[5vw] block md:hidden rounded-lg z-40"
      >
        <div className="flex flex-col justify-center items-center gap-1">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            animate={{ x: [1000, 0] }}
        transition={{ duration: 0.5 }}
            className="flex items-center justify-around flex-col gap-1 p-2 px-3 rounded-lg  text-black w-[90%]"
            onClick={() => {
              setpop(!pop);
            }}
          >
            <Link
              to="/feeds"
              className="flex justify-center items-center gap-1 mt-5 bg-white w-[100%] h-12 rounded-lg"
              onClick={() => {
                setpop(!pop);
              }}
            >
              <Home />
              <p className="text-xl">Home</p>
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            animate={{ x: [1000, 0] }}
        transition={{ duration: 0.5 }}
            className="flex items-center justify-around flex-col gap-1 p-2 px-3 rounded-lg  text-black w-[90%]"
            onClick={() => {
              setpop(!pop);
            }}
          >
            <Link
              to="/finance"
              className="flex justify-center items-center gap-1 mt-5 bg-white w-[100%] h-12 rounded-lg"
              onClick={() => {
                setpop(!pop);
              }}
            >
              <Landmark />
              <p className="text-xl">Finance</p>
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            animate={{ x: [1000, 0] }}
        transition={{ duration: 0.5 }}
            className="flex items-center justify-around flex-col gap-1 p-2 px-3 rounded-lg  text-black w-[90%]"
            onClick={() => {
              setpop(!pop);
            }}
          >
            <Link
              to="/community"
              className="flex justify-center items-center gap-1 mt-5 bg-white w-[100%] h-12 rounded-lg"
              onClick={() => {
                setpop(!pop);
              }}
            >
              <MessageCircle />
              <p className="text-xl">Community</p>
            </Link>
          </motion.div>

          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            animate={{ x: [1000, 0] }}
        transition={{ duration: 0.5 }}
            className="flex items-center justify-around flex-col gap-1 p-2 px-3 rounded-lg  text-black w-[90%]"
            onClick={() => {
              setpop(!pop);
            }}
          >
            <Link
              to="/about"
              className="flex justify-center items-center gap-1 mt-5 bg-white w-[100%] h-12 rounded-lg"
              onClick={() => {
                setpop(!pop);
              }}
            >
              <Home />
              <p className="text-xl">About</p>
            </Link>
          </motion.div>
        </div>

      <div className="mt-10 w-full flex items-center relative">
        <motion.img
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg"
          alt="profile"
          className="h-12 rounded-full cursor-pointer absolute left-16"
        />

        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.07 }}
          className=" rounded-full px-3 py-2 mr-10 bg-[#67da20] text-black text-md font-semibold absolute right-5"
          onClick={() => {
            localStorage.setItem("islogged", "false");
          }}
        >
          <Link to="/">Sign Out</Link>
        </motion.button>
      </div>
      </motion.div>

    </>
  );
}

export default Dropdown;
