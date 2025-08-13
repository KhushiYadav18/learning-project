import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const accessToken = localStorage.getItem("access");
  const refreshToken = localStorage.getItem("refresh");
  
  // Check if user has valid tokens
  if (!accessToken || !refreshToken) {
    return <Navigate to="/login" replace />;
  }
  
  return children;
}
