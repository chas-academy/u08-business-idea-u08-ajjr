import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../navbar/navbar.css"; // Importerar CSS från samma mapp
import { useState } from "react";
import logoImg from "../../images/ajjrlogo.png"; // Gå upp två nivåer, sedan in i images-mappen
import { Link, NavLink, Route, Routes, Outlet, BrowserRouter } from "react-router-dom";

function Navigation() {
  const [isNavDropdownOpenProduct, setIsNavDropdownOpenProduct] = useState(false);
  const [isNavDropdownOpenAbout, setIsNavDropdownOpenAbout] = useState(false);

  return (
    <Navbar expand="lg" className="navbar-custom px-5">
      <Navbar.Brand as={Link} to="/">
        <img src={logoImg} alt="Logotyp" className="logoimg " />{" "}
        {/* Använd den importerade bilden här */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto fs-3">
          <Nav.Link as={Link} to="/" className="nav-link-custom">
            Hem
          </Nav.Link>
          <NavDropdown
            title="Produkter"
            /* id="basic-nav-dropdown" */
            show={isNavDropdownOpenProduct}
            onMouseEnter={() => setIsNavDropdownOpenProduct(true)}
            onMouseLeave={() => setIsNavDropdownOpenProduct(false)}
          >
            <NavDropdown.Item as={Link} to="produkter">Produkter</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="herr">Herr</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="dam">Dam</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="unisex">Unisex</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="musk">Musk</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="oud">Oud</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="testers">
              Testers
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title="Om oss"
            /* id="basic-nav-dropdown" */
            show={isNavDropdownOpenAbout}
            onMouseEnter={() => setIsNavDropdownOpenAbout(true)}
            onMouseLeave={() => setIsNavDropdownOpenAbout(false)}
          >
            <NavDropdown.Item as={Link} to="omajjr">Om Ajjr</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="omajjr">Vår vision</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="omajjr">
              Sammarbeten
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="omajjr">
              Kontakta oss
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="loggain" className="nav-link-custom">
            Logga in
          </Nav.Link>
          <Nav.Link as={Link} to="RegisterPage" className="nav-link-custom">
            Registrera dig
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
