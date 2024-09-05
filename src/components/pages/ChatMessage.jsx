import React from 'react';

const ChatMessage = ({ sender, message, time, isSender }) => {
  return (
    <div className={`flex ${isSender ? 'justify-end' : 'justify-start'} mb-2`}>
      <div className={`max-w-xs p-2 rounded-lg ${isSender ? 'bg-[#9ef87b] text-black' : 'bg-gray-300 text-black'} `}>
        <p className="text-sm font-semibold">{sender}</p>
        <p className="text-sm">{message}</p>
        <p className="text-xs text-[#000000] mt-4 ml-60">{time}</p> {/* Added time display here */}
      </div>
    </div>
  );
};

export default function ChatBox() {
  const messages = [
    { sender: "Kavya", message: "How are we progressing with the marketing strategy?", time: "10:02 AM", isSender: false },
    { sender: "Rajveer", message: "We are on track, just need the budget approval.", time: "10:05 AM", isSender: true },
    { sender: "Kavya", message: "Great! Let's discuss the budget during our next meeting.", time: "10:07 AM", isSender: false },
    { sender: "Rajveer", message: "Sounds good. I'll prepare the presentation.", time: "10:10 AM", isSender: true },
    { sender: "Kavya", message: "Also, ensure the client feedback is integrated into the plan.", time: "10:12 AM", isSender: false },
    { sender: "Rajveer", message: "Already working on it. The report will be ready by tomorrow.", time: "10:15 AM", isSender: true },
    { sender: "Ritika", message: "Did the client confirm the meeting time?", time: "10:20 AM", isSender: false },
    { sender: "Shubham", message: "Yes, it's scheduled for 2 PM tomorrow.", time: "10:22 AM", isSender: true },
    { sender: "Ritika", message: "Perfect. Let's finalize the agenda by today.", time: "10:24 AM", isSender: false },
    { sender: "Shubham", message: "I'll send over the draft in the next hour.", time: "10:26 AM", isSender: true },
    { sender: "Ritika", message: "Make sure to include the latest market insights.", time: "10:29 AM", isSender: false },
    { sender: "Shubham", message: "Already on it! Should I share it in the group?", time: "10:31 AM", isSender: true },
    { sender: "Ritika", message: "Yes, let's keep everyone updated on the progress.", time: "10:33 AM", isSender: false },
    { sender: "Shubham", message: "Got it. I'll loop everyone in by noon.", time: "10:35 AM", isSender: true },
    { sender: "Ritika", message: "Thanks! Let's make sure we're fully prepared.", time: "10:37 AM", isSender: false },
    { sender: "Shubham", message: "Absolutely, we'll nail the presentation.", time: "10:40 AM", isSender: true },
];


  return (
    <div className="w-full h-[550px] bg-white border border-gray-300 rounded-lg p-4 overflow-y-scroll">
      {messages.map((msg, index) => (
        <ChatMessage
          key={index}
          sender={msg.sender}
          message={msg.message}
          time={msg.time}  
          isSender={msg.isSender}
        />
      ))}
    </div>
  );
}
