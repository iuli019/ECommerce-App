import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap/";

function NavBar({ user }) {
  return (
    <Navbar className="navbar navbar-expand-lg navbar-light bg-dark  mb-5">
      <Link
        className="navbar-brand text-light my-2 collapse navbar-collapse"
        to="/"
      >
        eCommerce App
      </Link>
      {!user && (
        <React.Fragment>
          <NavLink className="nav-item nav-link text-light " to="/login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link text-light" to="/register">
            Register
          </NavLink>
        </React.Fragment>
      )}

      {user && (
        <React.Fragment>
          <NavLink className="nav-item nav-link text-light " to="/admin">
            Admin
          </NavLink>
          <NavLink className="nav-item nav-link text-light" to="/logout">
            Logout
          </NavLink>
        </React.Fragment>
      )}
      <Link className="nav-item nav-link text-light">Cart</Link>
    </Navbar>
  );
}

export default NavBar;
