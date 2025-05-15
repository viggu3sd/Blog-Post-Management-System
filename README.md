# Blog Management System with Admin Panel

![Node.js](https://img.shields.io/badge/Node.js-14.x+-green) ![Express](https://img.shields.io/badge/Express-4.x-blue) ![MongoDB](https://img.shields.io/badge/MongoDB-5.x-success)

A complete blog platform with user authentication, post management, and admin controls.

## Features
- **User Auth**: Secure login/registration with sessions
- **Post Management**: Create/edit/delete posts with tags
- **Admin Panel**: Manage users/posts (view/delete any content)
- **Search**: Find posts by keywords/tags

## Quick Start
1. Clone repo & install dependencies:
```bash
git clone https://github.com/yourusername/blog-system.git
cd blog-system
npm install
Create .env file:

env
DB_URI=mongodb://localhost:27017/blogdb
SESSION_SECRET=your-secret-key
PORT=3000
Start server:

