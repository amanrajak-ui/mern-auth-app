project:
  title: "🔐 MERN Authentication App"
  description: >
    A full-stack authentication system built using MongoDB, Express, React, and Node.js.
    It allows users to register, log in, and access a protected profile page using JWT-based authentication.
    All passwords are securely hashed using bcrypt, and routes are protected via middleware.

features:
  - "📝 User Registration"
  - "🔑 Secure Login with JWT"
  - "🔒 Protected Profile Page"
  - "🚀 MongoDB for storing user credentials"
  - "⚛️ React frontend with Axios for API interaction"
  - "🔐 Password hashing with bcrypt"
  - "🧠 Middleware to protect private routes"
  - "📦 Modular folder structure"

screenshots:
  - register.png
    ![Screenshot (137)](https://github.com/user-attachments/assets/6bfaf617-0215-44f9-beda-dfd87a601175)

  - login.png
   ![Screenshot (136)](https://github.com/user-attachments/assets/3a7ab84e-7cea-4cba-a38a-719c57f8e2db)

  - profile.png
    ![Screenshot (135)](https://github.com/user-attachments/assets/42a86edc-a868-435d-916c-06c5b6fc45eb)

    

structure:
  backend:
    - path: backend/config/db.js
      description: MongoDB connection config
    - path: backend/controllers/authController.js
      description: Logic for register, login, profile
    - path: backend/middleware/authMiddleware.js
      description: JWT verification middleware
    - path: backend/models/User.js
      description: Mongoose schema for User
    - path: backend/routes/authRoutes.js
      description: Auth route definitions
    - path: backend/server.js
      description: Backend entry point
    - path: backend/.env
      description: Environment variables
  frontend:
    - path: frontend/src/components/Navbar.js
      description: Navbar component
    - path: frontend/src/pages/Register.js
      description: Registration page
    - path: frontend/src/pages/Login.js
      description: Login page
    - path: frontend/src/pages/Profile.js
      description: Profile page
    - path: frontend/src/App.js
      description: Route setup
    - path: frontend/src/api.js
      description: Axios base config
    - path: frontend/.env
      description: Frontend environment file

setup:
  clone:
    - command: git clone https://github.com/<your-username>/mern-auth-app.git
    - command: cd mern-auth-app
  backend:
    - command: cd backend
    - command: npm install
    - env:
        PORT: 5000
        MONGO_URI: your_mongodb_connection_string
        JWT_SECRET: your_jwt_secret
    - command: npm run dev
  frontend:
    - command: cd ../frontend
    - command: npm install
    - command: npm start
    - optional_env:
        REACT_APP_API_BASE: http://localhost:5000

authentication_flow:
  - "User registers and details are stored in MongoDB (password hashed)"
  - "User logs in and receives JWT"
  - "Token saved in localStorage"
  - "Protected routes checked using middleware"
  - "Access allowed only if valid token is present"

api_endpoints:
  - method: POST
    route: /api/register
    description: User Registration
  - method: POST
    route: /api/login
    description: Login and JWT Token
  - method: GET
    route: /api/profile
    description: Get profile (protected)



future_features:
  - Forgot password / reset
  - Email verification
  - OAuth login (Google/Facebook)
  - UI redesign with Tailwind
  - Testing with Jest or Cypress

author:
  name: Aman Kumar Rajak
  email: akrajak151@gmail.com
  github: https://github.com/amanrajak-ui
  linkedin: https://www.linkedin.com/in/aman-kumar-rajak-69051326a

license:
  type: MIT
  file: LICENSE
