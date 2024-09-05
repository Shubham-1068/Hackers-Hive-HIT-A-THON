import React from "react";
import { useState } from "react";

function Feeds() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      logo: "https://d2jnu6hkti1tqv.cloudfront.net/upload/151e7729-1cc5-485a-a29e-49a831fe8538.jpg",
      name: "Amul",
      content:
        "Amul is a multinational cooperative society owned by an astounding 3.6 million milk producers in Gujarat.",
      location: "Gujarat, India",
    },
    {
      id: 2,
      logo: "https://d2jnu6hkti1tqv.cloudfront.net/upload/151e7729-1cc5-485a-a29e-49a831fe8538.jpg",
      name: "Jindal",
      content: "JSPL is an Indian steel company headquartered in New Delhi.",
      location: "New Delhi, India",
    },
    {
      id: 3,
      logo: "https://d2jnu6hkti1tqv.cloudfront.net/upload/151e7729-1cc5-485a-a29e-49a831fe8538.jpg",
      name: "Tata",
      content:
        "The Tata Group is India’s largest conglomerate, with a presence in over 150 countries and operations spanning 100 countries.",
      location: "Mumbai, India",
    },
    {
      id: 4,
      logo: "https://d2jnu6hkti1tqv.cloudfront.net/upload/151e7729-1cc5-485a-a29e-49a831fe8538.jpg",
      name: "Tata",
      content:
        "The Tata Group is India’s largest conglomerate, with a presence in over 150 countries and operations spanning 100 countries.",
      location: "Mumbai, India",
    },
    {
      id: 5,
      logo: "https://d2jnu6hkti1tqv.cloudfront.net/upload/151e7729-1cc5-485a-a29e-49a831fe8538.jpg",
      name: "Tata",
      content:
        "The Tata Group is India’s largest conglomerate, with a presence in over 150 countries and operations spanning 100 countries.",
      location: "Mumbai, India",
    },
    {
      id: 6,
      logo: "https://d2jnu6hkti1tqv.cloudfront.net/upload/151e7729-1cc5-485a-a29e-49a831fe8538.jpg",
      name: "Tata",
      content:
        "The Tata Group is India’s largest conglomerate, with a presence in over 150 countries and operations spanning 100 countries.",
      location: "Mumbai, India",
    },
    {
      id: 7,
      logo: "https://d2jnu6hkti1tqv.cloudfront.net/upload/151e7729-1cc5-485a-a29e-49a831fe8538.jpg",
      name: "Tata",
      content:
        "The Tata Group is India’s largest conglomerate, with a presence in over 150 countries and operations spanning 100 countries.",
      location: "Mumbai, India",
    },
    {
      id: 8,
      logo: "https://d2jnu6hkti1tqv.cloudfront.net/upload/151e7729-1cc5-485a-a29e-49a831fe8538.jpg",
      name: "Tata",
      content:
        "The Tata Group is India’s largest conglomerate, with a presence in over 150 countries and operations spanning 100 countries.",
      location: "Mumbai, India",
    },
    {
      id: 9,
      logo: "https://d2jnu6hkti1tqv.cloudfront.net/upload/151e7729-1cc5-485a-a29e-49a831fe8538.jpg",
      name: "Tata",
      content:
        "The Tata Group is India’s largest conglomerate, with a presence in over 150 countries and operations spanning 100 countries.",
      location: "Mumbai, India",
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
                  className="h-[30%] w-[40%] rounded-md flex justify-between items-center bg-[#3B3B3B] shadow-md shadow-black text-white p-2 border-2 border-gray-500 cursor-pointer"
                >
                  <div className="h-full w-[30%] flex justify-center items-center">
                    <img
                      src={post.logo}
                      alt="logo"
                      className="h-[90%] rounded-lg"
                    />
                  </div>

                  <div className="h-full w-[70%] pl-5 flex flex-col gap-3 relative">
                    <p className="text-2xl font-semibold ">{post.name}</p>
                    <p className="h-[19%] w-full text-md absolute mt-[32px]">
                      <ul className="h-full w-full flex gap-2 items-center flex-wrap text-black">
                        <li className="bg-[#67da20] rounded-md px-2">Milk</li>
                        <li className="bg-[#67da20] rounded-md px-2">Supply</li>
                        <li className="bg-[#67da20] rounded-md px-2">
                          Transport
                        </li>
                      </ul>
                    </p>
                    <p className="text-sm absolute top-[65px]">{post.content}</p>
                    <p className="absolute bottom-0">
                      <p className="text-green-500">
                        Location: {post.location}
                      </p>
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
