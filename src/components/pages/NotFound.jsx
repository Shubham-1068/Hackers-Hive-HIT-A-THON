import React from 'react'
import Notfound from '../../assets/404_Page.gif'

export default function NotFound() {
  return (
    <div className='w-screen h-screen fixed flex flex-col justify-center mt-20 overflow-y-auto'>

      <img src={Notfound} alt="not found" />

      {/* <button className='bg-[#67DA20] hover:bg-[#56f11e] text-white font-bold py-2 px-4 rounded m-4'>
        <a href="/">Go to Home</a>
      </button> */}
    </div>
  )
}
