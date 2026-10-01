import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedAuth() {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");

  if (token) {
    if (role.toLowerCase() == "organizer") {
      return <Navigate to="/OrganizerDashboard" replace />;
    }
    return <Navigate to="/AttendeeDashboard" replace />;
  }
  return <Outlet />;
}
