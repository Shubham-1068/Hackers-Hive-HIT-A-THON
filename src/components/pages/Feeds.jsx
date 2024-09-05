import React from "react";
import { useState } from "react";

function Feeds() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      content: "Hello world",
    },
    {
      id: 2,
      content: "Hello world",
    },
    {
      id: 3,
      content: "Hello world",
    },
    {
      id: 4,
      content: "Hello world",
    },
    {
      id: 5,
      content: "Hello world",
    },
    {
      id: 6,
      content: "Hello world",
    },
    {
      id: 7,
      content: "Hello world",
    },
    {
      id: 8,
      content: "Hello world",
    },
    {
      id: 9,
      content: "Hello world",
    },
    {
      id: 10,
      content: "Hello world",
    },
  ]);

  return (
    <>
      <div className="h-screen w-[85%] flex flex-col justify-end fixed right-0 bottom-0">
        <div className="border-t-2  border-gray-500 h-[87%] w-full flex items-center justify-center">
          <div className="mt-10 h-[95%] w-[98%] flex justify-center items-center flex-wrap gap-[7%] overflow-auto scroll">
            {posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className="h-[30%] w-[40%] rounded-md flex justify-between items-center bg-[#3B3B3B] shadow-md shadow-black text-white p-2 border-2 border-gray-500"
                >
                  <div className="h-full w-[30%] flex justify-center items-center">
                    <img
                      src="https://d2jnu6hkti1tqv.cloudfront.net/upload/151e7729-1cc5-485a-a29e-49a831fe8538.jpg"
                      alt="profiles"
                      className="h-[90%] rounded-lg"
                    />
                  </div>
                  
                  <div className="h-full w-[70%] pl-5 flex flex-col gap-3 relative">
                      {/* {post.content} */}
                      <p className="text-2xl font-semibold">Jindal & Jindal</p>
                      <p className="h-[19%] w-full text-md">
                        <ul className="h-full w-full flex gap-2 items-center flex-wrap text-black">
                          <li className="bg-[#67da20] rounded-md px-2">Textile</li>
                          {/* <li className="bg-[#67da20] rounded-md px-2">Textile</li>
                          <li className="bg-[#67da20] rounded-md px-2">Textile</li>
                          <li className="bg-[#67da20] rounded-md px-2">Textile</li> */}
                        </ul>
                      </p>
                      <p className="absolute bottom-0">
                        <p className="mb-2 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi repellendus corrupti ad aperiam</p>
                        <p className="text-green-500">Location: Bihar</p>
                      </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Feeds;
