# Full Stack Web Application (Wonderlust Project)

## Description
This is a full-stack web application built using Node.js, Express.js, MongoDB, and EJS following the MVC (Model-View-Controller) architecture. The application allows users to perform complete CRUD (Create, Read, Update, Delete) operations. It also supports image uploads using Cloudinary and includes proper routing, middleware, validation, and error handling.

This project was built to practice backend development, database integration, RESTful routing, and full-stack application structure.

---

## Features

- Create new listings
- View all listings
- View individual listing details
- Edit existing listings
- Delete listings
- Upload and store images using Cloudinary
- Server-side validation
- Error handling using middleware
- MVC architecture implementation
- RESTful routing

---

## Tech Stack

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Frontend
- EJS (Embedded JavaScript Templates)
- HTML
- CSS
- JavaScript

### Other Tools and Libraries
- Cloudinary (Image storage)
- Multer (File upload handling)
- dotenv (Environment variables)
- Express Middleware
- MVC Architecture

---

## Project Structure


## Installation and Setup Instructions

### Step 1: Clone the repository

### Step 2: Install dependencies


npm install


### Step 3: Create .env file in root folder

Create a file named `.env` and add the following:


CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

MONGO_URL=mongodb://127.0.0.1:27017/wonderlust

### Step 4: Start MongoDB

Make sure MongoDB is running locally.

If using terminal:
mongod
Or use MongoDB Compass.

### Step 5: Initialize database (First time only)

node init/index.js
This will insert initial sample data into the database.

### Step 6: Start the server

node app.js
Or using nodemon:

nodemon app.js
### Step 7: Open in browser
