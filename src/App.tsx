import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ForgotPage from './pages/ForgotPassword';
import HomePage from './pages/HomePage';
import Report from './pages/Report';
import SignupPage from './pages/Signup';
import Dashboard from './pages/Dashboard';

// Custom HOC for authentication
const PrivateRoute: React.FC<{ element: React.ReactNode, path: string }> = ({ element: Component, path, ...rest }) => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Implement your authentication logic here
    // For example, you could check if the user is logged in using a token
    const isLoggedIn = false;

    setAuthenticated(isLoggedIn);
  }, []);

  return authenticated ? (
    <Route {...rest} path={path} element={Component} />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

// Your App component
const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/report" element={<Report />} />
          <Route path="/admin/dashboard"  element={<Dashboard />} />

          {/* Private Routes */}
          <Route path="/admin/register" element={<PrivateRoute element={<SignupPage />} path="/admin/register" />} />
          <Route path="/admin/dashboard" element={<PrivateRoute element={<Dashboard />} path="/admin/dashboard" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
