import { Navigate, useLocation } from 'react-router-dom';

export default function ProtectedRoute({ children, role, allowedRoles }) {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("accessToken");

//   // If the user is not authenticated, redirect to login page
//   if (!isAuthenticated) {
//     return <Navigate to="/" state={{ from: location }} replace />;
//   }

//   // If there are allowed roles, and the user's role is not included, redirect to unauthorized page
//   if (allowedRoles && !allowedRoles.includes(role)) {
//     return <Navigate to="/unauthorized" replace />;
//   }

  return <>{children}</>;
}
