# Employee Onboarding System

A comprehensive web application for managing employee onboarding processes. This system streamlines the onboarding workflow for HR departments and provides a seamless experience for new employees and clients.

## Project Overview

The Employee Onboarding System is designed to facilitate the entire employee onboarding journey, from job offers to task management. It provides different interfaces for HR personnel and clients, with authentication to ensure secure access to relevant information.

## Features

- **User Authentication**: Secure login system with role-based access control
- **Employee Management**: Create, view, update, and delete employee records
- **Task Management**: Assign, track, and update onboarding tasks with priority levels
- **Client Portal**: Dedicated interface for clients to interact with the system
- **Job Offer Management**: Create and manage job offers for potential employees

## Technology Stack

### Backend
- Node.js with Express.js framework
- MongoDB with Mongoose ODM
- RESTful API architecture
- JWT for authentication

### Frontend
- React with TypeScript
- React Router for navigation
- Tailwind CSS for styling
- Axios for API requests
- SweetAlert2 for notifications

## Project Structure

```
├── backend/
│   ├── config/         # Database configuration
│   ├── controllers/    # Request handlers
│   ├── model/          # Database models
│   ├── routes/         # API routes
│   └── server.js       # Entry point
└── frontend/
    ├── public/         # Static files
    └── src/
        ├── assets/     # Images and other assets
        ├── components/ # Reusable UI components
        ├── context/    # React context providers
        ├── data/       # Static data
        ├── hooks/      # Custom React hooks
        ├── layout/     # Layout components
        ├── pages/      # Page components
        ├── routes/     # Routing configuration
        ├── types/      # TypeScript type definitions
        └── utils/      # Utility functions
```

## Installation

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/employee-onboard
   JWT_SECRET=your_jwt_secret
   ```
4. Start the server:
   ```
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd frontend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

## API Endpoints

### Authentication
- `POST /login` - User login
- `POST /register` - User registration

### Employees
- `GET /employees` - Get all employees
- `GET /employees/:id` - Get employee by ID
- `POST /employees` - Create new employee
- `PUT /employees/:id` - Update employee
- `DELETE /employees/:id` - Delete employee

### Clients
- `GET /client` - Get all clients
- `GET /client/:id` - Get client by ID
- `POST /client` - Create new client
- `PUT /client/:id` - Update client
- `DELETE /client/:id` - Delete client

### Job Offers
- `GET /job-offer` - Get all job offers
- `GET /job-offer/:id` - Get job offer by ID
- `POST /job-offer` - Create new job offer
- `PUT /job-offer/:id` - Update job offer
- `DELETE /job-offer/:id` - Delete job offer

## User Roles

- **HR**: Access to all features including employee management, task assignment, and client management
- **Client**: Limited access to view and interact with assigned tasks and information

## License

This project is licensed under the ISC License.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.