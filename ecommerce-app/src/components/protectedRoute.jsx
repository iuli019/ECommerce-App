import React from "react";
import { Route, Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import JwtDecode from "jwt-decode";

function ProtectedRoute({ path, component: Component, render, ...rest }) {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {

        const user = JwtDecode(localStorage.getItem("token"));

        if (user.isAdmin === false) {
          toast("No token!");
          return <Redirect to="/products" />;
        }

        return Component ? <Component {...rest} /> : render(rest);
      }}
    />
  );
}

export default ProtectedRoute;
