import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link} from "react-router-dom";

export default class Navbarr extends Component {
  render() {
    return (
      <Navbar className=" bg-dark text-light" expand="lg">
        <Navbar.Brand>
          <Link to="/">Movies-List</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <i className="fab fa-imdb fa-4x" style={{ color: "#f5de50" }}></i>
            <i className="fas fa-tv fa-4x pl-4"></i>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
