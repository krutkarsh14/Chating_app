import { FiMoreVertical, FiPaperclip, FiSend, FiSmile, FiPhone, FiVideo, FiX } from 'react-icons/fi';
import { useChatStore } from '../store/useChatStore';
import { useAuthStore } from '../store/useAuthStore';
import { useEffect, useRef, useState } from 'react';
import { BsChatSquareHeart } from 'react-icons/bs';
import EmojiPicker from 'emoji-picker-react';

const ChatWindow = () => {
  const { messages, getMessages, selectedUser, sendMessage, subscribeToMessages, unsubscribeFromMessages } = useChatStore();
  const { authUser, onlineUsers } = useAuthStore();
  const [text, setText] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (selectedUser) {
      getMessages(selectedUser._id);
      subscribeToMessages();
    }
    return () => unsubscribeFromMessages();
  }, [selectedUser, getMessages, subscribeToMessages, unsubscribeFromMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;
    
    sendMessage({
      content: text,
      image: imagePreview
    });
    
    setText('');
    setImagePreview(null);
    setShowEmojiPicker(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert("Image must be smaller than 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onEmojiClick = (emojiObject) => {
    setText((prev) => prev + emojiObject.emoji);
  };

  if (!selectedUser) {
    return (
      <div className="flex-1 hidden sm:flex flex-col items-center justify-center bg-slate-50 dark:bg-gray-900">
        <div className="bg-primary-100 dark:bg-primary-900/30 p-6 rounded-full mb-6 relative animate-pulse">
            <BsChatSquareHeart className="w-16 h-16 text-primary-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Welcome to ChatPro</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-md text-center">Select a contact from the sidebar to start a secure, real-time conversation.</p>
      </div>
    );
  }

  const isOnline = onlineUsers.includes(selectedUser._id);

  return (
    <div className="hidden sm:flex flex-col flex-1 bg-white dark:bg-gray-900 relative transition-colors duration-300">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md z-10 sticky top-0">
        <div className="flex items-center gap-4">
          <img src={selectedUser.avatar} alt={selectedUser.name} className="w-11 h-11 rounded-full object-cover shadow-sm" />
          <div>
            <h2 className="font-bold text-gray-800 dark:text-white text-lg leading-tight">{selectedUser.name}</h2>
            <p className={`text-xs font-medium ${isOnline ? 'text-green-500' : 'text-gray-400'}`}>
              {isOnline ? 'Online' : 'Offline'}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-4 text-gray-500 dark:text-gray-400">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-500 rounded-full transition-all"><FiPhone size={20}/></button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-500 rounded-full transition-all"><FiVideo size={20}/></button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-500 rounded-full transition-all"><FiMoreVertical size={20}/></button>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-slate-50 dark:bg-transparent dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-gray-900 custom-scrollbar relative" onClick={() => setShowEmojiPicker(false)}>
        {messages.map((msg) => (
          <div key={msg._id} className={`flex ${msg.senderId === authUser._id ? 'justify-end' : 'justify-start'} group`} ref={messagesEndRef}>
            <div className={`p-3.5 shadow-sm border border-gray-100 dark:border-gray-700 rounded-2xl max-w-[75%] sm:max-w-[65%] relative ${msg.senderId === authUser._id ? 'bg-primary-500 text-white rounded-tr-sm shadow-primary-500/20' : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-tl-sm'}`}>
              {msg.image && (
                <img src={msg.image} alt="Attachment" className="rounded-xl mb-2 w-full max-w-sm object-cover" />
              )}
              {msg.content && <p className="text-[15px] leading-relaxed break-words">{msg.content}</p>}
              <span className={`text-[10px] float-right mt-1.5 ml-3 font-medium ${msg.senderId === authUser._id ? 'text-blue-200' : 'text-gray-400'}`}>
                 {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} ✓✓
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 z-10 relative">
        {imagePreview && (
          <div className="absolute bottom-[100%] left-4 bg-white dark:bg-gray-800 p-2 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 mb-2">
            <button onClick={() => setImagePreview(null)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-md">
              <FiX size={14} />
            </button>
            <img src={imagePreview} alt="Preview" className="h-24 w-auto rounded-lg object-contain" />
          </div>
        )}

        {showEmojiPicker && (
          <div className="absolute bottom-[100%] left-4 mb-2 shadow-2xl z-50">
            <EmojiPicker onEmojiClick={onEmojiClick} theme="auto" />
          </div>
        )}

        <form onSubmit={handleSendMessage} className="flex items-center gap-2 sm:gap-3 max-w-4xl mx-auto">
          <button type="button" onClick={() => setShowEmojiPicker(!showEmojiPicker)} className={`p-2 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 ${showEmojiPicker ? 'text-primary-500' : 'text-gray-400 dark:text-gray-500'}`}>
            <FiSmile size={24} />
          </button>
          
          <button type="button" onClick={() => fileInputRef.current?.click()} className={`p-2 transition-colors rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 ${imagePreview ? 'text-primary-500' : 'text-gray-400 dark:text-gray-500'}`}>
            <FiPaperclip size={24} />
          </button>
          <input type="file" hidden ref={fileInputRef} onChange={handleImageChange} accept="image/*" />

          <div className="flex-1 bg-gray-100 dark:bg-gray-800 border-none rounded-full flex items-center px-4 shadow-inner transition-colors focus-within:bg-gray-50 dark:focus-within:bg-gray-700">
            <input 
              type="text" 
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type a message..." 
              className="w-full bg-transparent border-none py-3.5 outline-none dark:text-white placeholder-gray-500 text-[15px]"
            />
          </div>
          <button type="submit" disabled={!text.trim() && !imagePreview} className="bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white rounded-full p-3.5 shadow-lg shadow-primary-500/30 transition-transform flex items-center justify-center disabled:opacity-50">
            <FiSend size={20} className="ml-0.5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatWindow;
