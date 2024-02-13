import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Navbar, Nav, Button} from 'react-bootstrap'

function BootstrapComponents() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Button variant="primary">Primary Button</Button>
      <Button variant="danger">Primary Button</Button>
    </div>
  )
}

export default BootstrapComponents