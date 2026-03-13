import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ role, children }) {
  const currentRole = localStorage.getItem("role"); 

  // 1. If not logged in at all, go to Login
  if (!currentRole) {
    return <Navigate to="/" replace />;
  }

  // 2. If the user has the WRONG role
  if (currentRole !== role) {
    // Redirect them to their respective "Home" or "Dashboard"
    // This prevents them from being kicked out to Login unnecessarily
    return currentRole === "admin" 
      ? <Navigate to="/admin/home" replace /> 
      : <Navigate to="/user/dashboard" replace />; // Updated to dashboard
  }

  // 3. ✅ Everything is correct, show the page
  return children;
}