import { useState } from "react";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Feeds from "./components/pages/Feeds";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-[#1e1e1e]">
        <Navbar />
        <SideNav />
        <Feeds />
      </div>
    </>
  );
}

export default App;
