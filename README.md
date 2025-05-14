# Blog-Post-Management-System
📝 Blog Post Management System
A full-stack web application designed to manage blog posts efficiently. Built with Node.js, Express.js, and MongoDB, it offers features like user authentication, post creation, editing, deletion, and viewing, all within a responsive and user-friendly interface.

🚀 Features
User Authentication: Secure login and registration system.

CRUD Operations: Create, Read, Update, and Delete blog posts.

Responsive Design: Ensures usability across various devices.

Validation: Server-side validation for user inputs.

MVC Architecture: Organized codebase following the Model-View-Controller pattern.

🛠️ Technologies Used
Backend: Node.js, Express.js

Frontend: HTML, CSS, JavaScript, Pug (template engine)

Database: MongoDB

Authentication: Passport.js

Validation: express-validator

Others: Mongoose, dotenv

📁 Project Structure
csharp
Copy
Edit
Blog-Post-Management-System/
├── config/             # Configuration files
├── controllers/        # Route handlers
├── middleware/         # Custom middleware
├── models/             # Mongoose models
├── public/             # Static assets (CSS, JS, images)
├── routes/             # Express routes
├── validators/         # Input validation logic
├── views/              # Pug templates
├── .gitignore
├── app.js              # Main application file
├── package.json
└── README.md
⚙️ Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/viggu3sd/Blog-Post-Management-System.git
cd Blog-Post-Management-System
Install dependencies:

bash
Copy
Edit
npm install
Set up environment variables:

Create a .env file in the root directory and add the following:

env
Copy
Edit
PORT=3000
MONGODB_URI=your_mongodb_connection_string
SESSION_SECRET=your_session_secret
Start the application:

bash
Copy
Edit
npm start
The application will run at http://localhost:3000.

🧪 Usage
Navigate to http://localhost:3000 in your browser.

Register a new account or log in with existing credentials.

Create, edit, or delete blog posts as desired.

🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

📄 License
This project is licensed under the MIT License.
