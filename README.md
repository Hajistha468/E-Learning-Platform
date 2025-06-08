# E-Learning Platform

A full-stack MERN application delivering a scalable, interactive learning experience connecting **Users** and **Instructors**.

## Features

- Role-based access (Users & Instructors)
- User registration and JWT authentication
- Course creation, enrollment, and progress tracking
- YouTube video lectures integration
- Quiz module for select courses stored in MongoDB
- Course completion upon passing quiz, milestone shown on dashboard
- Responsive React frontend with RESTful Node.js backend
- MongoDB for persistent storage

## Tech Stack

- Frontend: React.js  
- Backend: Node.js, Express.js  
- Database: MongoDB  
- Auth: JWT  

## Setup

```bash
git clone https://github.com/your-username/e-learning-platform.git
cd e-learning-platform/backend
npm install
# Setup .env (Mongo URI, JWT_SECRET)
npm start
cd ../frontend
npm install
npm start
