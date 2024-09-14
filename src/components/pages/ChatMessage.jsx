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
    { sender: "Kavya", message: "Great! 👍 Let's discuss the budget during our next meeting.", time: "10:07 AM", isSender: false },
    { sender: "Rajveer", message: "Sounds good. I'll prepare the presentation.", time: "10:10 AM", isSender: true },
    { sender: "Kavya", message: "Also, ensure the client feedback is integrated into the plan. 🤔", time: "10:12 AM", isSender: false },
    { sender: "Rajveer", message: "Already working on it. The report will be ready by tomorrow. 🫡", time: "10:15 AM", isSender: true },
    { sender: "Kavya", message: "Did the client confirm the meeting time?", time: "10:20 AM", isSender: false },
    { sender: "Rajveer", message: "Yes, it's scheduled for 2 PM tomorrow.", time: "10:22 AM", isSender: true },
    { sender: "Kavya", message: "Perfect.👌 Let's finalize the agenda by today.", time: "10:24 AM", isSender: false },
    { sender: "Rajveer", message: "I'll send over the draft in the next hour.", time: "10:26 AM", isSender: true },
    { sender: "Kavya", message: "Make sure to include the latest market insights.", time: "10:29 AM", isSender: false },
    { sender: "Rajveer", message: "Already on it! Should I share it in the group? 🤔", time: "10:31 AM", isSender: true },
    { sender: "Kavya", message: "Yes, let's keep everyone updated on the progress.", time: "10:33 AM", isSender: false },
    { sender: "Rajveer", message: "Got it. I'll loop everyone in by noon.", time: "10:35 AM", isSender: true },
    { sender: "Kavya", message: "Thanks! Let's make sure we're fully prepared.", time: "10:37 AM", isSender: false },
    { sender: "Rajveer", message: "Absolutely, we'll nail the presentation. 😎", time: "10:40 AM", isSender: true },  { sender: "Kavya", message: "Do you think we should add more data to the report?", time: "10:45 AM", isSender: false },
    { sender: "Rajveer", message: "It looks solid so far, but I can add some extra insights.", time: "10:47 AM", isSender: true },
    { sender: "Kavya", message: "That would be great! The client loves detailed analysis. 😍", time: "10:50 AM", isSender: false },
    { sender: "Rajveer", message: "I'll include data from the recent market survey.", time: "10:52 AM", isSender: true },
    { sender: "Kavya", message: "Perfect. Let’s review it later today.", time: "10:55 AM", isSender: false },
    { sender: "Rajveer", message: "Sure, 👍 I’ll be ready by 3 PM.", time: "10:57 AM", isSender: true },
    { sender: "Kavya", message: "Can we also focus on the competitor analysis?", time: "11:00 AM", isSender: false },
    { sender: "Rajveer", message: "Yes, I’m already gathering that data.", time: "11:02 AM", isSender: true },
    { sender: "Kavya", message: "Good. We need to highlight why our product stands out. ", time: "11:05 AM", isSender: false },
    { sender: "Rajveer", message: "I'll make sure to emphasize that in the report.", time: "11:07 AM", isSender: true },
    { sender: "Kavya", message: "Great! This should give us an edge in the meeting.", time: "11:10 AM", isSender: false },
    { sender: "Rajveer", message: "Agreed. I'll also prepare some talking points.", time: "11:12 AM", isSender: true },
    { sender: "Kavya", message: "Make sure to highlight the customer feedback.", time: "11:15 AM", isSender: false },
    { sender: "Rajveer", message: "Of course, I’ll make that a key section.", time: "11:17 AM", isSender: true },
    { sender: "Kavya", message: "Awesome. We’re on the right track!", time: "11:20 AM", isSender: false },
    { sender: "Rajveer", message: "Definitely. Let’s get this win.", time: "11:22 AM", isSender: true },
    { sender: "Kavya", message: "Don’t forget to update the team on the progress.", time: "11:25 AM", isSender: false },
    { sender: "Rajveer", message: "Already done! Sent out an email this morning.", time: "11:27 AM", isSender: true },
    { sender: "Kavya", message: "Perfect. Looking forward to the final review.", time: "11:30 AM", isSender: false },
    { sender: "Rajveer", message: "Same here. We’ll be ready for tomorrow.", time: "11:32 AM", isSender: true },
    { sender: "Kavya", message: "Let’s do a dry run later to ensure everything’s set.", time: "11:35 AM", isSender: false },
    { sender: "Rajveer", message: "Good idea. I'll block some time for that.", time: "11:37 AM", isSender: true },
    { sender: "Kavya", message: "Thanks, Rajveer! Let’s make it happen. 🤝", time: "11:40 AM", isSender: false }
    
];


  return (
    <div className="w-full h-[80vh] bg-white border border-gray-300 rounded-lg p-10 overflow-y-scroll">
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
