📝 Blog Post Management System
A full-stack web application designed for seamless blog post management. Built using Node.js, Express.js, and MongoDB, the system allows users to securely register/login, and create, edit, delete, or view blog posts—all within a clean and responsive interface.

<p align="center"> <img src="https://img.shields.io/github/repo-size/viggu3sd/Blog-Post-Management-System?color=blue&style=flat-square"> <img src="https://img.shields.io/github/last-commit/viggu3sd/Blog-Post-Management-System?style=flat-square"> <img src="https://img.shields.io/github/license/viggu3sd/Blog-Post-Management-System?style=flat-square"> </p>
🚀 Features
🔐 User Authentication – Secure login and registration with session management.

📝 CRUD Operations – Create, Read, Update, and Delete blog posts.

📱 Responsive Design – User-friendly across all devices.

✅ Form Validation – Uses server-side validation via express-validator.

🗂️ MVC Architecture – Structured codebase for scalability and maintainability.

🌐 Flash Messages – User feedback on actions like login, errors, and post actions.

🛠️ Tech Stack
Backend: Node.js, Express.js
Frontend: HTML, CSS, JavaScript, Pug (Template Engine)
Database: MongoDB (via Mongoose)
Authentication: Passport.js, express-session
Validation: express-validator
Environment Config: dotenv

📁 Project Structure
csharp
Copy
Edit
Blog-Post-Management-System/
├── config/             # Configuration (e.g., DB connection)
├── controllers/        # Business logic and route handlers
├── middleware/         # Custom middleware (auth, error handling)
├── models/             # Mongoose schemas
├── public/             # Static assets (CSS, JS)
├── routes/             # Express route definitions
├── validators/         # Input validation logic
├── views/              # Pug templates
├── .gitignore
├── app.js              # Entry point of the application
├── package.json
└── README.md
⚙️ Installation & Setup
Clone the repository

bash
Copy
Edit
git clone https://github.com/viggu3sd/Blog-Post-Management-System.git
cd Blog-Post-Management-System
Install dependencies

bash
Copy
Edit
npm install
Set up environment variables

Create a .env file in the root directory with the following content:

env
Copy
Edit
PORT=3000
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
Start the server

bash
Copy
Edit
npm start
Visit http://localhost:3000 to explore the app.

🧪 Usage
Visit the homepage: http://localhost:3000

Register a new user account or login.

Access the dashboard to:

✍️ Create a new blog post

✏️ Edit existing posts

❌ Delete unwanted posts

👁️ View all published posts

📸 Screenshots (optional – you can add screenshots later)
Homepage	Dashboard	Create Post
(screenshot)	(screenshot)	(screenshot)

Tip: Replace the placeholders with actual image links once you upload them.

🔮 Future Improvements
🔎 Search functionality for blog posts

🏷️ Tagging and category filters

🧵 Comment system for posts

🧠 AI grammar or tone suggestions

📊 Post view analytics per user

🤝 Contributing
Contributions are welcome!
To contribute:

Fork the repository

Create a new branch: git checkout -b feature-name

Make your changes

Commit and push: git commit -m "Add feature" → git push origin feature-name

Open a Pull Request

📄 License
This project is licensed under the MIT License – see the LICENSE file for details.
