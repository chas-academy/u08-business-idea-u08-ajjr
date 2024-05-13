import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../navbar/navbar.css"; // Importerar CSS från samma mapp

function BasicExample() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className="">
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Använder ms-auto på Nav-komponenten för att skjuta allt till höger */}
          <Nav className="ms-auto">
            <Nav.Link className="navlink" href="#home">
              Hem
            </Nav.Link>
            <NavDropdown
              className="navlink"
              title="Produkter"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item className="navlink" href="#action/3.1">
                Musk
              </NavDropdown.Item>
              <NavDropdown.Item className="navlink" href="#action/3.1">
                Oud
              </NavDropdown.Item>
              <NavDropdown.Item className="navlink" href="#action/3.2">
                Parfym
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navlink" href="#link">
              Om oss
            </Nav.Link>
            <Nav.Link className="navlink" href="#link">
              Kontakta oss
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
