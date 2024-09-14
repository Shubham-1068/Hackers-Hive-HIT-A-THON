import React from "react";
import ChatSidebarItem from "./ChatSidebarItem";
import ChatMessage from "./ChatMessage";

export default function Community() {
  return (
    <>
      <div className="h-[89%] mt-16 w-full flex flex-col justify-end fixed right-0 bottom-0 border-t-[1px] border-gray-500">
        <div className="w-full h-full flex">

          {/* left section with search bar */}
          <div className="w-[25%] h-full bg-[#3b3b3b]">
            <div className="h-[60px] bg-[#333333] px-2 py-3 flex items-center justify-around relative border-black border-b-[1px]">
              <input
                type="text"
                className="h-9 w-[95%] rounded-full outline-none text-left px-4 py-1"
                placeholder="Search"
              />
              <button className="h-7 w-7 rounded-full flex justify-center items-center absolute right-6 bg-gray-300">
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNlYXJjaCI+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iOCIvPjxwYXRoIGQ9Im0yMSAyMS00LjMtNC4zIi8+PC9zdmc+"
                  alt="search"
                  className="h-5 mb-[1px]"
                />
              </button>
            </div>

            <div className="w-full h-full overflow-y-scroll text-white">
              <ChatSidebarItem
                displayName="Ritika"
                message="Hello, what is your bussiness?"
                displayPicture="./src/assets/undraw_female_avatar.png"
              />
              <ChatSidebarItem
                displayName="Shubham"
                message="Let's start"
                displayPicture="./src/assets/undraw_male_avatar.png"
              />
              <ChatSidebarItem
                displayName="Shivani"
                message="Ok, done"
                displayPicture="./src/assets/undraw_profile_pic.png"
              />
              <div className="bg-[#1e1e1e] border-r-[10px] rounded-md border-[#67da20] hover:border-none">
                <ChatSidebarItem
                  displayName="Rajveer"
                  message="It's good to be here"
                  displayPicture="./src/assets/undraw_pic_profile.png"
                />
              </div>
              <ChatSidebarItem
                displayName="Aarav"
                message="How can we grow our market?"
                displayPicture="./src/assets/undraw_male_avatar-1.png"
              />
              <ChatSidebarItem
                displayName="Pooja"
                message="The strategy looks promising!"
                displayPicture="./src/assets/undraw_profile_pic-1.png"
              />
              <ChatSidebarItem
                displayName="Aditya"
                message="We should focus on customer feedback."
                displayPicture="./src/assets/undraw_male_avatar-2.png"
              />
              <ChatSidebarItem
                displayName="Megha"
                message="Are we ready for the launch?"
                displayPicture="./src/assets/undraw_female_avatar-2.png"
              />
              <ChatSidebarItem
                displayName="Rohan"
                message="Let's finalize the partnership."
                displayPicture="./src/assets/undraw_pic_profile-2.png"
              />
              <ChatSidebarItem
                displayName="Kavya"
                message="We need to discuss the budget allocation."
                displayPicture="./src/assets/undraw_female_avatar-3.png"
              />
              <ChatSidebarItem
                displayName="Manish"
                message="Client feedback is positive, great job!"
                displayPicture="./src/assets/undraw_male_avatar-2.png"
              />
              <ChatSidebarItem
                displayName="Sneha"
                message="Let's prepare for the next meeting."
                displayPicture="./src/assets/undraw_profile_pic-2.png"
              />
              <ChatSidebarItem
                displayName="Isha"
                message="Can we review the sales report today?"
                displayPicture="./src/assets/undraw_female_avatar-4.png"
              />
              <ChatSidebarItem
                displayName="Kunal"
                message="I think we need to revisit our strategy."
                displayPicture="./src/assets/undraw_male_avatar-2.png"
              />
              <ChatSidebarItem
                displayName="Ayesha"
                message="Looking forward to the product launch!"
                displayPicture="./src/assets/undraw_profile_pic.png"
              />
              <ChatSidebarItem
                displayName="Arjun"
                message="Great collaboration with the new team!"
                displayPicture="./src/assets/undraw_pic_profile-2.png"
              />
              <ChatSidebarItem
                displayName="Nisha"
                message="We should analyze the customer feedback."
                displayPicture="./src/assets/undraw_female_avatar-5.png"
              />
            </div>
          </div>

          {/* right section with chat box */}

          <div className="w-[75%] h-screen bg-white ">
            {/* top bar */}
            <div className="h-[60px] w-full border-b border-[#163300] flex items-center p-2 justify-between">
              <div className="flex items-center">
                <img
                  src="./src/assets/undraw_pic_profile.png"
                  alt="profile_pic"
                  className="w-[50px] h-[50px] rounded-full bg-gray-300"
                />
                <div>
                  <div className="ml-2 text-[#163300] text-xl font-bold">
                    Rajveer
                  </div>
                  <div className="ml-2 text-[#163300] text-xs font-semibold flex items-center">
                    Online
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#56f11e"
                      stroke-width="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="lucide lucide-dot"
                    >
                      <circle cx="12.1" cy="12.1" r="1" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="hover:bg-gray-300 cursor-pointer rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="36"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#474747"
                  stroke-width="2.25"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-ellipsis-vertical"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </div>

            </div>

            {/* chat messages */}
            <div className="mt-3 ">
              <ChatMessage />
            </div>

            {/* chat box */}
            <div className="h-16 w-screen bg-gray-300 text-[#f2f2f2] fixed bottom-0 p-2 flex items-center">
              <div className="flex gap-2 pr-4 items-center ml-4">
                <div className="hover:bg-[#9fe870] p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4d4d4d"
                    stroke-width="1.875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-smile-plus"
                  >
                    <path d="M22 11v1a10 10 0 1 1-9-10" />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                    <line x1="9" x2="9.01" y1="9" y2="9" />
                    <line x1="15" x2="15.01" y1="9" y2="9" />
                    <path d="M16 5h6" />
                    <path d="M19 2v6" />
                  </svg>
                </div>

                <div className="hover:bg-[#9fe870] p-2 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4d4d4d"
                    stroke-width="1.875"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-paperclip"
                  >
                    <path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                  </svg>
                </div>
              </div>

              <input
                className="w-[55vw] h-[40px] border-2 border-gray-00 rounded-lg text-slate-800 overflow-y-hidden p-4"
                placeholder="Type a message"
              ></input>

              <button className="w-[5%] h-10 bg-[#67e11f] ml-6 hover:bg-[#4b9023] p-2 rounded-lg text-xl items-center flex justify-center font-semibold text-[#163300]">
                <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1zZW5kLWhvcml6b250YWwiPjxwYXRoIGQ9Ik0zLjcxNCAzLjA0OGEuNDk4LjQ5OCAwIDAgMC0uNjgzLjYyN2wyLjg0MyA3LjYyN2EyIDIgMCAwIDEgMCAxLjM5NmwtMi44NDIgNy42MjdhLjQ5OC40OTggMCAwIDAgLjY4Mi42MjdsMTgtOC41YS41LjUgMCAwIDAgMC0uOTA0eiIvPjxwYXRoIGQ9Ik02IDEyaDE2Ii8+PC9zdmc+" alt="send" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
