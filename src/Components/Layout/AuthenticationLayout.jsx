import { Outlet } from "react-router-dom";

export default function AuthenticationLayout() {
  return (
    <>
      <div>hi from AuthenticationLayout</div>
      <Outlet />
    </>
  );
}
