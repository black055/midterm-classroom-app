import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function AuthRoute({ loggedIn }) {
  return loggedIn ? <Navigate to={`/`} /> : <Outlet />;
}

export function PrivateRoute({ loggedIn }) {
  return loggedIn ? <Outlet /> : <Navigate to={`/login`} />;
}
