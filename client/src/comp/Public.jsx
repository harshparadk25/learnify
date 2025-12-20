import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

const PublicRoute = ({ children }) => {
  const { token } = useAuth();
  return token ? <Navigate to="/" /> : children;
};

export default PublicRoute;
