import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap/";



function NavBar({ user }) {
  return (



    <Navbar className="navbar navbar-expand-lg navbar-dark bg-danger  mb-5">
      <Link
        className="navbar-brand text-light my-2 collapse navbar-collapse"
        to="/"
      >
        Scent
      </Link>
      {!user && (
        <React.Fragment>
          <NavLink className="nav-item nav-link text-light " to="/login">
            Login
          </NavLink>
          <NavLink className="nav-item nav-link text-light" to="/cart">
            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
            </svg>
          </NavLink>
        </React.Fragment>
      )}

      {user && (
        <React.Fragment>
          <NavLink className="nav-item nav-link text-light " to="/cart">
            Cart
          </NavLink>
          <NavLink className="nav-item nav-link text-light" to="/logout">
            Logout
          </NavLink>
        </React.Fragment>
      )}

    </Navbar>
  );
}

export default NavBar;
