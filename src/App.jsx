import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Feeds from "./components/pages/Feeds";
import Community from "./components/pages/Community";
import Finance from "./components/pages/Finance";
import About from "./components/pages/About";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import RegistrationForm from "./components/pages/RegistrationForm";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <div className="w-screen h-screen bg-[#ffff]">
            <Login />
          </div>
        </>
      ),
    },
    {
      path: "/community",
      element: (
        <>
          <div className="w-screen h-screen bg-[#ffff]">
            <Navbar />
            <Community />
          </div>
        </>
      ),
    },
    {
      path: "/finance",
      element: (
        <>
          <div className="w-screen h-screen bg-[#ffff]">
            <Navbar />
            <Finance />
          </div>
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <div className="w-screen h-screen bg-[#ffff]">
            <Navbar />
            <About />
          </div>
        </>
      ),
    },
    {
      path: "/feeds",
      element: (
        <>
          <div className="w-screen h-screen bg-[#ffff]">
            <Navbar />
            <SideNav />
            <Feeds />
          </div>
        </>
      ),
    },
    {
      path: "/signup",
      element: (
        <>
          <div className="w-screen h-screen bg-[#ffff]">
            <RegistrationForm />
          </div>
        </>
      ),
    },
    {
      path: "/*",
      element: (
        <>
          <div className="w-screen h-screen bg-[#ffff]">
            <Navbar />
            <NotFound />
          </div>
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
