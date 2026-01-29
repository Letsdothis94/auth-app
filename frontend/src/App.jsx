import './App.css'
import { Routes, Route, Navigate } from 'react-router'
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import EmailVerificationPage from './pages/EmailVerificationPage';
import HomePage from './pages/HomePage';
import { Toaster } from 'react-hot-toast';
import { useAuthStore } from './store/authStore';
import { useEffect } from 'react';
import ProtectedRoute from './components/ProtectedRoute';
import RedirectAuthUser from './components/RedirectAuthUser';
import ForgotPassword from './pages/ForgotPassword';

function App() {
  const { isCheckingAuth, isAuthenticated, user, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log("isAuthenticated: ", isAuthenticated);
  console.log("user: ", user);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectAuthUser>
              <SignupPage />
            </RedirectAuthUser>
          }
        />
        <Route
          path="/login"
          element={
            <RedirectAuthUser>
              <LoginPage />
            </RedirectAuthUser>
          }
        />
        <Route path="/forgot-password" element={
          <RedirectAuthUser>
            <ForgotPassword />
          </RedirectAuthUser>
        } />
        <Route
          path="/verify-email"
          element={
            <RedirectAuthUser>
              <EmailVerificationPage />
            </RedirectAuthUser>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Toaster />
    </div>
  );
}

export default App
