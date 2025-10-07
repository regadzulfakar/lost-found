
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DetailPage from './pages/DetailPage';
import FormPage from './pages/FormPage';
import Navbar from './components/Navbar';
import ToastContainer from './components/ToastContainer';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-brand-background">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-unsri-blue"></div>
      </div>
    );
  }
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const AppContent: React.FC = () => {
    const { user } = useAuth();

    return (
      <div className="min-h-screen bg-brand-background text-gray-800">
        <ToastContainer />
        {user && <Navbar />}
        <main>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } />
            <Route path="/post/:id" element={
              <ProtectedRoute>
                <DetailPage />
              </ProtectedRoute>
            } />
            <Route path="/new" element={
              <ProtectedRoute>
                <FormPage />
              </ProtectedRoute>
            } />
            <Route path="/edit/:id" element={
              <ProtectedRoute>
                <FormPage />
              </ProtectedRoute>
            } />
             <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </div>
    );
}

const App: React.FC = () => {
  return (
    <HashRouter>
      <ToastProvider>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </ToastProvider>
    </HashRouter>
  );
};

export default App;
