import React from 'react'
import ChatSidebarItem from './ChatsidebarItem'

export default function Community() {
  return (
    <div className='w-full h-screen bg-[#ffffff] '>

      <div className="w-[22%]  bg-[#FAFAFA] border-r-[1px] border-gray-400">

        <div className='h-[50px] bg-[#163300] text-[#f2f2f2] border-r-[10px] border-[#163300] border-'>search</div>

        <div className="w-full h-full">
          <ChatSidebarItem displayName="Ritika" message="Hello, what is your bussiness?" displayPicture="./src/assets/undraw_female_avatar_efig.svg" />
          <ChatSidebarItem displayName="Shubham" message="Let's start" displayPicture="./src/assets/undraw_male_avatar_g98d.svg" />
          <ChatSidebarItem displayName="Shivani" message="Ok, done" displayPicture="./src/assets/undraw_profile_pic_re_iwgo.svg" />
          <ChatSidebarItem displayName="Rajveer" message="It's good to be here" displayPicture="./src/assets/undraw_pic_profile_re_7g2h.svg" />
          <ChatSidebarItem displayName="Aarav" message="How can we grow our market?" displayPicture="./src/assets/undraw_female_avatar_efig.svg" />
          <ChatSidebarItem displayName="Pooja" message="The strategy looks promising!" displayPicture="./src/assets/undraw_profile_pic_re_iwgo.svg" />
          <ChatSidebarItem displayName="Aditya" message="We should focus on customer feedback." displayPicture="./src/assets/undraw_male_avatar_g98d.svg" />
          <ChatSidebarItem displayName="Megha" message="Are we ready for the launch?" displayPicture="./src/assets/undraw_female_avatar_efig.svg" />
          <ChatSidebarItem displayName="Rohan" message="Let's finalize the partnership." displayPicture="./src/assets/undraw_pic_profile_re_7g2h.svg" />
          <ChatSidebarItem displayName="Kavya" message="We need to discuss the budget allocation." displayPicture="./src/assets/undraw_female_avatar_efig.svg" />
          <ChatSidebarItem displayName="Manish" message="Client feedback is positive, great job!" displayPicture="./src/assets/undraw_male_avatar_g98d.svg" />
          <ChatSidebarItem displayName="Sneha" message="Let's prepare for the next meeting." displayPicture="./src/assets/undraw_profile_pic_re_iwgo.svg" />
        </div>

      </div>

    </div>
  )
}

