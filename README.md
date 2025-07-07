# Skrivee-Media
A modern, modular React application built with Vite — designed for fast development, clean architecture, and optimized performance.

# Getting Started
# Setup Instructions

✅ Prerequisites
Make sure you have the following installed:

Node.js (v18 or higher)
👉 Download Node.js

npm or yarn
Check your versions:


node --version
npm --version

# Installation


->Clone the repository

git clone <repository-url>
cd Skrivee-Media/user-directory


->Install dependencies

Using npm:
npm install

Or using yarn:
yarn install


-> Run the App
Start the development server:

npm run dev
or
yarn dev

->The app will be available at:
Local: http://localhost:5173

# Available Scripts
Script              -	Description
npm run dev	        -   Run the development server
npm run build       - 	Build the app for production
npm run preview     - 	Preview the production build locally
npm run lint        -	Check for code style issues

# Project Structure

user-directory/
├── public/          # Static assets
├── src/
│   ├── assets/      # Images, fonts, etc.
│   ├── components/  # Reusable React components
│   ├── context/     # Theme context
│   ├── pages/       # Page components
│   ├── services/    # API calls and utilities
│   ├── App.jsx      # Root component
│   ├── main.jsx     # Entry point
│   └── index.css    # Global styles
├── index.html       # HTML template
├── package.json     # Scripts and dependencies
└── vite.config.js   # Vite configuration


# Tech Stack
-React 19.1.0 – Component-based UI

-Vite 7.0.0 – Lightning-fast build tool

-ESLint – Linting for code quality

# Troubleshooting
Issue                      -	Solution
Port 5173 already in use   -	Vite will auto-switch, or change it in vite.config.js
Wrong Node version         -	Make sure Node is ≥ 18
Dependency issues          -	Try rm -rf node_modules && npm install
API errors or empty data   -	Check console, internet, and the RandomUser API availability


# My Approach for this prohject
This project emphasizes:

-Separation of concerns through well-structured and reusable components.

-Centralized state management in the main controller (UserDirectory.jsx).

-Optimized rendering using hooks like useMemo for performance.

-Responsive UI with real-time filtering, sorting, and dark/light theming using context.

# Component Architecture & Flow
📌 Component Hierarchy

App.jsx (Root)
├── ThemeProvider (Context)
└── UserDirectory (Main Page)
    ├── ThemeToggle (Theme Switcher)
    ├── SearchBar (User Input)
    ├── SortControls (Sorting Options)
    └── UserGrid (Display Container)
        └── UserCard[] (Individual User Items)


# Component Responsibilities

Component	     -     Role & Description
App.jsx          -	  Root component. Wraps everything in ThemeProvider and renders UserDirectory.
ThemeContext     - 	  Global theme state (light/dark), persists preference, and provides useTheme hook.
UserDirectory    - 	  Main logic hub: fetches users, manages state (loading/search/sort), and passes props to children.
ThemeToggle      - 	  Toggle between dark/light mode using context.
SearchBar        - 	  User input handler. Captures and communicates search queries to parent.
SortControls     -    Allows sorting users by name or country in ascending/descending order.
UserGrid	     -    Displays loading/error states and a responsive grid of user cards.
UserCard	     -    Renders individual user data: name, email, country, and profile image.

# Data Flow Overview
🔹 App Initialization

- App.jsx → ThemeProvider → UserDirectory.jsx


Sets up theme and loads main layout.

🔹 User Data Fetching

UserDirectory → userService.js → RandomUser API
Fetches data asynchronously on mount.

Sets users, loading, and error states.

🔹 Search & Sort Flow

User Input → Update state → useMemo → Filter & Sort → UserGrid render
Live filtering by name or country.

Sorting based on user selection (name/country, asc/desc).

🔹 Theme Switching

ThemeToggle → ThemeContext → Update global state → Re-render with new theme



