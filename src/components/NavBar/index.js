import React from "react";

import { Navbar, Nav } from "react-bootstrap";

const NavBar = () => {
  return (
    <>
      <Navbar bg="light">
        <Navbar.Brand href="#">DePo</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Forecaster</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
