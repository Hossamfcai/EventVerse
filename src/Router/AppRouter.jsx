import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../Pages/Landing/LandingPage";

// import NotFoundPage from "../Pages/NotFoundPage";

import AuthenticationLayout from "../Components/Layout/AuthenticationLayout";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";

import OrganizerDashboardLayout from "../Components/Layout/OrganizerDashboardLayout";
import OverView from "../pages/Organizer/OverView";
import Events from "../pages/Organizer/Events";
import AddEvent from "../pages/Organizer/AddEvent";
import AttendeeDashboardLayout from "../Components/Layout/AttendeeDashboardLayout";
import Home from "../pages/Attendees/Home";
import Tickets from "../pages/Attendees/Tickets";
import FavouritesEvents from "../pages/Attendees/FavouritesEvents";
import BookingHistory from "../pages/Attendees/BookingHistory";
import AttendeeProfile from "../pages/Attendees/AttendeeProfile";
import NotFoundPage from "../Guard/NotFoundPage";
import ProtectedRoute from "../Guard/ProtectedRoute";
import ProtectedAuth from "../Guard/ProtectedAuth";
// import ProtectedAuth from "./ProtectedAuth";
export default function AppRouter() {
  return (
    <Routes>
      {/*if there are authenticated user or admin can not return to landing page without logout first so empty */}
      <Route element={<ProtectedAuth />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landingPage" element={<LandingPage />} />
      </Route>
      {/*if there are authenticated user or admin can not return to Authentication pages without logout first so empty */}
      <Route element={<ProtectedAuth />}>
        <Route path="/Authentication" element={<AuthenticationLayout />}>
          <Route index element={<Navigate to="Login" replace />} />
          <Route path="Login" element={<Login />} />
          <Route path="Resgistration" element={<SignUp />} />
        </Route>
      </Route>
      {/*only admin has access to this route */}
      <Route element={<ProtectedRoute allowedRoles={["organizer"]} />}>
        <Route
          path="/OrganizerDashboard"
          element={<OrganizerDashboardLayout />}
        >
          <Route index element={<Navigate to="OverView" replace />} />
          <Route path="OverView" element={<OverView />} />
          <Route path="Events" element={<Events />} />
          <Route path="AddEvent" element={<AddEvent />} />
        </Route>
      </Route>
      {/* admin and user have access to this route */}
      <Route element={<ProtectedRoute allowedRoles={["user"]} />}>
        <Route path="/AttendeeDashboard" element={<AttendeeDashboardLayout />}>
          <Route index element={<Navigate to="Home" replace />} />
          <Route path="Home" element={<Home />} />
          <Route path="Tickets" element={<Tickets />} />
          <Route path="FavouritesEvents" element={<FavouritesEvents />} />
          <Route path="BookingHistory" element={<BookingHistory />} />
          <Route path="AttendeeProfile" element={<AttendeeProfile />} />
        </Route>
      </Route>
      {/* Unkown Path */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
