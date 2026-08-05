import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';
import { io } from 'socket.io-client';

export const useAuthStore = create((set, get) => ({
  authUser: JSON.parse(localStorage.getItem('chat-user')) || null,
  isSigningUp: false,
  isLoggingIn: false,
  socket: null,
  onlineUsers: [],

  signup: async (data, navigate) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post('/auth/register', data);
      localStorage.setItem('chat-token', res.data.token);
      localStorage.setItem('chat-user', JSON.stringify(res.data));
      set({ authUser: res.data });
      toast.success('Account created successfully');
      get().connectSocket();
      navigate('/');
    } catch (error) {
      const errorMessage = error.response?.data?.message || (error.code === 'ERR_NETWORK' ? 'Unable to connect to server' : 'Error occurred');
      toast.error(errorMessage);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async (data, navigate) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post('/auth/login', data);
      localStorage.setItem('chat-token', res.data.token);
      localStorage.setItem('chat-user', JSON.stringify(res.data));
      set({ authUser: res.data });
      toast.success('Logged in successfully');
      get().connectSocket();
      navigate('/');
    } catch (error) {
      const errorMessage = error.response?.data?.message || (error.code === 'ERR_NETWORK' ? 'Unable to connect to server' : 'Invalid credentials');
      toast.error(errorMessage);
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: (navigate) => {
    localStorage.removeItem('chat-token');
    localStorage.removeItem('chat-user');
    set({ authUser: null });
    get().disconnectSocket();
    toast.success('Logged out');
    navigate('/login');
  },

  connectSocket: () => {
    const { authUser, socket } = get();
    if (!authUser || (socket && socket.connected)) return;

    const newSocket = io(`http://${window.location.hostname}:5000`, {
      query: { userId: authUser._id }
    });

    set({ socket: newSocket });

    newSocket.on('getOnlineUsers', (userIds) => {
      set({ onlineUsers: userIds });
    });
  },

  disconnectSocket: () => {
    if (get().socket) {
      get().socket.disconnect();
      set({ socket: null });
    }
  }
}));
