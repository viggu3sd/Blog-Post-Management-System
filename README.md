# Blog Management System with Admin Panel

![Node.js](https://img.shields.io/badge/Node.js-14.x+-green) ![Express](https://img.shields.io/badge/Express-4.x-blue) ![MongoDB](https://img.shields.io/badge/MongoDB-5.x-success) ![Passport](https://img.shields.io/badge/Passport.js-Auth-yellow) ![Pug](https://img.shields.io/badge/Pug-Templating-orange)

A full-featured blog platform with user authentication, post management, and administrative controls built with Node.js, Express, and MongoDB.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)
- [License](#license)

## Features
- **User Authentication System**
  - Secure registration and login with password hashing
  - Session management with MongoDB storage
  - Protected routes using Passport.js middleware

- **Blog Post Management**
  - Create, read, update, and delete blog posts
  - Tag-based categorization system
  - Full-text search functionality across posts

- **Admin Control Panel**
  - View all registered users and their roles
  - Manage all blog posts (view/edit/delete any post)
  - Special admin-only routes and interface

## Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/blog-management-system.git
cd blog-management-system

Install dependencies:
npm install

Set up environment variables by creating a .env file in the root directory with:
DB_URI=mongodb://localhost:27017/blogdb
SESSION_SECRET=your-secret-key-here
PORT=3000

Start the development server:
npm start

Access the application at:
http://localhost:3000

## Configuration
Database Setup
Ensure MongoDB is running locally or update the DB_URI in .env for your connection string

Admin Access
Register with username admin to automatically get admin privileges

Or manually set isAdmin: true in MongoDB for an existing user:
db.users.updateOne({username: "admin"}, {$set: {isAdmin: true}})

## Usage
Regular User Flow
Register at /auth/register

Login at /auth/login

Create new posts via "New Post" button

Edit/delete your own posts

Search posts by keywords or tags

Admin User Flow
Login with admin credentials

Access admin panel via navbar dropdown

View all users at /admin/users

Manage all posts at /admin/posts

Delete any post (regardless of owner)

## Project Structure

blog-management-system/
├── config/
│   └── passport.js       # Authentication configuration
├── controllers/
│   ├── authController.js # Auth logic
│   ├── postController.js # Post operations
│   └── adminController.js # Admin functions
├── middleware/
│   ├── auth.js           # Auth middleware
│   └── validator.js      # Validation logic
├── models/
│   ├── user.js           # User model
│   └── post.js           # Post model
├── public/               # Static files
│   ├── css/
│   └── js/
├── routes/
│   ├── auth.js           # Auth routes
│   ├── posts.js          # Post routes
│   └── admin.js          # Admin routes
├── views/
│   ├── auth/             # Auth templates
│   ├── posts/            # Post templates
│   ├── admin/            # Admin templates
│   ├── layout.pug        # Base template
│   └── error.pug         # Error page
├── .env.example          # Env template
├── app.js                # Main app file
└── package.json          # Dependencies

Technology Stack
Backend: Node.js + Express.js

Database: MongoDB with Mongoose ODM

Authentication: Passport.js + Bcrypt.js + express-session

Frontend: Pug templates + Bootstrap 5

Validation: Joi schema validation

Session Storage: connect-mongo

Other: dotenv, method-override, connect-flash

License
This project is licensed under the MIT License. See the LICENSE file for details.
