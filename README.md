# FoodHub – Professional Real-Time Food Delivery System

A portfolio-ready full-stack food delivery application upgraded from the starter project.

## Features
- Modern responsive customer landing/home page
- JWT registration/login and customer sessions
- Food search, categories and restaurant browsing
- Cart and checkout flow
- MongoDB order persistence
- Customer order history and status timeline
- Socket.IO live order-status updates
- Admin operations dashboard
- Admin food creation and order-status management
- Revenue/customer/food/order statistics
- Seed data for demo accounts and food

## Tech Stack
Frontend: HTML5, CSS3, JavaScript, Socket.IO client
Backend: Node.js, Express, MongoDB/Mongoose, JWT, Socket.IO

## Run locally
1. Open `backend/.env.example`, create `backend/.env`, and set `MONGO_URI` and `JWT_SECRET`.
2. In `backend`: `npm install`
3. Seed demo data: `npm run seed`
4. Start API: `npm start`
5. Open `frontend/index.html` in the browser.

Demo admin: `admin@foodhub.com` / `Admin@123`
Demo customer: `customer@foodhub.com` / `Customer@123`

## Important
This project is production-structure ready but payment gateway integration and deployment credentials must be configured before accepting real payments. For a live deployment, host the backend, MongoDB Atlas database, and frontend separately and change `frontend/js/config.js` to the deployed API URL.
