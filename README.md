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
