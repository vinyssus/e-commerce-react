import React from "react";
import "./Navbar.css";

import { Form, FormControl, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-dark bg-success navbar-expand-md">
        <button type="button" className="navbar-toggler bg-light" data-toggle="collapse" data-target="#nav"></button>
        <div className="container">
          <div className="navbar-brand">MarcyBT</div>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active">Accueil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">A propos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Contact</a>
              </li>
            </ul>
          </div>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />

          </Form>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active">Panier</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
