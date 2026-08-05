import Sidebar from '../components/Sidebar';
import ChatWindow from '../components/ChatWindow';

const Home = ({ darkMode, setDarkMode }) => {
  return (
    <div className="h-screen flex bg-gray-100 dark:bg-gray-900 overflow-hidden relative">
      {/* Background Decor for Premium Feel */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 dark:opacity-10 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 dark:opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="flex w-full max-w-[1600px] mx-auto h-full p-0 sm:p-4 z-10">
        <div className="flex w-full h-full bg-white dark:bg-gray-800 sm:rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <Sidebar darkMode={darkMode} setDarkMode={setDarkMode} />
          <ChatWindow />
        </div>
      </div>
    </div>
  );
};

export default Home;
