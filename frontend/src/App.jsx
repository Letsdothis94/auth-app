import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Routes>
        <Route path="/" element={"Home Auth Page React + Vite"} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App
