import { FiSearch, FiMoon, FiSun, FiLogOut } from 'react-icons/fi';
import { useAuthStore } from '../store/useAuthStore';
import { useChatStore } from '../store/useChatStore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ darkMode, setDarkMode }) => {
  const { authUser, logout, onlineUsers } = useAuthStore();
  const { users, getUsers, selectedUser, setSelectedUser } = useChatStore();
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="w-full sm:w-80 md:w-[350px] flex flex-col border-r border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 transition-all duration-300">
      {/* Header */}
      <div className="p-4 flex items-center justify-between border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <img src={authUser?.avatar} alt="profile" className="w-10 h-10 rounded-full border-2 border-primary-500 shadow-sm" />
          <h1 className="font-semibold text-xl text-gray-800 dark:text-white">Chats</h1>
        </div>
        <div className="flex items-center gap-1">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 text-gray-500 hover:text-primary-500 hover:bg-white dark:hover:bg-gray-700 rounded-full transition-all">
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button onClick={() => logout(navigate)} className="p-2 text-gray-500 hover:text-red-500 hover:bg-white dark:hover:bg-gray-700 rounded-full transition-all">
            <FiLogOut size={20} />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative group">
          <FiSearch className="absolute left-4 top-3.5 text-gray-400 group-hover:text-primary-500 transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search messages..." 
            className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl pl-11 pr-4 py-2.5 outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all dark:text-white dark:placeholder-gray-500 shadow-sm"
          />
        </div>
      </div>

      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar">
        {users.map((contact) => (
          <div 
            key={contact._id} 
            onClick={() => setSelectedUser(contact)}
            className={`flex items-center gap-3 p-4 mx-2 rounded-2xl cursor-pointer transition-all duration-200 ${selectedUser?._id === contact._id ? 'bg-white dark:bg-gray-700 shadow-sm border border-gray-100 dark:border-gray-600' : 'hover:bg-white dark:hover:bg-gray-700/50 hover:shadow-sm border border-transparent'}`}>
            <div className="relative shrink-0">
              <img src={contact.avatar} alt={contact.name} className="w-12 h-12 rounded-full object-cover shadow-sm" />
              {onlineUsers.includes(contact._id) && <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-gray-900 rounded-full"></div>}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="font-semibold text-gray-900 dark:text-white truncate pr-2">{contact.name}</h3>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-sm truncate text-gray-500 dark:text-gray-400">{contact.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
