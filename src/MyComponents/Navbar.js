import React from "react";

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a href = "#" className="navbar-brand">
          {props.title}
        </a>
      </div>
    </nav>
  );
}
