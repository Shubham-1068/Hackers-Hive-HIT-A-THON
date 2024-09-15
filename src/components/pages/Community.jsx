import React, { useState } from 'react';
import { FaSearch, FaPaperclip, FaFileExcel, FaChartLine, FaFilePdf, FaFileContract, FaPaperPlane, FaUser, FaUsers } from 'react-icons/fa';

const Avatar = ({ src, alt, fallback }) => (
  <div className="w-10 h-10 rounded-full bg-[#67da20] flex items-center justify-center overflow-hidden text-[#272727]">
    {src ? (
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    ) : (
      <span className="text-lg font-semibold">{fallback}</span>
    )}
  </div>
);

const ChatButton = ({ chat, onClick, isActive }) => (
  <button
    className={`w-full text-left mb-2 p-2 rounded-lg flex items-center transition-colors ${
      isActive ? 'bg-[#67da20] text-[#272727]' : 'hover:bg-[#f7f7f7]'
    }`}
    onClick={() => onClick(chat)}
  >
    <Avatar src={chat.avatar} alt={chat.name} fallback={chat.name.slice(0, 2)} />
    <div className="ml-3 overflow-hidden">
      <div className="font-semibold">{chat.name}</div>
      <div className="text-sm text-gray-600 truncate">{chat.lastMessage}</div>
    </div>
    {chat.unreadCount > 0 && (
      <span className="ml-auto bg-[#67da20] text-[#272727] text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {chat.unreadCount}
      </span>
    )}
  </button>
);

const MessageBubble = ({ message, isCurrentUser }) => (
  <div className={`flex ${isCurrentUser ? 'justify-end' : 'justify-start'} mb-4`}>
    <div
      className={`max-w-[70%] rounded-lg p-3 border ${
        isCurrentUser 
          ? 'bg-[#67da20] text-[#272727] border-[#5bc71c]' 
          : 'bg-[#cfcfcf] text-[#272727] border-[#e0e0e0]'
      }`}
    >
      <p className="mb-1">{message.content}</p>
      {message.attachment && (
        <button className="text-sm underline mt-2 flex items-center">
          <FaPaperclip className="mr-1" />
          {message.attachment.type === 'spreadsheet'
            ? 'View Spreadsheet'
            : message.attachment.type === 'chart'
            ? 'View Chart'
            : message.attachment.type === 'pdf'
            ? 'View PDF'
            : message.attachment.type === 'contract'
            ? 'View Contract'
            : 'Download File'}
        </button>
      )}
      <div className="text-xs opacity-75 mt-1 text-right">{message.timestamp}</div>
    </div>
  </div>
);

const AttachmentButton = ({ icon: Icon, onClick, tooltip }) => (
  <button
    className="p-2 text-[#67da20] hover:text-[#272727] focus:outline-none transition-colors"
    onClick={onClick}
    title={tooltip}
  >
    <Icon />
  </button>
);

function Community() {
    const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('groups');

  const groups = [
    {
      id: 'g1',
      name: 'Market Analysis',
      avatar: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726358400&semt=ais_hybrid',
      lastMessage: 'Q2 earnings report discussion',
      unreadCount: 2,
      messages: [
        { id: 'm1', senderId: 'u2', content: 'The Q2 earnings reports are out. Any initial thoughts on the tech sector performance?', timestamp: '10:30 AM' },
        { id: 'm2', senderId: 'u1', content: 'Tech sector is outperforming expectations. Cloud services and AI-related companies are showing strong growth.', timestamp: '10:32 AM' },
        { id: 'm3', senderId: 'u3', content: "I've compiled a summary of the key points for the top 10 tech companies. Take a look:", timestamp: '10:35 AM', attachment: { type: 'spreadsheet', url: '#' } },
      ]
    },
    {
      id: 'g2',
      name: 'Investment Strategies',
      avatar: '',
      lastMessage: 'New emerging markets opportunity',
      unreadCount: 0,
      messages: [
        { id: 'm4', senderId: 'u3', content: "I've identified a potential opportunity in Southeast Asian fintech markets. The regulatory environment is becoming more favorable.", timestamp: '11:15 AM' },
        { id: 'm5', senderId: 'u2', content: 'Interesting. What specific subsectors within fintech are you looking at? Payment systems, lending platforms, or something else?', timestamp: '11:17 AM' },
      ]
    },
    {
      id: 'g3',
      name: 'Economic Indicators',
      avatar: '',
      lastMessage: 'Fed meeting minutes analysis',
      unreadCount: 1,
      messages: [
        { id: 'm6', senderId: 'u1', content: "The Fed minutes are out. Here's my initial analysis on potential interest rate changes:", timestamp: '09:45 AM' },
        { id: 'm7', senderId: 'u3', content: 'Good insights. How do you think this will impact our current fixed income positions and overall portfolio strategy?', timestamp: '09:50 AM' },
      ]
    },
    {
      id: 'g4',
      name: 'Random Group',
      avatar: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?w=740&t=st=1726407221~exp=1726407821~hmac=4d1e33bf16577e196998e39dcb56b75ab59ff016b14d04eee88f5a42798fa5b5',
      lastMessage: 'Fed meeting minutes analysis',
      unreadCount: 1,
      messages: [
        { id: 'm6', senderId: 'u1', content: "The Fed minutes are out. Here's my initial analysis on potential interest rate changes:", timestamp: '09:45 AM' },
        { id: 'm7', senderId: 'u3', content: 'Good insights. How do you think this will impact our current fixed income positions and overall portfolio strategy?', timestamp: '09:50 AM' },
      ]
    },
  ];

  const users = [
    {
      id: 'u1',
      name: 'Sarah Chen, CFA',
      avatar: '',
      lastMessage: 'Updated portfolio performance report',
      unreadCount: 0,
      isOnline: true,
      messages: [
        { id: 'm8', senderId: 'u1', content: "I've finished the Q2 portfolio performance report. Our risk-adjusted returns are beating the benchmark.", timestamp: '2:30 PM' },
        { id: 'm9', senderId: 'currentUser', content: 'Excellent news. Can you send over the detailed report?', timestamp: '2:35 PM' },
        { id: 'm10', senderId: 'u1', content: 'Certainly, here is the comprehensive report with sector breakdowns.', timestamp: '2:36 PM', attachment: { type: 'pdf', url: '#' } },
        { id: 'm11', senderId: 'currentUser', content: "Thank you, Sarah. I'll review it shortly and we can discuss any necessary portfolio adjustments.", timestamp: '2:37 PM' },
        { id: 'm12', senderId: 'u1', content: 'Sounds good. Let me know if you need any clarifications on the risk metrics or performance attribution.', timestamp: '2:38 PM' },
      ]
    },
    {
      id: 'u2',
      name: 'Michael Ross, M&A Specialist',
      avatar: '',
      lastMessage: 'Thoughts on the latest tech merger?',
      unreadCount: 1,
      isOnline: false,
      messages: [
        { id: 'm13', senderId: 'u2', content: 'Have you seen the news about the major tech sector merger? This could reshape the competitive landscape.', timestamp: '3:15 PM' },
        { id: 'm14', senderId: 'currentUser', content: "Yes, I'm analyzing the potential market impact now. It's a game-changer for the industry.", timestamp: '3:17 PM' },
        { id: 'm15', senderId: 'u2', content: "I'd be interested in your thoughts on how this might affect our tech holdings and potential arbitrage opportunities.", timestamp: '3:20 PM' },
        { id: 'm16', senderId: 'currentUser', content: "I'll send over my analysis once it's complete. I'm also looking into the regulatory implications.", timestamp: '3:25 PM' },
        { id: 'm17', senderId: 'u2', content: 'Great. By the way, here is the merger announcement and initial financial projections:', timestamp: '4:30 PM', attachment: { type: 'pdf', url: '#' } },
      ]
    },
    {
      id: 'u3',
      name: 'Emily Watkins, Risk Manager',
      avatar: '',
      lastMessage: 'New risk assessment model',
      unreadCount: 0,
      isOnline: true,
      messages: [
        { id: 'm18', senderId: 'u3', content: "I've developed a new risk assessment model for our high-volatility investments, incorporating recent market turbulence.", timestamp: 'Yesterday' },
        { id: 'm19', senderId: 'currentUser', content: 'That sounds promising, especially given the current market conditions. Can you share more details?', timestamp: 'Yesterday' },
        { id: 'm20', senderId: 'u3', content: "Certainly, here's a presentation outlining the model and its backtested results:", timestamp: 'Yesterday', attachment: { type: 'pdf', url: '#' } },
      ]
    },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() && activeChat) {
      const newMessage = {
        id: `m${Date.now()}`,
        senderId: 'currentUser',
        content: message.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setActiveChat({
        ...activeChat,
        messages: [...activeChat.messages, newMessage],
        lastMessage: newMessage.content,
        unreadCount: 0
      });
      setMessage('');
    }
  };

  const handleAttachment = (type) => {
    // Placeholder for attachment handling
    console.log(`Attaching ${type}`);
  };

  return (
    <>
    <div className="sticky top-20 h-[89vh] flex w-screen bg-[#f7f7f7] text-[#272727]">
      <div className="w-1/4 border-r border-[#67da20] bg-white">
        <div className="p-4">
          <h2 className="text-2xl font-bold mb-4 text-[#272727]">Financial Community Chat</h2>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search chats..."
              className="w-full pl-10 pr-4 py-2 border border-[#67da20] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#67da20]"
            />
            <FaSearch className="absolute left-3 top-3 text-[#67da20]" />
          </div>
          <div className="flex mb-4">
            <button
              className={`flex-1 py-2 ${activeTab === 'groups' ? 'bg-[#67da20] text-[#272727]' : 'bg-[#f7f7f7] text-[#272727]'} rounded-l-lg focus:outline-none transition-colors`}
              onClick={() => setActiveTab('groups')}
            >
              <FaUsers className="inline-block mr-2" /> Groups
            </button>
            <button
              className={`flex-1 py-2 ${activeTab === 'direct' ? 'bg-[#67da20] text-[#272727]' : 'bg-[#f7f7f7] text-[#272727]'} rounded-r-lg focus:outline-none transition-colors`}
              onClick={() => setActiveTab('direct')}
            >
              <FaUser className="inline-block mr-2" /> Direct
            </button>
          </div>
          <div className="overflow-y-auto h-[calc(100vh-220px)]">
            {activeTab === 'groups' && groups.map((group) => (
              <ChatButton
                key={group.id}
                chat={group}
                onClick={setActiveChat}
                isActive={activeChat && activeChat.id === group.id}
              />
            ))}
            {activeTab === 'direct' && users.map((user) => (
              <ChatButton
                key={user.id}
                chat={user}
                onClick={setActiveChat}
                isActive={activeChat && activeChat.id === user.id}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col bg-white">
        {activeChat ? (
          <>
            <div className="p-4 border-b border-[#67da20] flex items-center">
              <Avatar
                src={activeChat.avatar}
                alt={activeChat.name}
                fallback={activeChat.name.slice(0, 2)}
              />
              <h3 className="ml-3 text-lg font-semibold">{activeChat.name}</h3>
              {'isOnline' in activeChat && (
                <span
                  className={`ml-2 w-3 h-3 rounded-full ${
                    activeChat.isOnline ? 'bg-[#67da20]' : 'bg-gray-300'
                  }`}
                ></span>
              )}
            </div>
            <div className="flex-1 overflow-y-auto p-4 bg-[#f7f7f7]">
              {activeChat.messages.map((msg) => (
                <MessageBubble
                  key={msg.id}
                  message={msg}
                  isCurrentUser={msg.senderId === 'currentUser'}
                />
              ))}
            </div>
            <form onSubmit={handleSendMessage} className="p-4 border-t border-[#67da20] flex bg-white">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 p-2 border border-[#67da20] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#67da20]"
              />
              <AttachmentButton icon={FaPaperclip} onClick={() => handleAttachment('file')} tooltip="Attach File" />
              <button
                type="submit"
                className="bg-[#67da20] text-[#272727] p-3 w-16 flex justify-center items-center rounded-r-lg hover:bg-[#5bc71c] focus:outline-none focus:ring-2 focus:ring-[#67da20] transition-colors"
              >
                <FaPaperPlane />
              </button>
            </form>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-[#272727] bg-[#f7f7f7]">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
    </>
  );
}

export default Community
