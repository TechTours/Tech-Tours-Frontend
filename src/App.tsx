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
import AdminUsersDash from './pages/AdminUsersDash';
import AdminActivitiesDash from './pages/AdminActivityDash';
import AdminCreateUser from './pages/AdminCreateUser';
import AdminUpdateAndView from './pages/AdminUpdateAndView';
import LoderComponent from './components/Loaders/LoaderComponent';
import EmailVerification from './pages/EmailVerification';
import AdminUsersProfile from './pages/AdminUsersProfile';

const App = () => {
  function AuthenticatedRoutes() {
    const token = localStorage.getItem("token");
    const current = Date.now() / 1000;
    if (token !== null ) {
      if (jwtDecode(token)) {
        const decoded : any = jwtDecode(token!);
        if(decoded?.exp < current) {
          return <Navigate to={'/login'} />;
        }
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
              <Route path="/admin/users" element={<AdminUsersDash />} />
              <Route path="/admin/activities" element={<AdminActivitiesDash />} />
              <Route path="/admin/users/create" element={<AdminCreateUser />} />
              <Route path="/admin/users/update" element={<AdminUpdateAndView />} />
              <Route path="/admin/profile" element={<AdminUsersProfile />} />
            </Route>

          </Route>

          {/* The public routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/forgot" element={<ForgotPage />} />
          <Route path="/unauthorized" element={<UnAuthorized />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path='/verify'  element={<EmailVerification />}/>
          {/* <Route path='/loader' element={<LoderComponent />} />  */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
