//portects routes that require authentication from being accessed by unauthenticated users

import { Navigate } from "react-router-dom";
import { auth } from "../../pages/firebaseConfig";

const ProtectedRoute = ({ children }) => {
  const authed = auth.currentUser;

  return authed ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
