# 💬 Real-Time Chat Application

A full-stack **Real-Time Chat Application** built using the **MERN Stack**, **MVC Architecture**, and **Socket.IO**. The application enables users to communicate instantly through a responsive and secure chat interface.

The project demonstrates practical implementation of **JWT authentication, RESTful APIs, MongoDB, MVC architecture, WebSocket communication, and real-time messaging**.

---

## 🌐 Live Demo

🚀 **Live Application:**

https://massaging-web-app-using-react-and-n.vercel.app/login

---

## 📌 Project Overview

This application is designed as a real-time messaging platform where authenticated users can communicate with each other instantly.

The backend follows the **MVC (Model-View-Controller) architecture** to maintain a clean separation between database logic, business logic, and API routes.

**Socket.IO** is used for real-time communication between connected users.

---

# ✨ Features

## 🔐 Authentication

- User registration
- User login
- JWT-based authentication
- Password hashing using bcrypt
- Protected routes
- Logout functionality

## 💬 Real-Time Messaging

- One-to-one messaging
- Instant message delivery
- Socket.IO based communication
- Persistent message storage
- Message timestamps
- Real-time chat updates
- No page refresh required

## 👤 User Management

- User profiles
- User search
- User selection
- Online/offline status

## 🎨 User Interface

- Responsive chat interface
- Clean and modern UI
- Mobile-friendly design
- Loading states
- Error handling
- Real-time UI updates

---

# 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- React Router
- Axios
- Socket.IO Client
- CSS / Tailwind CSS

### Backend

- Node.js
- Express.js
- Socket.IO
- JWT
- bcrypt.js
- REST APIs

### Database

- MongoDB
- Mongoose

### Tools & Deployment

- Git
- GitHub
- Postman
- VS Code
- MongoDB Compass
- Vercel

---

# 🏗️ Architecture

The backend follows the **MVC (Model-View-Controller)** architecture.

```text
                    ┌───────────────────────┐
                    │      React Client     │
                    │       Frontend        │
                    └───────────┬───────────┘
                                │
                         HTTP / REST API
                                │
                                ▼
                    ┌───────────────────────┐
                    │       Routes          │
                    │     Express.js        │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │     Controllers       │
                    │    Business Logic     │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │        Models         │
                    │       Mongoose        │
                    └───────────┬───────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │       MongoDB         │
                    │       Database        │
                    └───────────────────────┘


                 Real-Time Communication
                         Socket.IO
                            │
             ┌──────────────┴──────────────┐
             ▼                             ▼
          User A                         User B
