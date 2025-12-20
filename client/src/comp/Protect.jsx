import { Navigate } from "react-router-dom";
import { useAuth } from "../context/Auth";

const Protect = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <p className="text-center mt-20">Loading...</p>;
  return user ? children : <Navigate to="/login" />;
};

export default Protect;
