# 🔐 MERN Authentication App

A full-stack authentication system built using **MongoDB**, **Express**, **React**, and **Node.js**.  
It allows users to register, log in, and access a protected profile page using **JWT-based authentication**.

---

## 🚀 Features

- 📝 **User Registration**
- 🔑 **Login with JWT**
- 🔒 **Protected Profile Page**
- 💾 **MongoDB storage**
- ⚛️ **React + Axios**
- 🔐 **Password hashing (bcrypt)**
- 🧠 **Middleware for route protection**
- 📦 **Clean folder structure**

---
![Screenshot (137)](https://github.com/user-attachments/assets/9c63a145-0dc8-4e73-ad8e-dd288500f921)

![Screenshot (136)](https://github.com/user-attachments/assets/10fdefcb-ff4c-41bc-85d0-9cdd0d091733)

![Screenshot (135)](https://github.com/user-attachments/assets/0aee7de1-6270-4408-a868-9fb994f6df27)


## 📦 Project Structure

### 🔧 Backend

| File                          | Description                          |
|-------------------------------|--------------------------------------|
| `backend/config/db.js`        | MongoDB config                       |
| `backend/controllers/...`     | Auth logic (register/login/profile) |
| `backend/middleware/...`      | JWT middleware                       |
| `backend/models/User.js`      | User schema                          |
| `backend/routes/authRoutes.js`| Routes                               |
| `backend/server.js`           | Entry point                          |

### 💻 Frontend

| File                            | Description              |
|---------------------------------|--------------------------|
| `frontend/src/pages/Login.js`   | Login page               |
| `frontend/src/pages/Register.js`| Registration page        |
| `frontend/src/pages/Profile.js` | Profile page             |
| `frontend/src/api.js`           | Axios base URL setup     |
| `frontend/src/components/...`   | Navbar etc.              |

---

## ⚙️ Setup Instructions

### 🔁 Clone Project

```bash
git clone https://github.com/<your-username>/mern-auth-app.git
cd mern-auth-app
