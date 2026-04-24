import React, { useState, useRef, useEffect } from 'react';
import { generateChatReply } from '../../api/chat.js';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';

const MAX_MESSAGES = 10;

const Chatbot = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: t(`chat.welcome`) }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatCounter, setChatCounter] = useState(0);
  const messagesEndRef = useRef(null);

  useEffect(() => {
  const today = new Date().toDateString(); 
  const savedData = JSON.parse(localStorage.getItem('chat_session')) || { count: 0, date: today };

  if (savedData.date !== today) {
    setChatCounter(0);
    localStorage.setItem('chat_session', JSON.stringify({ count: 0, date: today }));
  } else {
    setChatCounter(savedData.count);
  }
}, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(scrollToBottom, [messages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    if (chatCounter >= MAX_MESSAGES) {
      setMessages(prev => [...prev, 
        { role: 'user', text: input.trim() },
        { role: 'bot', text: t(`chat.limitMsg`) }
      ]);
      setInput('');
      return;
    }

    const userMsg = input.trim();
    const currentHistory = [...messages];
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsLoading(true);

    try {
      const reply = await generateChatReply(userMsg, currentHistory, lang);
      setMessages(prev => [...prev, { role: 'bot', text: reply }]);
      const newCount = chatCounter + 1;
      setChatCounter(newCount);
      localStorage.setItem('chat_session', JSON.stringify({ 
      count: newCount, 
      date: new Date().toDateString()
    }));
      
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: "Lỗi kết nối, vui lòng thử lại sau!" }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-amber-700 transition-transform hover:scale-110"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[500px] animate-[fadeIn_0.3s_ease-out]">
          
          <div className="bg-slate-900 text-white p-4 flex items-center gap-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <h3 className="font-bold text-sm">Thiên Kim Assistant</h3>
              <p className="text-xs text-slate-400">{t(`chat.slogan`)}</p>
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-amber-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-700 border border-slate-200 rounded-tl-none shadow-sm'
                }`}>
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 p-3 rounded-2xl rounded-tl-none flex gap-1">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t(`chat.placeholder`)}
              className="flex-1 px-4 py-2 bg-slate-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-slate-800 disabled:opacity-50"
            >
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
            </button>
          </form>

        </div>
      )}
    </div>
  );
};

export default Chatbot;