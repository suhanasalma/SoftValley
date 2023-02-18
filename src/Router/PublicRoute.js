import { Navigate } from "react-router-dom";
import { useAuthState } from "../Hooks/useAuthState";

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useAuthState();

  return !isLoggedIn ? children : <Navigate to="/dashboard" />;
};
