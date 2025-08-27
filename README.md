# JWT Todo App (Node.js + Express + MongoDB)

A simple **full-stack Todo application** with **user authentication (JWT)** and **MongoDB persistence**.  
Users can **sign up, sign in, create todos, and view their todos** securely.

---

## 🚀 Features
- User **Signup & Signin** with JWT Authentication
- Protected routes using **Auth Middleware**
- Add personal todos linked to logged-in user
- View all todos of the authenticated user
- MongoDB Atlas integration using **Mongoose**
- Express.js REST API

---

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (jsonwebtoken)
- **Password Handling**: (Future improvement: bcrypt)

---

## 📂 Project Structure
.
├── server.js # Main Express server
├── db.js # Mongoose models for User & Todo
├── package.json # Dependencies
└── README.md # Documentation


---

## ⚙️ Setup & Installation

1. Clone the repository
   ```bash
   git clone https://github.com/your-username/jwt-todo-app-node-express.git
   cd jwt-todo-app-node-express


Install dependencies

npm install


Create a .env file and add your secrets:

MONGO_URL=mongodb+srv://<your-user>:<your-pass>@cluster0.mongodb.net/todo
JWT_SECRET=your-secret-key


Start the server

node server.js


The server will run at: http://localhost:3000
