import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const currentRole = localStorage.getItem("role");
  if (currentRole !== role) {
    return <Navigate to="/" replace />;
  }
  return children;
}
