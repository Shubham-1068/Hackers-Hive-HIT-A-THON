import React from 'react';

const ChatSidebarItem = ({ displayName, message, displayPicture }) => {
  return (
    <div className="w-full  flex items-center  p-2 pb-4 pt-4 border-b-[1px] border-gray-500  hover:bg-[#1e1e1e] hover:border-r-[10px] hover:rounded-md hover:border-[#67da20] cursor-pointer">
      <img src={displayPicture} alt="Profile" className="w-[50px] h-[50px] rounded-full mr-2 bg-[#D1D5DB] border border-black" />
      <div className="flex flex-col justify-center">
        <div className="font-bold text-sm">{displayName}</div>
        <div className="text-gray-300 text-xs">{message}</div>
      </div>
    </div>
  );
};

export default ChatSidebarItem;
