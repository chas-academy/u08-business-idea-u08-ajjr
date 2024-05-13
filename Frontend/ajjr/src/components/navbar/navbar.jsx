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
    <Navbar expand="lg" className="navbar-custom">
      <Container className="">
        <Navbar.Brand href="#home">
          <img src={logoImg} alt="Logotyp" className="logoimg " />{" "}
          {/* Använd den importerade bilden här */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link-custom">
              Hem
            </Nav.Link>
            <NavDropdown
              title="Produkter"
              id="basic-nav-dropdown"
              show={isNavDropdownOpen}
              onMouseEnter={() => setIsNavDropdownOpen(true)}
              onMouseLeave={() => setIsNavDropdownOpen(false)}
            >
              <NavDropdown.Item href="#action/3.1">Musk</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Oud</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Parfym</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link" className="nav-link-custom">
              Om oss
            </Nav.Link>
            <Nav.Link href="#link" className="nav-link-custom">
              Kontakta oss
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
