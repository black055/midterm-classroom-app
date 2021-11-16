import React from "react";
import { Navigate, Route } from "react-router-dom";

export function AuthRoute({ loggedIn, path, component: Component }) {
  return (
    <Route
        path={path}
        render={(props) => {
            return (loggedIn) ? <Navigate to={`/`} /> : <Component {...props} />
        }} 
    />
  );
}