📁 project:
  🔐 title: "**MERN Authentication App**"
  📄 description: >
    A full-stack authentication system built using **MongoDB**, **Express**, **React**, and **Node.js**.
    It allows users to register, log in, and access a protected profile page using **JWT-based authentication**.
    All passwords are securely hashed using **bcrypt**, and routes are protected via middleware.

🚀 features:
  - 📝 **User Registration**
  - 🔑 **Secure Login with JWT**
  - 🔒 **Protected Profile Page**
  - 💾 **MongoDB for storing user credentials**
  - ⚛️ **React frontend with Axios**
  - 🔐 **Password hashing with bcrypt**
  - 🧠 **Middleware for protected routes**
  - 📦 **Clean & Modular folder structure**
    
🖼️ screenshots:
  - 🖼️ register.png
  - ![Screenshot (137)](https://github.com/user-attachments/assets/79ab8550-665d-4017-9b42-ce3ab2ed4c34)

  - 🖼️ login.png
  - ![Screenshot (136)](https://github.com/user-attachments/assets/f9cd9393-2959-4a9a-99fc-ce399342506c)

  - 🖼️ profile.png

  - ![Screenshot (135)](https://github.com/user-attachments/assets/ba408d24-9a98-4e6d-8331-6639cf412dd1)

📦 structure:
  backend:
    - path: backend/config/db.js
      📘: MongoDB connection
    - path: backend/controllers/authController.js
      📘: Auth logic (register/login/profile)
    - path: backend/middleware/authMiddleware.js
      📘: JWT middleware
    - path: backend/models/User.js
      📘: Mongoose user schema
    - path: backend/routes/authRoutes.js
      📘: Auth route definitions
    - path: backend/server.js
      📘: Entry point
    - path: backend/.env
      🔐: Env secrets (JWT, Mongo URI)

  frontend:
    - path: frontend/src/components/Navbar.js
      📘: Navigation component
    - path: frontend/src/pages/Register.js
      📘: Registration UI
    - path: frontend/src/pages/Login.js
      📘: Login UI
    - path: frontend/src/pages/Profile.js
      📘: Protected Profile Page
    - path: frontend/src/App.js
      📘: Route Configuration
    - path: frontend/src/api.js
      🌐: Axios config
    - path: frontend/.env
      🔐: API Base URL

🛠️ setup:
  clone:
    - 📥 git clone https://github.com/<your-username>/mern-auth-app.git
    - 📂 cd mern-auth-app

  backend:
    - 📁 cd backend
    - 📦 npm install
    - 🔐 .env:
        PORT: 5000
        MONGO_URI: mongodb+srv://...
        JWT_SECRET: your_secret_key
    - ▶️ npm run dev

  frontend:
    - 📁 cd ../frontend
    - 📦 npm install
    - ▶️ npm start
    - 🌐 optional_env:
        REACT_APP_API_BASE: http://localhost:5000

🔐 authentication_flow:
  - 👤 Register user → hashed & saved in MongoDB
  - 🔑 Login user → get JWT
  - 💾 Save token in localStorage
  - 🧠 Middleware validates token
  - ✅ Access profile page

📮 api_endpoints:
  - POST /api/register → User registration
  - POST /api/login → Login + JWT
  - GET /api/profile → Protected profile route

🛠️ future_features:
  - 🔁 Forgot Password / Reset Email
  - 📧 Email Verification
  - 🔐 OAuth Login (Google / GitHub)
  - 🎨 Tailwind-based UI
  - 🧪 Unit + Integration Testing (Jest, Cypress)

👨‍💻 author:
  name: "**Aman Kumar Rajak**"
  email: akrajak151@gmail.com
  github: https://github.com/amanrajak-ui
  linkedin: https://www.linkedin.com/in/aman-kumar-rajak-69051326a


