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
      avatar: 'https://img.freepik.com/free-vector/dart-hitting-center-target-3d-icon-arrow-hitting-aim-bullseye-3d-vector-illustration-white-background-goal-success-achievement-marketing-strategy-concept_74855-25962.jpg?w=740&t=st=1726412966~exp=1726413566~hmac=76307e15b3bce8be5011b6d51756b5fb249625ec619af0eb6270f22101f50af3',
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
      avatar: 'https://img.freepik.com/premium-photo/3d-save-money-icon-wallet-coins-finance-transfer-concepts_1108314-501068.jpg?w=360',
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
      avatar: 'https://img.freepik.com/premium-vector/bitcoin-cartoonstyle-vector-illustration_761413-4222.jpg?ga=GA1.1.588360475.1723039730&semt=ais_hybrid',
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
      avatar: 'https://img.freepik.com/premium-photo/man-with-glasses-backpack-that-says-hes-character_113255-102990.jpg?ga=GA1.1.588360475.1723039730&semt=ais_hybrid',
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
      avatar: 'https://img.freepik.com/premium-photo/3d-rendering-avatar-design_1258715-60985.jpg?ga=GA1.1.588360475.1723039730&semt=ais_hybrid',
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
      avatar: 'https://img.freepik.com/premium-photo/3d-rendering-cute-cartoon-girl-with-glasses-isolated-white-background_1308157-8781.jpg?ga=GA1.1.588360475.1723039730&semt=ais_hybrid',
      lastMessage: 'New risk assessment model',
      unreadCount: 0,
      isOnline: true,
      messages: [
        { id: 'm18', senderId: 'u3', content: "I've developed a new risk assessment model for our high-volatility investments, incorporating recent market turbulence.", timestamp: 'Yesterday' },
        { id: 'm19', senderId: 'currentUser', content: 'That sounds promising, especially given the current market conditions. Can you share more details?', timestamp: 'Yesterday' },
        { id: 'm20', senderId: 'u3', content: "Certainly, here's a presentation outlining the model and its backtested results:", timestamp: 'Yesterday', attachment: { type: 'pdf', url: '#' } },
      ]
    },
    {
      id: 'u4',
      name: 'John Carter, HR Coordinator',
      avatar: 'https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-92112.jpg?ga=GA1.1.588360475.1723039730&semt=ais_hybrid',
      lastMessage: 'New HR policy updates ready for review.',
      unreadCount: 0,
      isOnline: false,
      messages: [
        { id: 'm22', senderId: 'u4', content: 'Please review the updated HR policies and provide your feedback.', timestamp: '1:00 PM' },
        { id: 'm23', senderId: 'currentUser', content: 'Thanks, I\'ll look into these and get back to you by Friday.', timestamp: '2:15 PM' }
      ]
    },
    {
      id: 'u5',
      name: 'Alice Johnson, Marketing Director',
      avatar: 'https://img.freepik.com/premium-photo/lego-figure-man-wearing-glasses-scarf-with-yellow-scarf_1221953-48187.jpg?ga=GA1.1.588360475.1723039730&semt=ais_hybrid',
      lastMessage: 'Marketing campaign results exceeded expectations!',
      unreadCount: 3,
      isOnline: true,
      messages: [
        { id: 'm24', senderId: 'u5', content: 'The latest campaign has been a tremendous success, generating a 50% increase in leads.', timestamp: '3:30 PM' },
        { id: 'm25', senderId: 'currentUser', content: 'That\'s fantastic news! Any insights on what worked best?', timestamp: '3:45 PM' }
      ]
    },
    {
      id: 'u6',
      name: 'Oliver Smith, IT Security Chief',
      avatar: 'https://img.freepik.com/premium-photo/3d-man-icon-person-gender-logo-illustration_762678-32616.jpg?ga=GA1.1.588360475.1723039730&semt=ais_hybrid',
      lastMessage: 'Urgent: Security breach detected in our network!',
      unreadCount: 1,
      isOnline: false,
      messages: [
        { id: 'm26', senderId: 'u6', content: 'We detected a potential security threat on our network. Immediate action required.', timestamp: '9:15 AM' },
        { id: 'm27', senderId: 'currentUser', content: 'I\'m on it. Let\'s meet ASAP to address this.', timestamp: '9:20 AM' }
      ]
    },
    {
      id: 'u7',
      name: 'Emma Green, Financial Analyst',
      avatar: 'https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-96091.jpg?ga=GA1.1.588360475.1723039730&semt=ais_hybrid',
      lastMessage: 'Quarterly financial review meeting?',
      unreadCount: 0,
      isOnline: true,
      messages: [
        { id: 'm28', senderId: 'u7', content: 'Can we schedule the financial review for next quarter early next week?', timestamp: '11:30 AM' },
        { id: 'm29', senderId: 'currentUser', content: 'Sure, how does Monday look for your schedule?', timestamp: '11:45 AM' }
      ]
    },
    {
      id: 'u8',
      name: 'David Chen, Software Architect',
      avatar: 'https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-103324.jpg?ga=GA1.1.588360475.1723039730&semt=ais_hybrid',
      lastMessage: 'We need to discuss the microservices architecture.',
      unreadCount: 1,
      isOnline: false,
      messages: [
        { id: 'm30', senderId: 'u8', content: 'I\'ve reviewed the current architecture, and there are some performance bottlenecks.', timestamp: '12:00 PM' },
        { id: 'm31', senderId: 'currentUser', content: 'I noticed the same. Let’s set up a meeting to go over the issues.', timestamp: '12:05 PM' },
        { id: 'm32', senderId: 'u8', content: 'Great, I\'m free tomorrow afternoon.', timestamp: '12:10 PM' }
      ]
    },
    {
      id: 'u9',
      name: 'Jessica Hall, UX Designer',
      avatar: 'https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-93852.jpg?ga=GA1.1.588360475.1723039730&semt=ais_hybrid',
      lastMessage: 'User feedback on the latest prototype.',
      unreadCount: 2,
      isOnline: true,
      messages: [
        { id: 'm33', senderId: 'u9', content: 'I\'ve gathered feedback from the latest user tests. Most users find the interface intuitive.', timestamp: '9:00 AM' },
        { id: 'm34', senderId: 'currentUser', content: 'That’s good to hear! Were there any common pain points?', timestamp: '9:15 AM' },
        { id: 'm35', senderId: 'u9', content: 'A few users mentioned issues with navigation speed. I\'ll work on some improvements.', timestamp: '9:30 AM' }
      ]
    },
    {
      id: 'u10',
      name: 'Richard Blake, Legal Consultant',
      avatar: 'https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-92175.jpg?ga=GA1.1.588360475.1723039730&semt=ais_hybrid',
      lastMessage: 'Legal review of new contract terms.',
      unreadCount: 0,
      isOnline: false,
      messages: [
        { id: 'm36', senderId: 'u10', content: 'I\'ve completed the review of the new contract. We need to adjust the liability clause.', timestamp: '11:45 AM' },
        { id: 'm37', senderId: 'currentUser', content: 'Thanks for the heads-up. Let\'s make those changes before signing.', timestamp: '12:00 PM' }
      ]
    },
    {
      id: 'u11',
      name: 'Natalie Evans, Business Strategist',
      avatar: 'https://img.freepik.com/premium-photo/3d-cartoon-avatar-girl-minimal-3d-character_652053-2327.jpg?ga=GA1.1.588360475.1723039730&semt=ais_hybrid',
      lastMessage: 'Looking forward to the strategy session next week.',
      unreadCount: 1,
      isOnline: true,
      messages: [
        { id: 'm38', senderId: 'u11', content: 'We should prepare the agenda for the next strategy meeting. Do you have time to discuss?', timestamp: '4:15 PM' },
        { id: 'm39', senderId: 'currentUser', content: 'Yes, let’s connect tomorrow to finalize it.', timestamp: '4:30 PM' },
        { id: 'm40', senderId: 'u11', content: 'Perfect. I’ll send over some initial points later today.', timestamp: '4:45 PM' }
      ]
    },
    {
      id: 'u12',
      name: 'Tom Rodriguez, Operations Manager',
      avatar: 'https://img.freepik.com/premium-photo/lego-man-with-glasses-sweater-that-says-hes-wearing-hoodie_113255-92805.jpg?ga=GA1.1.588360475.1723039730&semt=ais_hybrid',
      lastMessage: 'Inventory update and logistics issue.',
      unreadCount: 3,
      isOnline: false,
      messages: [
        { id: 'm41', senderId: 'u12', content: 'We’ve encountered a delay in the supply chain. Some deliveries will be postponed.', timestamp: '2:00 PM' },
        { id: 'm42', senderId: 'currentUser', content: 'Is there a new expected date for arrival?', timestamp: '2:10 PM' },
        { id: 'm43', senderId: 'u12', content: 'Yes, we’re expecting them by the end of the week.', timestamp: '2:20 PM' }
      ]
    },
    {
      id: 'u13',
      name: 'Samantha Lee, Product Manager',
      avatar: 'https://img.freepik.com/premium-photo/3d-portraits-happy-people-white-background-cartoon-characters-women-girl-vector-illustration_623919-5033.jpg?ga=GA1.1.588360475.1723039730&semt=ais_hybrid',
      lastMessage: 'Can we reschedule tomorrow\'s product review?',
      unreadCount: 2,
      isOnline: true,
      messages: [
        { id: 'm18', senderId: 'u3', content: 'The latest feature rollout has been delayed by a week.', timestamp: '10:00 AM' },
        { id: 'm19', senderId: 'currentUser', content: 'Understood, do we need to adjust the timeline for the beta release?', timestamp: '10:15 AM' },
        { id: 'm20', senderId: 'u3', content: 'Yes, I suggest pushing it back by at least two weeks.', timestamp: '10:45 AM' },
        { id: 'm21', senderId: 'currentUser', content: 'Okay, let\'s discuss this further in tomorrow\'s meeting.', timestamp: '11:00 AM' }
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
