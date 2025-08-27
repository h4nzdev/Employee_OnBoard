
-----

# Employee Onboarding System - Frontend

A simple and clean **HR & Client dashboard** for managing employees and their tasks/requirements. Built with **React**, **TypeScript**, **Tailwind CSS**, and **Lucide React icons**.

\<br\>

## 🚀 Features

  * **Responsive design:** The UI adapts to different screen sizes, ensuring a great user experience on both desktop and mobile devices.
  * **Role-based dashboards:** Separate views for HR and Client users, with routing handled via `AuthContext`.
  * **Comprehensive HR dashboard:** A quick overview of key metrics, including total employees, new hires, pending reviews, and time-off requests.
  * **Employee management:** A list of employees with their roles, departments, statuses, and available actions.
  * **Simple state management:** Uses React's built-in **Context API** for authentication and role management.
  * **Reusable components:** A modular folder structure with reusable components like `Sidebar` and `Header` to promote maintainability.

-----

## 🛠️ Tech Stack

  * **Framework:** React + TypeScript
  * **Styling:** Tailwind CSS
  * **Icons:** Lucide React icons
  * **Routing:** React Router DOM
  * **State Management:** Context API
  * **API Calls:** Axios (optional)

-----

## 📁 Folder Structure

```
frontend/
│
├─ src/
│   ├─ components/
│   │   ├─ HRDashboard/
│   │   ├─ Sidebar.tsx
│   │   └─ Header.tsx
│   │
│   ├─ context/
│   │   └─ AuthContext.tsx
│   │
│   ├─ pages/
│   │   ├─ HRDashboard.tsx
│   │   └─ ClientDashboard.tsx
│   │
│   ├─ routes/
│   │   ├─ HRRoutes.tsx
│   │   ├─ ClientRoutes.tsx
│   │   └─ index.tsx
│   │
│   ├─ App.tsx
│   └─ main.tsx
│
├─ package.json
├─ tailwind.config.js
└─ tsconfig.json

```

-----

## 🚀 Getting Started

### 1\. Clone the repository

```bash
git clone https://github.com/h4nzdev/EmployeeOnBoardSystem
cd frontend
```

### 2\. Install dependencies

```bash
npm install
```

### 3\. Start the development server

```bash
npm run dev
```

  * The application will be available in your browser at `http://localhost:5173`.

-----

## 📝 Notes

  * This project currently uses **placeholder data**. A backend API can be integrated by replacing the placeholder logic with **Axios** calls.
  * The styling is managed exclusively through **Tailwind CSS classes** and the UI components are enhanced with **Lucide icons**.
  * The dashboards and sidebar are fully **responsive** and built to be easily expanded with new features.

-----

## 👨‍💻 Author

  * **Hanz** - Personal Project

-----
