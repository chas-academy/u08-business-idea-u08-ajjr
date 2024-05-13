import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../navbar/navbar.css"; // Importerar CSS från samma mapp
import { useState } from "react";
import logoImg from "../../images/ajjrlogo.png"; // Gå upp två nivåer, sedan in i images-mappen

function BasicExample() {
  const [isNavDropdownOpen, setIsNavDropdownOpen] = useState(false);

  return (
    <Navbar expand="lg" className="navbar-custom px-5">
      <Navbar.Brand href="#home">
        <img src={logoImg} alt="Logotyp" className="logoimg " />{" "}
        {/* Använd den importerade bilden här */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto fs-3">
          <Nav.Link href="#home" className="nav-link-custom">
            Hem
          </Nav.Link>
          <NavDropdown
            title="Produkter"
            /* id="basic-nav-dropdown" */
            show={isNavDropdownOpen}
            onMouseEnter={() => setIsNavDropdownOpen(true)}
            onMouseLeave={() => setIsNavDropdownOpen(false)}
          >
            <NavDropdown.Item href="#action/3.1">Herr</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Dam</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Unisex</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.1">Musk</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Oud</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Testers
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link" className="nav-link-custom">
            Om oss
          </Nav.Link>
          <Nav.Link href="#link" className="nav-link-custom">
            Kontakta oss
          </Nav.Link>
          <Nav.Link href="#link" className="nav-link-custom">
            Logga in
          </Nav.Link>
          <Nav.Link href="#link" className="nav-link-custom">
            Registrera dig
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;
