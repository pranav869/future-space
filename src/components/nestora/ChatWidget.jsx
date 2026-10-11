import React, { useState } from 'react';
import { MessageSquare, X, Send, PhoneCall, Sparkles, Check, CheckCheck } from 'lucide-react';

export default function ChatWidget({ onOpenConsultation, onOpenCalculator }) {
  const [bubbleVisible, setBubbleVisible] = useState(true);
  const [chatDrawerOpen, setChatDrawerOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Namaste! Welcome to FutureSpace Interiors. How can our design team help you today?' }
  ]);
  const [inputText, setInputText] = useState('');

  const handleQuickAction = (actionType) => {
    setChatDrawerOpen(true);
    setBubbleVisible(false);

    if (actionType === 'question') {
      setMessages(prev => [
        ...prev,
        { sender: 'user', text: 'I have a question regarding 45-day handover and packages.' },
        { sender: 'bot', text: 'We offer complete turnkey interior delivery in 45 working days guaranteed by our in-house manufacturing! Would you like an instant quote estimate or a free designer visit?' }
      ]);
    } else if (actionType === 'more') {
      setMessages(prev => [
        ...prev,
        { sender: 'user', text: 'Tell me more about your packages and 15-year warranty.' },
        { sender: 'bot', text: 'Our full-home packages start from ₹3.5 Lakhs with 15-year warranty on German hardware, 146+ quality checks, and 0% EMI options. You can use our Price Calculator or book a free 3D design session!' }
      ]);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText.trim();
    setInputText('');
    setMessages(prev => [
      ...prev,
      { sender: 'user', text: userMsg }
    ]);

    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: 'bot', text: 'Thank you for reaching out! A senior interior designer from our studio will connect with you within 15 minutes. You can also reach our direct design desk at +91 9363419550.' }
      ]);
    }, 800);
  };

  return (
    <aside aria-label="Customer Support and WhatsApp Assistance" className="fixed bottom-6 right-6 z-50 flex flex-col items-end select-none">
      {/* Full Interactive Chat Drawer / Popup if open */}
      {chatDrawerOpen && (
        <div className="w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden mb-4 animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-[#1E2E24] text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#1F7A4C] flex items-center justify-center font-bold text-white shadow-inner">
                  F
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#1E2E24] rounded-full"></div>
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">FutureSpace Design Desk</h4>
                <p className="text-[11px] text-emerald-300">Online • Replies in 5 mins</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setChatDrawerOpen(false)}
              className="text-gray-300 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Close chat window"
            >
              <X size={18} />
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="p-4 h-72 overflow-y-auto space-y-3 bg-[#FAF7F2] text-xs">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[82%] rounded-2xl p-3 shadow-xs leading-relaxed ${
                    msg.sender === 'user' 
                      ? 'bg-[#1F7A4C] text-white rounded-br-none' 
                      : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
                  }`}
                >
                  <p>{msg.text}</p>
                  <div className="text-[9px] mt-1 text-right opacity-70 flex items-center justify-end gap-1">
                    <span>Just now</span>
                    {msg.sender === 'user' && <CheckCheck size={11} />}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Action Buttons inside Drawer */}
          <div className="p-2.5 bg-gray-50 border-t border-gray-100 flex gap-2 overflow-x-auto text-[11px]">
            <button
              type="button"
              onClick={() => { setChatDrawerOpen(false); onOpenCalculator(); }}
              className="bg-white border border-gray-200 text-gray-700 hover:border-[#1F7A4C] hover:text-[#1F7A4C] font-medium px-3 py-1.5 rounded-full whitespace-nowrap shadow-2xs cursor-pointer"
            >
              Estimate Interior Cost
            </button>
            <button
              type="button"
              onClick={() => { setChatDrawerOpen(false); onOpenConsultation(); }}
              className="bg-[#1F7A4C] hover:bg-[#18633C] text-white font-medium px-3 py-1.5 rounded-full whitespace-nowrap shadow-2xs cursor-pointer"
            >
              Book 3D Design
            </button>
          </div>

          {/* Message Input Form */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask anything about designs, prices..."
              className="flex-1 text-xs bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-2.5 focus:outline-hidden focus:border-[#1F7A4C] text-gray-800"
            />
            <button
              type="submit"
              className="bg-[#1E2E24] hover:bg-[#1F7A4C] text-white p-2.5 rounded-xl transition-colors cursor-pointer"
              aria-label="Send message"
            >
              <Send size={15} />
            </button>
          </form>
        </div>
      )}

      {/* Floating Chat Bubble & Quick Response Buttons (exactly matching sample1.png) */}
      {!chatDrawerOpen && bubbleVisible && (
        <div className="flex flex-col items-end gap-2 mb-3">
          {/* Main White Chat Bubble */}
          <div className="relative bg-white text-gray-900 rounded-2xl shadow-xl px-4 py-3 border border-gray-200/80 max-w-[260px] animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
                <span>👋 Hi! How can we help?</span>
              </p>
              <button
                type="button"
                onClick={() => setBubbleVisible(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                aria-label="Dismiss chat bubble"
              >
                <X size={13} />
              </button>
            </div>
          </div>

          {/* Two Quick-Response Buttons below bubble (matching sample1.png) */}
          <div className="flex flex-col items-end gap-1.5">
            <button
              type="button"
              onClick={() => handleQuickAction('question')}
              className="bg-white hover:bg-emerald-50 text-emerald-700 font-semibold text-xs px-4 py-1.5 rounded-full border border-emerald-600 shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              I have a question
            </button>

            <button
              type="button"
              onClick={() => handleQuickAction('more')}
              className="bg-white hover:bg-emerald-50 text-emerald-700 font-semibold text-xs px-4 py-1.5 rounded-full border border-emerald-600 shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
            >
              Tell me more
            </button>
          </div>
        </div>
      )}

      {/* WhatsApp Circular Button with Red Badge (1) */}
      <button
        type="button"
        onClick={() => {
          setChatDrawerOpen(!chatDrawerOpen);
          setBubbleVisible(false);
        }}
        className="relative group bg-[#25D366] hover:bg-[#20ba59] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
        aria-label="Open WhatsApp live support"
      >
        {/* WhatsApp Icon SVG */}
        <svg 
          className="w-8 h-8 fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.969.54 1.861.855 2.796.855 3.18 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.766-5.768-5.766zm9.969 5.766c0 5.503-4.477 9.98-9.98 9.98-1.748 0-3.385-.45-4.821-1.24l-5.199 1.363 1.391-5.076c-.887-1.488-1.391-3.226-1.391-5.027 0-5.503 4.477-9.98 9.98-9.98 5.503 0 10.02 4.477 10.02 9.98z"/>
        </svg>

        {/* Small Red Notification Badge: 1 (as in sample1.png) */}
        <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-extrabold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-md animate-pulse">
          1
        </span>
      </button>
    </aside>
  );
}
