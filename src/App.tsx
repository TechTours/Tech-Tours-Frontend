import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
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
import { PrivateRoutes, ProtectAdminRoutes } from './components/Routes/protections';
import UserDashboard from './pages/UserDashboard';
import UserSightings from './pages/UserSightings';
import UserProfile from './pages/UserProfile';

const App = () => {
  function AuthenticatedRoutes() {
    const token = localStorage.getItem("token");
    if (token !== null) {
      if (jwtDecode(token)) {
        return <PrivateRoutes />;
      } else {
        return <Navigate to={'/login'} />;
      }
    } else {
      return <Navigate to={'/login'} />;
    }
  }

  return (
    <div>
      <Router>
        <Routes>
          {/* The improved routing */}
          <Route element={<AuthenticatedRoutes />}>

            {/* the authenticated user routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/report" element={<Report />} />
            <Route path='/user/dashboard' element={<UserDashboard />} />
            <Route path='/user/sightings' element={<UserSightings />} />
            <Route path='/user/profile' element={<UserProfile />} />

            {/* // the authenticated admin routes */}
            <Route element={<ProtectAdminRoutes />}>
              <Route path="/admin/register" element={<SignupPage />} />
              <Route path="/admin/dashboard" element={<Dashboard />} />
            </Route>

          </Route>

          {/* The public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/unauthorized" element={<UnAuthorized />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
