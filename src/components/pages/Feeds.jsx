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
      tags: ["Snacks", "Sweets",],
    },
    {
      id: 2,
      logo: "https://5.imimg.com/data5/SELLER/Default/2020/10/WL/HI/FO/115160227/new-product-500x500.jpeg",
      name: "Lijjat Papad",
      content:
        "Lijjat Papad is a cooperative founded by women, producing papads and snacks, empowering rural women across India.",
      location: "Mumbai, India",
      tags: ["Snacks", "food"],
    },
    {
      id: 3,
      logo: "https://th.bing.com/th/id/OIP.igTwTZDMhVV3ROhIjdCoCAAAAA?rs=1&pid=ImgDetMain",
      name: "Haldiram's",
      content:
        "Haldiram's is a family-owned business known for producing traditional Indian snacks and sweets with a wide distribution network.",
      location: "Nagpur, India",
      tags: ["Snacks", "food",],

    },
    {
      id: 4,
      logo: "https://th.bing.com/th/id/R.023290a56c5529598cfc4df122fe11ee?rik=qhYnQvCBVNjiNg&riu=http%3a%2f%2fthesuccesstoday.com%2fwp-content%2fuploads%2f2020%2f09%2fMOTHER-DAIRY.png&ehk=ve1dcC1QmA6bPqiGls5TBfFTQRm4DMxZONLFxQctpak%3d&risl=&pid=ImgRaw&r=0",
      name: "Mother Dairy",
      content:
        "Mother Dairy is a subsidiary of the National Dairy Development Board, supplying fresh dairy products across India.",
      location: "Noida, India",
      tags: ["Snacks", "sweet",],
    },
    {
      id: 5,
      logo: "https://mir-s3-cdn-cf.behance.net/projects/404/195d7f109529025.Y3JvcCwyMDI1LDE1ODQsMzk2LDA.png",
      name: "Paper Boat",
      content:
        "Paper Boat focuses on traditional Indian beverages with a modern twist, promoting nostalgia with every sip.",
      location: "Bangalore, India",
      tags: ["Beverages",],
    },
    {
      id: 6,
      logo: "https://images.yourstory.com/cs/images/companies/FotoJet-2021-04-11T123210-1618124562746.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff",
      name: "Jaipur Rugs",
      content:
        "Jaipur Rugs works with rural artisans across India to produce high-quality handmade rugs, empowering local communities.",
      location: "Jaipur, India",
      tags: ["Rugs", "Textiles",],
    },
    {
      id: 7,
      logo: "https://d2j6dbq0eux0bg.cloudfront.net/images/44067575/4444678621.jpg",
      name: "Chitale Bandhu",
      content:
        "Chitale Bandhu is a Pune-based snack and sweets company that has been serving authentic Maharashtrian products for decades.",
      location: "Pune, India",
      tags: ["Snacks", "Sweets",],

    },
    {
      id: 8,
      logo: "https://www.dailypioneer.com/uploads/2018/story/images/big/patanjali-enters-dairy-business--eyes-sales-worth-rs-1-000-cr-next-fiscal-2018-09-13.jpg",
      name: "Patanjali",
      content:
        "Patanjali Ayurved focuses on natural and Ayurvedic products, from personal care to food, revolutionizing the Indian market.",
      location: "Haridwar, India",
      tags: ["Ayurvedic", "Health",],
    },
    {
      id: 9,
      logo: "https://cdn.theorg.com/b46c26fc-c1e2-4c27-9c11-3593dabfb31a_medium.jpg",
      name: "Balaji Wafers",
      content:
        "Balaji Wafers is a leading snack manufacturer in India, known for its wide range of chips and wafers.",
      location: "Rajkot, India",
      tags: ["Snacks", "Chips",],
    },
    {
      id: 10,
      logo: "https://th.bing.com/th/id/OIP.6Yj_0rh1fDK8REApVUIftwHaHa?rs=1&pid=ImgDetMain",
      name: "Bikanervala",
      content:
        "Bikanervala is an Indian chain of sweet shops and restaurants, offering traditional Indian snacks and sweets worldwide.",
      location: "Bikaner, India",
      tags: ["Snacks", "Sweets",],
    },
    {
      id: 11,
      logo: "https://www.foodtechnetwork.in/wp-content/uploads/2024/01/OIP-4.jpg",
      name: "Vadilal",
      content:
        "Vadilal is an Indian ice cream brand known for its wide range of frozen desserts and innovative flavors.",
      location: "Ahmedabad, India",
      tags: ["Frozen", "Dessert",],
    },
    {
      id: 12,
      logo: "https://brandwiki.ru/up/brands/nirav-modi.png",
      name: "Nirav Modi Jewellery",
      content:
        "Nirav Modi is a renowned luxury jewelry brand known for its high-end diamond collections and craftsmanship.",
      location: "Mumbai, India",
      tags: ["Jewellery", "Diamonds",],
    },
    {
      id: 13,
      logo: "https://gvkone.com/wp-content/uploads/2021/08/GVKWB_Keventers-78.png",
      name: "Keventers",
      content:
        "Keventers is a well-known milkshake brand with a heritage of producing dairy-based beverages, now popular among youth.",
      location: "Delhi, India",
      tags: ["Milkshake", "Dairy",],
    },
    {
      id: 14,
      logo: "https://mir-s3-cdn-cf.behance.net/projects/max_808/7ee47c183358657.Y3JvcCwxMjc0LDk5Niw1OSw5.png",
      name: "FabIndia",
      content:
        "FabIndia connects rural artisans with urban consumers, offering a range of handcrafted products rooted in Indian culture.",
      location: "Delhi, India",
      tags: ["Handmade", "Products",],
    },
    {
      id: 15,
      logo: "https://img.freepik.com/premium-vector/flat-coffee-day-logo-design_530862-617.jpg?w=1480",
      name: "Cafe Coffee Day",
      content:
        "Cafe Coffee Day is one of India's largest coffee chains, serving freshly brewed coffee and snacks across the country.",
      location: "Bangalore, India",
      tags: ["Coffee", "Snacks",],
    },
    {
      id: 16,
      logo: "https://images.yourstory.com/cs/images/companies/Screenshot2022-05-27at12-1653591366774.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff",
      name: "Blue Tokai Coffee",
      content:
        "Blue Tokai Coffee specializes in freshly roasted, artisanal coffee sourced from Indian coffee plantations.",
      location: "Delhi, India",
      tags: ["Coffee", "Roasted",],
    },
    {
      id: 17,
      logo: "https://cdn.anscommerce.com/live/image/ekart/banner/623_202402260326_Happilo.jpg",
      name: "Happilo",
      content:
        "Happilo provides a range of premium dried fruits, nuts, and healthy snacks, sourced and packaged sustainably.",
      location: "Bangalore, India",
      tags: ["Snacks", "Fruits",],
    },
    {
      id: 18,
      logo: "https://th.bing.com/th/id/OIP.JmMB9zdujC21-wfrQgNA4wHaFI?rs=1&pid=ImgDetMain",
      name: "Khadi India",
      content:
        "Khadi India promotes handspun and handwoven textiles, supporting artisans and empowering rural craftsmanship.",
      location: "Delhi, India",
      tags: ["Textiles", "Handspun",],
    },
    {
      id: 19,
      logo: "https://mir-s3-cdn-cf.behance.net/projects/404/1d81e2119433171.609d410db6e02.png",
      name: "Naturals Ice Cream",
      content:
        "Naturals Ice Cream is a popular Indian ice cream brand known for using real fruits and ingredients in their flavors.",
      location: "Mumbai, India",
      tags: ["Ice Cream", "Fruits",],
    },
    {
      id: 20,
      logo: "https://yt3.ggpht.com/a/AGF-l7835tpeZ0Fe4cSflOsRSJ_5qDdGkqszFTCNUQ=s900-mo-c-c0xffffffff-rj-k-no",
      name: "Sri Sri Tattva",
      content:
        "Sri Sri Tattva produces a range of Ayurvedic and organic health products, promoting wellness through traditional methods.",
      location: "Bangalore, India",
      tags: ["Ayurvedic", "Products",],
    },

  ]);

  return (
    <>
      <div className="h-screen w-[85%] flex flex-col justify-end fixed right-0 bottom-0">
        <div className=" h-[87%] w-full flex items-center justify-center">
          <div className="mt-10 h-[95%] w-[98%] flex justify-center items-center flex-wrap gap-[7%] overflow-auto scroll">
            {posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className="h-[30%] w-[40%] rounded-md flex justify-between items-center bg-[#e1e1e146]  border-[1px] text-black p-2  border-1 border-gray-300 cursor-pointer"
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
                        {post.tags.map((tag, index) => (
                          <li key={index} className="bg-[#cbcdd1] rounded-md px-2">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </p>
                    <p className="text-sm absolute top-[65px]">{post.content}</p>
                    <p className="absolute bottom-0">
                      <p className="text-[#67DA20]">
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
