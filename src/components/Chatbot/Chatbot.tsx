import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Zap } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const RocketIcon: React.FC<{ launching: boolean }> = ({ launching }) => (
  <motion.svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-7 h-7"
    animate={launching ? { y: [-2, -8, -2], rotate: [0, 5, -5, 0] } : { y: [0, -3, 0] }}
    transition={launching
      ? { duration: 0.4, repeat: Infinity }
      : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
    }
  >
    <path d="M12 2C12 2 7 6 7 13H17C17 6 12 2 12 2Z" fill="url(#rocketGrad)" />
    <path d="M9 13L7 17H17L15 13H9Z" fill="#4F9EFF" opacity="0.6" />
    <circle cx="12" cy="10" r="2" fill="#00D9FF" />
    <path d="M7 13C7 13 5 14 5 16L7 17" fill="#FF006E" />
    <path d="M17 13C17 13 19 14 19 16L17 17" fill="#FF006E" />
    {launching && (
      <>
        <motion.path
          d="M10 17 Q12 22 14 17"
          stroke="#FF8C00"
          strokeWidth="1.5"
          fill="none"
          animate={{ opacity: [1, 0.3, 1], scaleY: [1, 1.5, 1] }}
          transition={{ duration: 0.2, repeat: Infinity }}
          style={{ transformOrigin: '12px 17px' }}
        />
        <motion.path
          d="M11 18 Q12 24 13 18"
          stroke="#FFD700"
          strokeWidth="1"
          fill="none"
          animate={{ opacity: [0.8, 0.2, 0.8], scaleY: [1, 1.8, 1] }}
          transition={{ duration: 0.15, repeat: Infinity }}
          style={{ transformOrigin: '12px 18px' }}
        />
      </>
    )}
    <defs>
      <linearGradient id="rocketGrad" x1="12" y1="2" x2="12" y2="13" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#A855F7" />
        <stop offset="100%" stopColor="#4F9EFF" />
      </linearGradient>
    </defs>
  </motion.svg>
);

const NexusAvatar: React.FC<{ size?: number }> = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="17" stroke="url(#avatarGrad)" strokeWidth="1.5" />
    <rect x="10" y="10" width="16" height="12" rx="3" fill="#0D1225" stroke="#4F9EFF" strokeWidth="0.8" />
    <circle cx="14" cy="16" r="2" fill="#00D9FF">
      <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="22" cy="16" r="2" fill="#00D9FF">
      <animate attributeName="opacity" values="1;0.4;1" dur="2s" begin="0.3s" repeatCount="indefinite" />
    </circle>
    <rect x="14" y="22" width="8" height="4" rx="1" fill="#0D1225" stroke="#A855F7" strokeWidth="0.6" />
    <line x1="16" y1="24" x2="20" y2="24" stroke="#A855F7" strokeWidth="0.8" />
    <line x1="13" y1="18" x2="10" y2="20" stroke="#4F9EFF" strokeWidth="0.6" />
    <line x1="23" y1="18" x2="26" y2="20" stroke="#4F9EFF" strokeWidth="0.6" />
    <defs>
      <linearGradient id="avatarGrad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
        <stop stopColor="#A855F7" />
        <stop offset="1" stopColor="#00D9FF" />
      </linearGradient>
    </defs>
  </svg>
);

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [launching, setLaunching] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (messages.length === 0) {
        addBotMessage("🚀 Hey! I'm NEXUS — Vinayak's AI co-pilot. How are you doing today? Ready to explore something cool built by my developer?");
      }
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const addBotMessage = (content: string) => {
    setMessages(prev => [...prev, { id: Date.now() + 1, type: 'bot', content, timestamp: new Date() }]);
  };

  const generateResponse = (msg: string) => {
    const m = msg.toLowerCase();
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      if (m.includes('good') || m.includes('great') || m.includes('fine') || m.includes('well') || m.includes('okay')) {
        addBotMessage("Awesome! 🌟 So, wanna build something cool with my developer? Vinayak specializes in full-stack apps, AI systems, and things that make people go \"wait, how did you do that?\" 👀");
      } else if (m.includes('bad') || m.includes('not great') || m.includes('tired') || m.includes('meh')) {
        addBotMessage("Aw, hang in there! ⚡ You know what cheers people up? Seeing dope projects. Let me show you what Vinayak has built — might just spark some inspiration! 🚀");
      } else if (m.includes('project') || m.includes('built') || m.includes('work') || m.includes('portfolio')) {
        addBotMessage("Oh you're gonna love this! 🔥 The crown jewels are the **KI Job Portal** (a massive client project with AI & mobile) and **Crank Music Production** (a premium high-end music app). Plus 15+ other projects in full-stack, AI/ML & frontend. Scroll down to see them all! 🚀");
      } else if (m.includes('skill') || m.includes('tech') || m.includes('stack') || m.includes('language')) {
        addBotMessage("His toolkit is *chef's kiss* 👨‍🍳 — React + TypeScript for frontend wizardry, Python for AI/ML sorcery, Node.js for backend muscle. 2+ years of turning coffee into code. ☕→💻");
      } else if (m.includes('contact') || m.includes('hire') || m.includes('available') || m.includes('collab')) {
        addBotMessage("Ooh, smart move! 🎯 Vinayak's radar is ON and he's looking for the next exciting challenge. Fair warning: he WILL talk your ear off about AI. Shall I fly you to the contact section? 🛸");
      } else if (m.includes('hello') || m.includes('hi') || m.includes('hey') || m.includes('sup')) {
        addBotMessage("Hello, fellow human! 👋 I'm NEXUS, your guide to Vinayak's universe. We've got projects, skills, and enough tech magic to fill a spaceship. Where shall we explore first?");
      } else if (m.includes('cool') || m.includes('build') || m.includes('yes') || m.includes('sure') || m.includes('yeah')) {
        addBotMessage("THAT'S THE SPIRIT! 🚀🔥 Vinayak builds things that don't just work — they *impress*. Drop him a message in the Contact section and let's get this collaboration launched into orbit!");
      } else if (m.includes('who') || m.includes('vinayak') || m.includes('developer') || m.includes('about')) {
        addBotMessage("Vinayak Dwivedi — full-stack dev & AI enthusiast. He bridges human creativity with machine intelligence. 2+ years, 15+ projects, 1 mission: build stuff that matters. Pretty cool guy, ngl. 🧑‍💻✨");
      } else {
        addBotMessage("Interesting query, scanning neural pathways… 🧠⚡ I can tell you about Vinayak's projects, tech stack, or how to get in touch. What would you like to explore, explorer? 🌌");
      }
    }, 1400);
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setLaunching(true);
    setTimeout(() => setLaunching(false), 1200);
    setMessages(prev => [...prev, { id: Date.now(), type: 'user', content: inputValue, timestamp: new Date() }]);
    generateResponse(inputValue);
    setInputValue('');
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  const quickReplies = ["🚀 I'm doing great!", "😎 Show me projects", "🛠 What's his tech stack?", "📬 I want to hire him"];

  return (
    <>
      {/* Floating Orb Button — z-[9999] to stay above noise overlay */}
      <motion.div
        className="fixed bottom-6 right-6"
        style={{ zIndex: 9999 }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 1.5 }}
      >
        {/* Outer pulse rings */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, transparent 70%)' }}
          animate={{ scale: [1, 1.6, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,217,255,0.3) 0%, transparent 70%)' }}
          animate={{ scale: [1, 2, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />

        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-16 h-16 rounded-full flex items-center justify-center cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #A855F7 0%, #4F9EFF 50%, #00D9FF 100%)',
            boxShadow: '0 0 30px rgba(168,85,247,0.6), 0 0 60px rgba(79,158,255,0.3), inset 0 0 20px rgba(255,255,255,0.1)',
          }}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          animate={{ boxShadow: [
            '0 0 20px rgba(168,85,247,0.5), 0 0 40px rgba(79,158,255,0.2)',
            '0 0 40px rgba(168,85,247,0.8), 0 0 80px rgba(0,217,255,0.4)',
            '0 0 20px rgba(168,85,247,0.5), 0 0 40px rgba(79,158,255,0.2)',
          ]}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: '1.5px dashed rgba(0,217,255,0.5)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          {/* Inner glass circle */}
          <div className="absolute inset-1 rounded-full" style={{ background: 'rgba(5,8,16,0.6)', backdropFilter: 'blur(4px)' }} />

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} className="relative z-10">
                <X size={22} className="text-white" />
              </motion.div>
            ) : (
              <motion.div key="rocket" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="relative z-10">
                <RocketIcon launching={launching} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Status dot */}
          <motion.div
            className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2 border-cyber-dark"
            style={{ background: '#00FF88' }}
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.button>

        {/* Tooltip */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 2 }}
              className="absolute right-20 bottom-4 whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium text-white pointer-events-none"
              style={{ background: 'rgba(13,18,37,0.95)', border: '1px solid rgba(168,85,247,0.4)', backdropFilter: 'blur(10px)' }}
            >
              <span className="mr-1">🚀</span> Chat with NEXUS
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 60, scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="fixed bottom-28 right-6 w-[92vw] max-w-[400px]"
            style={{ zIndex: 9999, maxHeight: '580px' }}
          >
            {/* Panel */}
            <div
              className="flex flex-col rounded-2xl overflow-hidden"
              style={{
                height: '560px',
                background: 'rgba(5,8,16,0.92)',
                border: '1px solid rgba(168,85,247,0.3)',
                backdropFilter: 'blur(24px)',
                boxShadow: '0 0 60px rgba(168,85,247,0.15), 0 0 120px rgba(79,158,255,0.1), inset 0 0 60px rgba(0,0,0,0.5)',
              }}
            >
              {/* Animated top accent line */}
              <motion.div
                className="h-0.5 w-full"
                style={{ background: 'linear-gradient(90deg, #A855F7, #4F9EFF, #00D9FF, #A855F7)' }}
                animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />

              {/* Header */}
              <div className="p-4 flex items-center justify-between" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <NexusAvatar size={40} />
                    <motion.div
                      className="absolute -inset-1 rounded-full"
                      style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.3), transparent)' }}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-white text-sm tracking-widest" style={{ fontFamily: 'JetBrains Mono, monospace' }}>NEXUS</h3>
                      <motion.div
                        className="px-1.5 py-0.5 rounded text-[9px] font-bold tracking-wider"
                        style={{ background: 'rgba(168,85,247,0.2)', border: '1px solid rgba(168,85,247,0.4)', color: '#A855F7' }}
                        animate={{ opacity: [1, 0.6, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        AI
                      </motion.div>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ background: '#00FF88' }}
                        animate={{ opacity: [1, 0.3, 1] }}
                        transition={{ duration: 1.2, repeat: Infinity }}
                      />
                      <span className="text-[11px]" style={{ color: '#6b7280' }}>Online · Vinayak's co-pilot</span>
                    </div>
                  </div>
                </div>
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full transition-colors"
                  style={{ color: '#6b7280' }}
                  whileHover={{ scale: 1.1, color: '#ffffff', background: 'rgba(255,255,255,0.1)' }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={16} />
                </motion.button>
              </div>

              {/* Scan line effect */}
              <motion.div
                className="absolute left-0 right-0 h-px pointer-events-none"
                style={{ background: 'linear-gradient(90deg, transparent, rgba(0,217,255,0.3), transparent)', top: '60px' }}
                animate={{ top: ['60px', '560px', '60px'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(168,85,247,0.3) transparent' }}>
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 12, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'} gap-2`}
                  >
                    {msg.type === 'bot' && <NexusAvatar size={28} />}
                    <div
                      className="max-w-[78%] px-3.5 py-2.5 rounded-2xl"
                      style={msg.type === 'user' ? {
                        background: 'linear-gradient(135deg, #A855F7, #4F9EFF)',
                        boxShadow: '0 0 20px rgba(168,85,247,0.3)',
                        color: 'white',
                        borderBottomRightRadius: '4px',
                      } : {
                        background: 'rgba(13,18,37,0.8)',
                        border: '1px solid rgba(168,85,247,0.2)',
                        color: '#e8eaf0',
                        borderBottomLeftRadius: '4px',
                      }}
                    >
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                      <span className="text-[10px] opacity-50 mt-1 block">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2">
                    <NexusAvatar size={28} />
                    <div
                      className="px-4 py-3 rounded-2xl"
                      style={{ background: 'rgba(13,18,37,0.8)', border: '1px solid rgba(168,85,247,0.2)', borderBottomLeftRadius: '4px' }}
                    >
                      <div className="flex gap-1.5 items-center">
                        {[0, 0.15, 0.3].map((delay, i) => (
                          <motion.div
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{ background: 'linear-gradient(135deg, #A855F7, #00D9FF)' }}
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay }}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Quick Replies */}
              {messages.length <= 1 && (
                <div className="px-4 pb-2">
                  <div className="flex flex-wrap gap-1.5">
                    {quickReplies.map((reply, i) => (
                      <motion.button
                        key={i}
                        onClick={() => { setInputValue(reply); setTimeout(() => { setMessages(p => [...p, { id: Date.now(), type: 'user', content: reply, timestamp: new Date() }]); generateResponse(reply); setInputValue(''); }, 0); }}
                        className="px-3 py-1.5 text-xs rounded-full transition-all"
                        style={{ background: 'rgba(168,85,247,0.08)', border: '1px solid rgba(168,85,247,0.25)', color: '#c4b5fd' }}
                        whileHover={{ scale: 1.05, background: 'rgba(168,85,247,0.2)', borderColor: 'rgba(168,85,247,0.6)' }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {reply}
                      </motion.button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input */}
              <div className="p-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="flex gap-2 items-center">
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={e => setInputValue(e.target.value)}
                      onKeyDown={handleKey}
                      placeholder="Transmit a message…"
                      className="w-full px-4 py-2.5 text-sm text-white placeholder-gray-500 rounded-xl outline-none transition-all"
                      style={{
                        background: 'rgba(13,18,37,0.8)',
                        border: '1px solid rgba(168,85,247,0.2)',
                        fontFamily: 'inherit',
                      }}
                      onFocus={e => { e.target.style.borderColor = 'rgba(168,85,247,0.6)'; e.target.style.boxShadow = '0 0 20px rgba(168,85,247,0.15)'; }}
                      onBlur={e => { e.target.style.borderColor = 'rgba(168,85,247,0.2)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                  <motion.button
                    onClick={handleSend}
                    disabled={!inputValue.trim()}
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ background: 'linear-gradient(135deg, #A855F7, #4F9EFF)', boxShadow: '0 0 20px rgba(168,85,247,0.4)' }}
                    whileHover={{ scale: 1.08, boxShadow: '0 0 30px rgba(168,85,247,0.6)' }}
                    whileTap={{ scale: 0.92 }}
                  >
                    <motion.div
                      animate={launching ? { rotate: [0, -20, 20, 0], y: [0, -3, 0] } : {}}
                      transition={{ duration: 0.4 }}
                    >
                      <Zap size={16} className="text-white" fill="white" />
                    </motion.div>
                  </motion.button>
                </div>
                <p className="text-center text-[10px] mt-2" style={{ color: 'rgba(107,114,128,0.6)' }}>
                  NEXUS · Powered by Vinayak's brain 🧠
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
