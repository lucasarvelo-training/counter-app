import React, { Component } from "react";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  return (
    <nav class="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navber{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
