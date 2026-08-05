import { Link, useNavigate } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { BsChatSquareDots } from 'react-icons/bs';
import { useState } from 'react';
import { useAuthStore } from '../store/useAuthStore';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const { login, isLoggingIn } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData, navigate);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="max-w-md w-full glass rounded-3xl p-8 shadow-2xl transition-all duration-300 transform hover:scale-[1.01]">
        <div className="flex justify-center mb-8">
          <div className="bg-primary-600 p-3 rounded-2xl shadow-lg shadow-primary-500/30">
            <BsChatSquareDots className="text-white text-3xl" />
          </div>
        </div>
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800 dark:text-white">Welcome Back</h2>
        <p className="text-center text-gray-500 dark:text-gray-400 mb-8">Sign in to continue to ChatPro</p>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiMail className="text-gray-400" />
            </div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white placeholder-gray-400"
              placeholder="Email address"
            />
          </div>
          
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiLock className="text-gray-400" />
            </div>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-primary-500 outline-none transition-all dark:text-white placeholder-gray-400"
              placeholder="Password"
            />
          </div>
          
          <button
            type="submit"
            disabled={isLoggingIn}
            className="w-full bg-primary-600 hover:bg-primary-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg shadow-primary-600/30 active:scale-[0.98]"
          >
            {isLoggingIn ? "Signing In..." : "Sign In"}
          </button>
        </form>
        
        <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary-600 hover:text-primary-500 font-semibold transition-colors">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
