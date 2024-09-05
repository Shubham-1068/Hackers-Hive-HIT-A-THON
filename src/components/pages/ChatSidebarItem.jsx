import React from 'react';

const ChatSidebarItem = ({ displayName, message, displayPicture }) => {
  return (
    <div className="w-full h-[10%] flex items-center p-2 pb-2 border-b-[1px] border-gray-500  hover:bg-gray-200 cursor-pointer">
      <img src={displayPicture} alt="Profile" className="w-[50px] h-[50px] rounded-full mr-2" />
      <div className="flex flex-col justify-center">
        <div className="font-bold text-sm">{displayName}</div>
        <div className="text-gray-600 text-xs">{message}</div>
      </div>
    </div>
  );
};

export default ChatSidebarItem;
