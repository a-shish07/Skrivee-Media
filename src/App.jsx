import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import UserDirectory from './pages/UserDirectory';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <UserDirectory />
      </div>
    </ThemeProvider>
  );
}

export default App;
