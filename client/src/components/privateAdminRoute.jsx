import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateAdminRoute = ({ children }) => {
  const { currentUser } = useSelector((state) => state.user);

  if (!currentUser) {
    return <Navigate to="/admin/sign-in" />;
  }

  if (!currentUser.isAdmin) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};

export default PrivateAdminRoute;
