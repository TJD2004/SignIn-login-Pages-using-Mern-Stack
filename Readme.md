# 🔐 Full-Stack Sign Up / Login System with MERN Stack

A secure, production-ready user authentication system built with the **MERN Stack** (MongoDB, Express.js, React.js, Node.js). It allows users to register, log in, stay authenticated via JWT tokens, and access protected content. Frontend and backend are connected via RESTful API.

---

## 📚 Table of Contents

- [📄 Overview](#-overview)
- [✨ Features](#-features)
- [🖼️ Screenshots](#️-screenshots)
- [🧱 Tech Stack](#-tech-stack)
- [📂 Folder Structure](#-folder-structure)
- [⚙️ Setup & Installation](#️-setup--installation)
- [🌐 API Endpoints](#-api-endpoints)
- [🚀 Deployment](#-deployment)
- [📜 License](#-license)
- [🙋‍♂️ Author](#-author)

---

## 📄 Overview

This project demonstrates a complete full-stack **user authentication system**. It includes:

- A responsive frontend built with **React.js**
- A secure backend using **Node.js**, **Express.js**, and **MongoDB**
- **JWT authentication**, **bcrypt password hashing**, and protected routes
- Modular and scalable code structure for real-world usage

---

## ✨ Features

- ✅ User registration with email and password
- 🔐 Login with secure authentication
- 🔄 Passwords hashed with **bcrypt**
- 🪪 JWT-based login token management
- 🔒 Protected routes on frontend and backend
- 💾 MongoDB integration with **Mongoose**
- 🧠 Session management with `localStorage`
- 🔁 Logout functionality
- 📱 Responsive design

---

## 🖼️ Screenshots

> *(Replace these with your actual screenshots)*

![Register Page](screenshots/register.png)  
![Login Page](screenshots/login.png)  
![Dashboard](screenshots/dashboard.png)

---

## 🧱 Tech Stack

### 🔧 Backend:
- Node.js
- Express.js
- MongoDB + Mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors

### 🎨 Frontend:
- React.js
- Axios
- React Router DOM
- CSS / Tailwind / Bootstrap (your choice)
- localStorage

---

## 📂 Folder Structure


SignIn-Login-MERN/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── middleware/
│ ├── routes/
│ ├── server.js
│ └── .env
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── App.js
│ │ ├── index.js
│ ├── public/
│ ├── package.json
│ └── .env
└── README.md


---

## ⚙️ Setup & Installation

### 🧩 Prerequisites
- Node.js (v14+)
- MongoDB Atlas or Local MongoDB
- Git

### 🔄 Clone the Repository

```bash
git clone https://github.com/your-username/SignIn-login-Pages-using-Mern-Stack.git
cd SignIn-login-Pages-using-Mern-Stack


⚙️ Backend Setup

cd backend
npm install


PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key


npm run server

/

🎨 Frontend Setup

cd ../frontend
npm install

REACT_APP_API_URL=http://localhost:5000/api

npm start

🚀 Deployment

npm run build

📜 License

This project is licensed under the MIT License — see the LICENSE file for details.

🙋‍♂️ Author
Tushar
GitHub: @TJD2004
Project: SignIn-login-Pages-using-Mern-Stack


---

### ✅ What to Customize:
- Add real **screenshots**
- Replace your MongoDB URI, JWT secrets (never commit `.env`)
- Add your **deployment links**
- Replace `your-username` and project details

Let me know if you want a version with **forgot password**, **Google OAuth**, or **email verification**!
