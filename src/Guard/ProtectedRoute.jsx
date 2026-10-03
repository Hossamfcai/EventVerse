import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorageItem } from "../utils/localStorage";

export default function ProtectedRoute({ allowedRoles }) {
  const token = getLocalStorageItem("token");
  const role = getLocalStorageItem("role");

  if (!token) {
    return <Navigate to="/Authentication" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return role.toLowerCase() === "organizer" ? (
      <Navigate to="/OrganizerDashboard" replace />
    ) : (
      <Navigate to="/AttendeeDashboard" replace />
    );
  }

  return <Outlet />;
}
