import React, { useEffect } from "react";
import { useState } from "react";
import PopInfo from "./PopInfo";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SquareChartGantt } from "lucide-react";

function Feeds() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      logo: "https://d2jnu6hkti1tqv.cloudfront.net/upload/151e7729-1cc5-485a-a29e-49a831fe8538.jpg",
      name: "Amul",
      content:
        "Amul is a multinational cooperative society owned by an astounding 3.6 million milk producers in Gujarat.",
      location: "Gujarat, India",
      tags: ["Snacks", "Sweets"],
      banner:
        "https://pbs.twimg.com/profile_banners/450539646/1711126194/1080x360",
      summary:
        "Amul, headquartered in Gujarat, is a leading dairy cooperative known for its extensive range of dairy products. Founded in 1946, Amul has revolutionized the dairy industry with its cooperative model and wide distribution network.",
      email: "contact@amul.com",
      phone: "+91-9898989898",
      website: "https://www.amul.com/",
      instagram: "https://www.instagram.com/amul/",
      twitter: "https://x.com/Amul_Coop",
      linkedin: "https://www.linkedin.com/company/amul/",
      team: "18000",
      estd: "1946",
    },
    {
      id: 2,
      logo: "https://5.imimg.com/data5/SELLER/Default/2020/10/WL/HI/FO/115160227/new-product-500x500.jpeg",
      name: "Lijjat Papad",
      content:
        "Lijjat Papad is a cooperative founded by women, producing papads and snacks, empowering rural women across India.",
      location: "Mumbai, India",
      tags: ["Snacks", "Food"],
      banner: "https://www.zifiti.com/images/itemImgOrig/1297/1297_2267462.jpg",
      summary:
        "Lijjat Papad, based in Mumbai, is a pioneering cooperative that empowers women by producing a variety of papads and snacks. Established in 1959, it is celebrated for its commitment to quality and social impact.",
      email: "info@lijjatpapad.com",
      phone: "+91-9876543210",
      website: "https://lijjat.com/",
      instagram: "https://www.instagram.com/lijjatpapadofficial/",
      twitter: "https://twitter.com/lijjatpapad",
      linkedin:
        "https://www.linkedin.com/company/shri-mahila-griha-udyog-lijjat-papad---india/?originalSubdomain=in",
      team: "250",
      estd: "1959",
    },
    {
      id: 3,
      logo: "https://th.bing.com/th/id/OIP.igTwTZDMhVV3ROhIjdCoCAAAAA?rs=1&pid=ImgDetMain",
      name: "Haldiram's",
      content:
        "Haldiram's is a family-owned business known for producing traditional Indian snacks and sweets with a wide distribution network.",
      location: "Nagpur, India",
      tags: ["Snacks", "Food"],
      banner:
        "https://pbs.twimg.com/profile_banners/2483772523/1574413007/1500x500",
      website: "https://www.haldiram.com/",
      summary:
        "Haldiram's, based in Nagpur, is a renowned Indian snack and sweet manufacturer known for its traditional recipes and extensive product range. Since 1937, it has been a staple in Indian households.",
      email: "contact@haldirams.com",
      phone: "+91-9876543211",
      instagram: "https://www.instagram.com/haldirams.official/",
      twitter: "https://x.com/NagpurHaldirams",
      linkedin:
        "https://www.linkedin.com/company/haldiram-snacks-pvt-ltd-/?originalSubdomain=in",
      team: "5000",
      estd: "1937",
    },
    {
      id: 4,
      logo: "https://th.bing.com/th/id/R.023290a56c5529598cfc4df122fe11ee?rik=qhYnQvCBVNjiNg&riu=http%3a%2f%2fthesuccesstoday.com%2fwp-content%2fuploads%2f2020%2f09%2fMOTHER-DAIRY.png&ehk=ve1dcC1QmA6bPqiGls5TBfFTQRm4DMxZONLFxQctpak%3d&risl=&pid=ImgRaw&r=0",
      name: "Mother Dairy",
      content:
        "Mother Dairy is a subsidiary of the National Dairy Development Board, supplying fresh dairy products across India.",
      location: "Noida, India",
      tags: ["Snacks", "Sweet"],
      banner:
        "https://pbs.twimg.com/profile_banners/557162010/1717220257/1080x360",
      summary:
        "Mother Dairy, headquartered in Noida, is a leading dairy products provider in India. Established in 1974, it is renowned for its high-quality milk and dairy products.",
      email: "info@motherdairy.com",
      phone: "+91-9876543212",
      website: "https://www.motherdairy.com/",
      instagram: "https://www.instagram.com/motherdairy/",
      twitter: "https://x.com/MotherDairyMilk",
      linkedin:
        "https://www.linkedin.com/company/motherdairy/?originalSubdomain=in",
      team: "8000",
      estd: "1974",
    },
    {
      id: 5,
      logo: "https://mir-s3-cdn-cf.behance.net/projects/404/195d7f109529025.Y3JvcCwyMDI1LDE1ODQsMzk2LDA.png",
      name: "Paper Boat",
      content:
        "Paper Boat focuses on traditional Indian beverages with a modern twist, promoting nostalgia with every sip.",
      location: "Bangalore, India",
      tags: ["Beverages"],
      banner:
        "https://static.startuptalky.com/2021/05/About-Paper-Boat-StartupTalky-1.jpg",
      summary:
        "Paper Boat, based in Bangalore, is known for its innovative approach to traditional Indian beverages. Launched in 2013, the brand blends nostalgic flavors with modern packaging.",
      email: "contact@paperboatdrinks.com",
      phone: "+91-9876543213",
      website: "https://www.paperboatfoods.com/",
      instagram: "https://www.instagram.com/paperboatdrinks/",
      twitter: "https://x.com/paperboatdrinks",
      linkedin:
        "https://www.linkedin.com/company/hector-beverages-pvt-ltd/?originalSubdomain=in",
      team: "200",
      estd: "2013",
    },
    {
      id: 6,
      logo: "https://images.yourstory.com/cs/images/companies/FotoJet-2021-04-11T123210-1618124562746.jpg?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff",
      name: "Jaipur Rugs",
      content:
        "Jaipur Rugs works with rural artisans across India to produce high-quality handmade rugs, empowering local communities.",
      location: "Jaipur, India",
      tags: ["Rugs", "Textiles"],
      banner:
        "https://pbs.twimg.com/profile_banners/54876460/1677241550/1500x500",
      summary:
        "Jaipur Rugs, based in Jaipur, is known for its handcrafted rugs made by rural artisans. Since 1978, it has empowered local communities through its sustainable business practices.",
      email: "info@jaipurrugs.co.in",
      phone: "+91-9876543214",
      website: "https://www.jaipurrugs.com/",
      instagram: "https://www.instagram.com/jaipurrugs/",
      twitter: "https://x.com/JaipurRugs",
      linkedin: "https://www.linkedin.com/company/jaipur-rugs-group/",
      team: "1500",
      estd: "1978",
    },
    {
      id: 7,
      logo: "https://d2j6dbq0eux0bg.cloudfront.net/images/44067575/4444678621.jpg",
      name: "Chitale Bandhu",
      content:
        "Chitale Bandhu is a Pune-based snack and sweets company that has been serving authentic Maharashtrian products for decades.",
      location: "Pune, India",
      tags: ["Snacks", "Sweets"],
      banner:
        "https://pbs.twimg.com/profile_banners/2784187304/1724767814/1500x500",
      summary:
        "Chitale Bandhu, located in Pune, is a renowned manufacturer of Maharashtrian snacks and sweets. Established in 1950, it is celebrated for its traditional recipes and quality.",
      email: "info@chitalebandhu.com",
      phone: "+91-9876543215",
      website: "https://www.chitalebandhu.in/",
      instagram: "https://www.instagram.com/chitale.bandhu/",
      twitter: "https://x.com/ChitaleBandhu",
      linkedin:
        "https://www.linkedin.com/company/chitale-bandhu-mithaiwale/?originalSubdomain=in",
      team: "600",
      estd: "1950",
    },
    {
      id: 8,
      logo: "https://static.vecteezy.com/system/resources/previews/022/424/388/original/patanjali-editorial-logo-free-vector.jpg",
      name: "Patanjali",
      content:
        "Patanjali Ayurved focuses on natural and Ayurvedic products, from personal care to food, revolutionizing the Indian market.",
      location: "Haridwar, India",
      tags: ["Ayurvedic", "Health"],
      banner:
        "https://pbs.twimg.com/profile_banners/708148004797030401/1698387681/1500x500",
      summary:
        "Patanjali Ayurved, headquartered in Haridwar, offers a wide range of Ayurvedic and natural products. Founded in 1995, it has made a significant impact on the Indian market with its health-focused approach.",
      email: "contact@patanjaliayurved.org",
      phone: "+91-9876543216",
      website: "https://www.patanjaliayurved.net/",
      instagram: "https://www.instagram.com/patanjaliproducts/",
      twitter: "https://x.com/PypAyurved",
      linkedin:
        "https://www.linkedin.com/company/patanjaliayurved/?originalSubdomain=in",
      team: "10000",
      estd: "1995",
    },
    {
      id: 9,
      logo: "https://cdn.theorg.com/b46c26fc-c1e2-4c27-9c11-3593dabfb31a_medium.jpg",
      name: "Balaji Wafers",
      content:
        "Balaji Wafers is a leading snack manufacturer in India, known for its wide range of chips and wafers.",
      location: "Rajkot, India",
      tags: ["Snacks", "Chips"],
      banner:
        "https://pbs.twimg.com/profile_banners/756723915347652608/1624162913/1500x500",
      summary:
        "Balaji Wafers, based in Rajkot, is a top snack manufacturer specializing in chips and wafers. Since 1991, it has been a favorite for its quality and variety.",
      email: "info@balajiwafers.com",
      phone: "+91-9876543217",
      website: "https://www.balajiwafers.com/",
      instagram: "https://www.instagram.com/balajiwafers/",
      twitter: "https://x.com/Balaji_Wafers",
      linkedin:
        "https://www.linkedin.com/company/balaji-wafers-pvt-ltd/?originalSubdomain=in",
      team: "2000",
      estd: "1991",
    },
    {
      id: 10,
      logo: "https://th.bing.com/th/id/OIP.6Yj_0rh1fDK8REApVUIftwHaHa?rs=1&pid=ImgDetMain",
      name: "Bikanervala",
      content:
        "Bikanervala is an Indian chain of sweet shops and restaurants, offering traditional Indian snacks and sweets worldwide.",
      location: "Bikaner, India",
      tags: ["Snacks", "Sweets"],
      banner:
        "https://wealthquint.com/wp-content/uploads/2021/07/Bikanervala.jpg",
      summary:
        "Bikanervala, headquartered in Bikaner, is a well-known chain of sweet shops and restaurants offering a variety of traditional Indian snacks and sweets. Established in 1950, it has a strong presence globally.",
      email: "info@bikanervala.in",
      phone: "+91-9876543218",
      website: "https://bikanervala.com/",
      instagram: "https://www.instagram.com/bikanervala.in/",
      twitter: "https://x.com/BikanervalaIN",
      linkedin: "https://www.linkedin.com/company/bikanervalaindia/",
      team: "3000",
      estd: "1950",
    },
    {
      id: 11,
      logo: "https://www.foodtechnetwork.in/wp-content/uploads/2024/01/OIP-4.jpg",
      name: "Vadilal",
      content:
        "Vadilal is an Indian ice cream brand known for its wide range of frozen desserts and innovative flavors.",
      location: "Ahmedabad, India",
      tags: ["Frozen", "Dessert"],
      banner:
        "https://pbs.twimg.com/profile_banners/352178798/1720605443/1080x360",
      summary:
        "Vadilal, based in Ahmedabad, is a leading ice cream manufacturer known for its diverse range of frozen desserts. Founded in 1907, it has a reputation for quality and innovation.",
      email: "info@vadilalgroup.com",
      phone: "+91-9876543219",
      website: "https://vadilalicecreams.com/",
      instagram: "https://www.instagram.com/vadilalicecreams/",
      twitter: "https://x.com/icecreamvadilal",
      linkedin:
        "https://www.linkedin.com/company/vadilal-industries-limited/?originalSubdomain=in",
      team: "1000",
      estd: "1907",
    },
    {
      id: 12,
      logo: "https://brandwiki.ru/up/brands/nirav-modi.png",
      name: "Nirav Modi Jewellery",
      content:
        "Nirav Modi is a renowned luxury jewelry brand known for its high-end diamond collections and craftsmanship.",
      location: "Mumbai, India",
      tags: ["Jewellery", "Diamonds"],
      summary:
        "Nirav Modi, based in Mumbai, is a prestigious luxury jewelry brand specializing in high-end diamond collections and exquisite craftsmanship. Since 2008, it has been a symbol of luxury and elegance.",
      email: "info@niravmodi.com",
      phone: "+91-9876543220",
      website: "https://www.niravmodi.com/",
      instagram: "https://www.instagram.com/niravmodijewels/",
      twitter: "https://twitter.com/niravmodi",
      linkedin: "https://www.linkedin.com/company/nirav-modi/",
      team: "500",
      estd: "2008",
    },
    {
      id: 13,
      logo: "https://gvkone.com/wp-content/uploads/2021/08/GVKWB_Keventers-78.png",
      name: "Keventers",
      content:
        "Keventers is a well-known milkshake brand with a heritage of producing dairy-based beverages, now popular among youth.",
      location: "Delhi, India",
      tags: ["Milkshake", "Dairy"],
      banner:
        "https://pbs.twimg.com/profile_banners/1546700586/1698919244/1500x500",
      summary:
        "Keventers, based in Delhi, is famous for its rich and creamy milkshakes. Founded in 1925, the brand has a long history and continues to be a favorite for dairy-based beverages.",
      email: "contact@keventers.com",
      phone: "+91-9876543221",
      website: "https://www.keventers.com/",
      instagram: "https://www.instagram.com/keventers/",
      twitter: "https://x.com/Keventersverse",
      linkedin:
        "https://www.linkedin.com/company/keventers/?originalSubdomain=in",
      team: "100",
      estd: "1925",
    },
    {
      id: 14,
      logo: "https://mir-s3-cdn-cf.behance.net/projects/max_808/7ee47c183358657.Y3JvcCwxMjc0LDk5Niw1OSw5.png",
      name: "FabIndia",
      content:
        "FabIndia connects rural artisans with urban consumers, offering a range of handcrafted products rooted in Indian culture.",
      location: "Delhi, India",
      tags: ["Handmade", "Products"],
      banner:
        "https://pbs.twimg.com/profile_banners/63756087/1726122107/1500x500",
      summary:
        "FabIndia, based in Delhi, bridges the gap between rural artisans and urban consumers. Founded in 1960, it offers a wide range of handcrafted products rooted in Indian culture.",
      email: "info@fabindia.net",
      phone: "+91-9876543222",
      website: "https://www.fabindia.com/",
      instagram: "https://www.instagram.com/fabindiaofficial/",
      twitter: "https://x.com/FabindiaNews",
      linkedin:
        "https://www.linkedin.com/company/fabindia-ltd/?originalSubdomain=in",
      team: "1200",
      estd: "1960",
    },
    {
      id: 15,
      logo: "https://img.freepik.com/premium-vector/flat-coffee-day-logo-design_530862-617.jpg?w=1480",
      name: "Cafe Coffee Day",
      content:
        "Cafe Coffee Day is one of India's largest coffee chains, serving freshly brewed coffee and snacks across the country.",
      location: "Bangalore, India",
      tags: ["Coffee", "Snacks"],
      banner:
        "https://pbs.twimg.com/profile_banners/97389694/1724326348/1500x500",
      summary:
        "Cafe Coffee Day, headquartered in Bangalore, is a prominent coffee chain known for its wide range of coffee and snacks. Since 1996, it has become a popular spot for coffee enthusiasts across India.",
      email: "contact@cafecoffeeday.com",
      phone: "+91-9876543223",
      website: "https://www.cafecoffeeday.com/",
      instagram: "https://www.instagram.com/cafecoffeeday/",
      twitter: "https://x.com/CafeCoffeeDay",
      linkedin: "https://www.linkedin.com/company/cafe-coffee-day/",
      team: "4000",
      estd: "1996",
    },
    {
      id: 16,
      logo: "https://images.yourstory.com/cs/images/companies/Screenshot2022-05-27at12-1653591366774.png?fm=auto&ar=1:1&mode=fill&fill=solid&fill-color=fff",
      name: "Tata Tea",
      content:
        "Tata Tea is one of India's leading tea brands, known for its quality and variety of teas.",
      location: "Kolkata, India",
      tags: ["Tea"],
      banner:
        "https://pbs.twimg.com/profile_banners/2179307928/1722842285/1500x500",
      summary:
        "Tata Tea, based in Kolkata, is a leading tea brand in India. Established in 1962, it offers a diverse range of high-quality teas and has a strong presence in the Indian market.",
      email: "info@tatatea.com",
      phone: "+91-9876543224",
      website: "https://www.tataconsumer.com/brands/tea/tata-tea",
      instagram: "https://www.instagram.com/tataconsumerproducts/",
      twitter: "https://x.com/TataConsumer",
      linkedin:
        "https://www.linkedin.com/company/tata-consumer-products/?viewAsMember=true",
      team: "3000",
      estd: "1962",
    },
    {
      id: 17,
      logo: "https://vectorseek.com/wp-content/uploads/2023/09/Haldiram-Logo-Vector.svg-.png",
      name: "Haldiram's Nagpur",
      content:
        "Haldiram's Nagpur is a regional branch of the Haldiram's chain, offering a range of traditional Indian snacks and sweets.",
      location: "Nagpur, India",
      tags: ["Snacks", "Sweets"],
      banner:
        "https://www.sonnamera.com.sg/var/ezdemo_site/storage/images/media/images/site-image/brands/haldirams-banner/7948-1-eng-US/haldirams-banner.jpg",
      summary:
        "Haldiram's Nagpur, part of the Haldiram's chain, is known for its traditional Indian snacks and sweets. It continues to uphold the brand's reputation for quality and authenticity.",
      email: "contact@haldiramsnagpur.com",
      phone: "+91-9876543225",
      website: "https://www.haldirams.com/",
      instagram: "https://www.instagram.com/haldirams_nagpur/",
      twitter: "https://x.com/NagpurHaldirams",
      linkedin: "https://www.linkedin.com/company/haldiramsnagpur/",
      team: "1500",
      estd: "1997",
    },
    {
      id: 18,
      logo: "https://e7.pngegg.com/pngimages/183/826/png-transparent-coffee-shop-logo.png",
      name: "Vanilla Rooftop Cafe",
      content:
        "Vanilla Rooftop Cafe offers a variety of gourmet coffee and snacks in a relaxed rooftop setting.",
      location: "Delhi, India",
      banner:
        "https://img.wongnai.com/p/1920x0/2020/12/30/daea51270f454923a30e06246af06f83.jpg",
      tags: ["Cafe", "Coffee"],
      summary:
        "Vanilla Rooftop Cafe, based in Delhi, provides a cozy setting with gourmet coffee and snacks. Established recently, it has quickly gained popularity among coffee lovers in the city.",
      email: "info@vanillaroftopcafe.com",
      phone: "+91-9876543226",
      website: "https://www.vanillaroftopcafe.com/",
      instagram: "https://www.instagram.com/vanillaroftopcafe/",
      twitter: "https://twitter.com/vanillaroftopcafe",
      linkedin: "https://www.linkedin.com/company/vanilla-rooftop-cafe/",
      team: "50",
      estd: "2021",
    },
    {
      id: 19,
      logo: "https://pluspng.com/img-png/red-bull-logo-png--1488.png",
      name: "Red Bull",
      content:
        "Red Bull is a global brand known for its energy drinks and its association with extreme sports and adventurous events.",
      location: "Austria",
      tags: ["Beverages", "Energy Drinks"],
      banner:
        "https://pbs.twimg.com/profile_banners/226087776/1720604355/1500x500",
      summary:
        "Red Bull, headquartered in Austria, is a leading energy drink brand recognized worldwide. Established in 1987, it is known for its association with extreme sports and high-energy events.",
      email: "contact@redbull.com",
      phone: "+43-800-123-456",
      website: "https://www.redbull.com/in-en/",
      instagram: "https://www.instagram.com/redbull/",
      twitter: "https://x.com/redbullracing",
      linkedin: "https://www.linkedin.com/company/red-bull/posts/?feedView=all",
      team: "15000",
      estd: "1987",
    },
    {
      id: 20,
      logo: "https://eu-images.contentstack.com/v3/assets/blt8770191dea35bccc/blt19093a973733fe64/655e5a2b3866cf040a76e896/Baileys.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale",
      name: "Baileys",
      content:
        "Baileys is a global brand of Irish cream liqueur known for its creamy texture and rich flavor.",
      location: "Ireland",
      tags: ["Liqueur"],
      banner:
        "https://pbs.twimg.com/profile_banners/934944632/1699276438/1500x500",
      summary:
        "Baileys, based in Ireland, is renowned for its Irish cream liqueur. Since 1974, it has been famous for its rich and creamy flavor, enjoyed worldwide.",
      email: "contact@baileys.com",
      phone: "+353-1-800-123",
      website: "https://www.diageoindia.com/en/brands/brand-explorer/baileys",
      instagram: "https://www.instagram.com/baileys/",
      twitter: "https://x.com/baileysofficial",
      linkedin: "https://www.linkedin.com/company/bailey%27s-inc./",
      team: "500",
      estd: "1974",
    },
  ]);

  const [visible, setvisible] = useState(false);
  const [currpost, setcurrpost] = useState(null);

  useEffect(() => {
    toast.success("👍 Logged in Succesfully !");
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Bounce
      />

        <div className="absolute top-[90px] right-0 md:hidden h-10 w-screen flex justify-center items-center z-0 overflow-y-hidden">
          <div className="h-full w-[86%] flex justify-center items-center gap-6 rounded-full bg-[#3b3b3b]">
            <input
              type="text"
              className="h-8 w-[80%] rounded-full outline-none text-center"
              placeholder="Explore businesses"
            />
            <button className="h-8 w-8 bg-white border-2 border-slate-100 rounded-full flex justify-center items-center">
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlYXJjaCI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxwYXRoIGQ9Im0yMSAyMS00LjMtNC4zIi8+PC9zdmc+"
                alt="search"
                className="h-5 mb-[1px]"
              />
            </button>
          </div>
        </div>
      <div className="h-screen w-[82%] flex flex-col justify-end fixed right-0 bottom-0 top-4">

        <div className=" h-[83%] w-full flex items-center justify-center">
          <div className="hidden -mt-10 pt-4 pb-3 h-[95%] w-[98%] md:flex justify-center items-center flex-wrap gap-[7%] overflow-auto scroll relative z-20">
            {posts.map((post) => {
              return (
                <motion.div
                  initial={{ opacity: 1, scale: 1 }}
                  whileHover={{ opacity: 1, scale: 1.07 }}
                  key={post.id}
                  className="h-[30%] w-[40%] rounded-md flex justify-between items-center bg-[#e1e1e146]  border-[1px] text-black p-2  border-1 border-gray-300 cursor-pointer"
                  onClick={() => {
                    setvisible(!visible);
                    setcurrpost(post);
                  }}
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
                          <li
                            key={index}
                            className="bg-[#cbcdd1] rounded-md px-2"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </p>
                    <p className="text-sm absolute top-[65px]">
                      {post.content}
                    </p>
                    <p className="absolute bottom-0">
                      <p className="text-[#67DA20]">
                        Location: {post.location}
                      </p>
                    </p>
                  </div>
                </motion.div>
              );
            })}
            <PopInfo
              visible={visible}
              setvisible={setvisible}
              currpost={currpost}
            />
          </div>

          {/* responsive */}

          <div className="md:hidden absolute right-0 h-screen top-32 pt-4 pb-3 w-screen flex justify-center items-center flex-wrap gap-[7%] overflow-scroll z-20">
            {posts.map((post) => {
              return (
                <motion.div
                  initial={{ opacity: 1, scale: 1 }}
                  whileHover={{ opacity: 1, scale: 1.07 }}
                  key={post.id}
                  className="h-[15%] w-[85%] -mb-10 rounded-md flex justify-between items-center bg-[#e1e1e146]  border-[1px] text-black p-2  border-1 border-gray-300 cursor-pointer"
                  onClick={() => {
                    setvisible(!visible);
                    setcurrpost(post);
                  }}
                >
                  <div className="h-full w-[30%] flex justify-center items-center">
                    <img
                      src={post.logo}
                      alt="logo"
                      className="h-[90%] rounded-lg"
                    />
                  </div>

                  <div className="h-full w-[70%] pl-5 flex flex-col gap-3 relative">
                    <p className="md:text-2xl text-xl font-semibold ">
                      {post.name}
                    </p>
                    <p className="h-[19%] w-full text-md absolute mt-[32px]">
                      <ul className="mt-1 h-full w-full flex gap-2 items-center flex-wrap text-black">
                        {post.tags.map((tag, index) => (
                          <li
                            key={index}
                            className="bg-[#cbcdd1] rounded-md px-2 text-sm text-center"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </p>

                    <p className="absolute bottom-0">
                      <p className="text-[#67DA20]">
                        Location: {post.location}
                      </p>
                    </p>
                  </div>
                </motion.div>
              );
            })}
            <PopInfo
              visible={visible}
              setvisible={setvisible}
              currpost={currpost}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Feeds;
