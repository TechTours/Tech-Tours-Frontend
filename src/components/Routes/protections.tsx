import { Navigate , Outlet } from "react-router-dom";

export function PrivateRoutes() {
    const token = localStorage.getItem("token");
    if (!token) {
      return <Navigate to={'/login'} />;
    }
    return <Outlet />;
  }

  export function PublicRoutes() {
    const token = sessionStorage.getItem('token');
    if (token) {
      return <Navigate to={'/'} />;
    }
    return <Outlet />;
  }

  export function ProtectAdminRoutes() {
    const token = localStorage.getItem("token");
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin") || '{}');
    if (!token || !isAdmin) {
        return <Navigate to={'/unauthorized'} />;
    }
    return <Outlet />;
  }