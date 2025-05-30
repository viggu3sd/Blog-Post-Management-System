# Blog Management System with Admin Panel

![Node.js](https://img.shields.io/badge/Node.js-14.x+-green) ![Express](https://img.shields.io/badge/Express-4.x-blue) ![MongoDB](https://img.shields.io/badge/MongoDB-5.x-success) ![Passport](https://img.shields.io/badge/Passport.js-Auth-yellow) ![Pug](https://img.shields.io/badge/Pug-Templating-orange)

A full-featured blog platform with user authentication, post management, and administrative controls built with Node.js, Express, and MongoDB.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Technology Stack](#technology-stack)
- [License](#license)

## Features

### User Authentication System
- Secure registration and login with password hashing
- Session management with MongoDB storage
- Protected routes using Passport.js middleware

### Blog Post Management
- Create, read, update, and delete blog posts
- Tag-based categorization system
- Full-text search functionality across posts

### Admin Control Panel
- View all registered users and their roles
- Manage all blog posts (view/edit/delete any post)
- Special admin-only routes and interface

## Installation

1.Clone the repository:
git clone https://github.com/yourusername/blog-management-system.git
cd blog-management-system

2.Install Dependencies:
npm install

3.Create a .env file in the root directory and add the following:
DB_URI=mongodb://localhost:27017/blogdb
SESSION_SECRET=your-secret-key-here
PORT=3000

4.Start the development server:
npm start

5.Open your browser and go to:
http://localhost:3000


## Configuration

Ensure MongoDB is running locally or modify `DB_URI` to connect to your own database. To enable admin privileges, register with the username `admin` or manually set admin access by running the following in MongoDB:


db.users.updateOne({ username: "admin" }, { $set: { isAdmin: true } })

## Usage

For regular users: register at `/auth/register`, login at `/auth/login`, create new posts using the "New Post" option, edit or delete your own posts, and search posts using keywords or tags.

For admin users: login as an admin, access the admin panel via the navbar, view all users at `/admin/users`, manage all posts at `/admin/posts`, and delete any post regardless of ownership.



## Technology Stack

Built with Node.js and Express.js on the backend, MongoDB and Mongoose for the database layer, Passport.js and bcrypt for authentication and hashing, connect-mongo for session persistence, and Pug + Bootstrap 5 for the frontend. It also uses Joi for validation, dotenv for environment variables, method-override for HTTP verbs, and connect-flash for flash messaging.

Backend: Node.js + Express.js

Database: MongoDB with Mongoose ODM

Authentication: Passport.js, Bcrypt.js, express-session

Frontend: Pug templates + Bootstrap 5

Validation: Joi

Session Storage: connect-mongo

Environment Management: dotenv

Others: method-override, connect-flash

## License

This project is licensed under the MIT License.





