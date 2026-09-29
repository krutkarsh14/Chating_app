# 💬 Real-Time Chat Application

A full-stack **Real-Time Chat Application** built using the **MERN Stack**, **MVC Architecture**, and **Socket.IO**. The application provides users with a responsive interface for real-time communication while maintaining secure authentication and persistent message storage.

---

## 📌 Overview

This project demonstrates the development of a production-style real-time messaging system using modern full-stack technologies.

The backend follows the **MVC (Model-View-Controller) architecture** to separate database models, business logic, and API routes. **Socket.IO** is used to establish real-time, bidirectional communication between connected clients.

### Core Concepts Implemented

- MERN Stack development
- MVC architecture
- RESTful API development
- JWT authentication
- Password hashing
- MongoDB database management
- Real-time communication with Socket.IO
- Client-server communication
- Protected API routes
- Responsive React interface

---

## ✨ Features

### 🔐 Authentication

- User registration
- User login
- JWT-based authentication
- Password hashing using bcrypt
- Protected routes
- Authentication middleware
- Logout functionality

### 💬 Real-Time Messaging

- Real-time one-to-one messaging
- Instant message delivery using Socket.IO
- Persistent message storage
- Message timestamps
- Real-time chat updates
- No page refresh required for new messages

### 👤 User Management

- User listing
- User selection for conversations
- User profile information
- Online/offline presence handling

### 🎨 User Interface

- Responsive chat interface
- Clean and intuitive design
- Component-based React architecture
- Loading states
- Error handling
- Real-time UI updates

---

# 🛠️ Tech Stack

## Frontend

- **React.js**
- **JavaScript**
- **React Router**
- **Axios**
- **Socket.IO Client**
- **CSS / Tailwind CSS**

## Backend

- **Node.js**
- **Express.js**
- **Socket.IO**
- **JWT**
- **bcrypt.js**
- **REST APIs**

## Database

- **MongoDB**
- **Mongoose**

## Development Tools

- **Git**
- **GitHub**
- **Postman**
- **VS Code**
- **MongoDB Compass**

---

# 🏗️ System Architecture

```text
                         ┌──────────────────────┐
                         │     React Client     │
                         │      Frontend        │
                         └──────────┬───────────┘
                                    │
                              HTTP / REST
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │     Express.js       │
                         │       Routes         │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │    Controllers       │
                         │   Business Logic     │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │       Models         │
                         │      Mongoose        │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │       MongoDB        │
                         │      Database        │
                         └──────────────────────┘


                    ┌─────────────────────────────┐
                    │        Socket.IO            │
                    │   Real-Time Communication   │
                    └──────────────┬──────────────┘
                                   │
                         ┌─────────┴─────────┐
                         ▼                   ▼
                      User A              User B
