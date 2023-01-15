import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container } from "./Container";

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <nav className="navbar">
          <Link className="logo-link" to="/">
            conduit
          </Link>
          <div className="link-menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/signIn">Sign In</NavLink>
            <NavLink to="/signUp">Sign Up</NavLink>
          </div>
        </nav>
      </Container>
    </header>
  );
};
