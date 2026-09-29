# 💬 Real-Time Chat Application

A full-stack **real-time messaging application** built with the **MERN Stack and Socket.IO**, enabling users to communicate instantly through a secure and responsive chat interface.

The application implements **JWT-based authentication, real-time messaging, online/offline presence, persistent message storage, and RESTful APIs**.

## 🌐 Live Demo

**Live Application:** `Add your deployed URL here`

**Backend API:** `Add your backend URL here`

## 📸 Screenshots

### Login

![Login](./screenshots/login.png)

### Chat Interface

![Chat](./screenshots/chat.png)

### User Dashboard

![Dashboard](./screenshots/dashboard.png)

## ✨ Key Features

* 🔐 JWT-based authentication
* 💬 Real-time one-to-one messaging
* ⚡ Socket.IO/WebSocket communication
* 🟢 Online/offline user status
* 💾 Persistent messages using MongoDB
* 👤 User profiles
* 🔍 User search
* 📱 Responsive UI
* 🔒 Protected API routes
* ⏱️ Message timestamps
* ✍️ Real-time typing indicators
* 🚨 Error and loading state handling

## 🛠️ Tech Stack

**Frontend:** React.js, JavaScript, Tailwind CSS, Axios, React Router, Socket.IO Client

**Backend:** Node.js, Express.js, Socket.IO, JWT, bcrypt.js

**Database:** MongoDB, Mongoose

**Tools:** Git, GitHub, Postman, VS Code

## 🧠 Core Implementation

The main real-time communication is implemented using **Socket.IO**.

```text
User A
   ↓
React Client
   ↓
Socket.IO
   ↓
Node.js Server
   ↓
MongoDB
   ↓
Socket.IO
   ↓
React Client
   ↓
User B
```

When User A sends a message, the client emits a Socket.IO event. The server processes the message, stores it in MongoDB, and emits the message to User B's connected socket.

This allows messages to appear instantly without requiring a page refresh.

## 🔐 Authentication Flow

```text
Register/Login
      ↓
Express API
      ↓
Credential Validation
      ↓
JWT Generated
      ↓
Authenticated Client
      ↓
Protected API + Socket Connection
```

Passwords are securely hashed using `bcrypt`, while JWT is used to authenticate protected resources.

## 📦 Installation

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git

cd YOUR_REPOSITORY

cd server
npm install

cd ../client
npm install
```

## ⚙️ Environment Variables

Create `.env` inside the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLIENT_URL=http://localhost:5173
```

Never commit `.env` to GitHub.

## ▶️ Run Locally

### Backend

```bash
cd server
npm run dev
```

### Frontend

```bash
cd client
npm run dev
```

## 🎯 What I Learned

Through this project, I gained practical experience with:

* Full-stack MERN architecture
* REST API development
* JWT authentication
* MongoDB data modeling
* WebSocket communication
* Socket.IO event handling
* Real-time state synchronization
* Client-server architecture
* API integration
* Error handling
* Git and GitHub

## 🚀 Future Improvements

* Group chats
* File and image sharing
* Message reactions
* Read receipts
* Message editing/deletion
* Voice messages
* Video calling
* Push notifications
* End-to-end encryption
* Cloud file storage

## 👨‍💻 Author

**Utkarsh Kumar**

Full Stack MERN Developer

**Tech:** React.js • Node.js • Express.js • MongoDB • Socket.IO • JavaScript
