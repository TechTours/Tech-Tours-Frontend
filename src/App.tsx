import { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate , Outlet } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import ForgotPage from './pages/ForgotPassword';
import HomePage from './pages/HomePage';
import Report from './pages/Report';
import SignupPage from './pages/Signup';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/response/NotFound';
import UnAuthorized from './pages/response/UnAuthorized';

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    // Implement your authentication logic here
    // For example, you could check if the user is logged in using a token
    const token = localStorage.getItem("token");
    let isLoggedIn : boolean = false;
    if( token !== null){
       isLoggedIn = jwtDecode(token);
    }else{
      setAuthenticated(false);
    }
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin") || '{}');
    
    setAuthenticated(isLoggedIn);
    setIsAdmin(isAdmin);

  }, []);

  return (
    <div>
 <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPage />} />

        {/* The Admin Routes */}
        {isAdmin && authenticated ? (
          <>
            <Route path="/admin/register" element={<SignupPage />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/*" element={<Navigate to="/unauthorized" />} />
          </>
        ) : (
          <Navigate to="/unauthorized" replace={true} />
        )}

        {/* The User Routes */}
        {authenticated ? (
          <>
            <Route path="/" element={<HomePage />} />
            <Route path="/report" element={<Report />} />
          </>
        ) : (
          <Navigate to="/login" replace={true} />
        )}

        {/* The 404 Route */}
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/unauthorized" element={<UnAuthorized />} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
