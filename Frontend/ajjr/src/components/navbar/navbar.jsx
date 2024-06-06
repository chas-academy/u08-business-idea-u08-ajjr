import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../navbar/navbar.css";
import { useEffect, useState } from "react";
import logoImg from "../../images/ajjrlogo.png";
import { Link } from "react-router-dom";

function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isNavDropdownOpenProduct, setIsNavDropdownOpenProduct] =
    useState(false);
  const [isNavDropdownOpenAbout, setIsNavDropdownOpenAbout] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  function closeNav() {
    setIsExpanded(false);
  }

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", false);
    setIsLoggedIn(false);
    // Redirect to home page
    window.location.href = "/";
  };

  return (
    <Navbar
      expand="lg"
      expanded={isExpanded}
      className="navbar-custom px-5"
      sticky="top"
    >
      <Navbar.Brand as={Link} to="/">
        <img src={logoImg} alt="Logotyp" className="logoimg " />{" "}
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setIsExpanded(isExpanded ? false : true)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto fs-3">
          <Nav.Link
            as={Link}
            onClick={closeNav}
            to="/"
            className="nav-link-custom"
          >
            Hem
          </Nav.Link>
          <NavDropdown
            title="Produkter"
            show={isNavDropdownOpenProduct}
            onMouseEnter={() => setIsNavDropdownOpenProduct(true)}
            onMouseLeave={() => setIsNavDropdownOpenProduct(false)}
          >
            <NavDropdown.Item as={Link} to="produkter">
              Produkter
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              as={Link}
              onClick={closeNav}
              to="produkter?category=herr"
            >
              Herr
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              onClick={closeNav}
              to="produkter?category=dam"
            >
              Dam
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              onClick={closeNav}
              to="produkter?category=unisex"
            >
              Unisex
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              onClick={closeNav}
              to="produkter?category=musk"
            >
              Musk
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              onClick={closeNav}
              to="produkter?category=oud"
            >
              Oud
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              as={Link}
              onClick={closeNav}
              to="produkter?category=testers"
            >
              Testers
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            title="Om oss"
            show={isNavDropdownOpenAbout}
            onMouseEnter={() => setIsNavDropdownOpenAbout(true)}
            onMouseLeave={() => setIsNavDropdownOpenAbout(false)}
          >
            <NavDropdown.Item
              as={Link}
              to="aboutus#omajjr"
              spy={true}
              smooth={true}
              offset={-420}
              duration={500}
            >
              Om Ajjr
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              spy={true}
              smooth={true}
              offset={-420}
              duration={500}
              to="aboutus#vision"
            >
              Vår Vision
            </NavDropdown.Item>

            <NavDropdown.Divider />

            <NavDropdown.Item
              as={Link}
              spy={true}
              smooth={true}
              offset={-220}
              duration={500}
              to="aboutus#valgorenhet"
            >
              Välgörenhet
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              spy={true}
              smooth={true}
              offset={-220}
              duration={500}
              to="aboutus#sammarbeten"
            >
              Sammarbeten
            </NavDropdown.Item>

            <NavDropdown.Item
              as={Link}
              spy={true}
              smooth={true}
              offset={-220}
              duration={500}
              to="aboutus#kontakt"
            >
              Kontakta oss
            </NavDropdown.Item>
          </NavDropdown>

          {/* 
          <Nav.Link
            as={Link}
            onClick={closeNav}
            to="loggain"
            a
            className="nav-link-custom"
          >
            Logga in
          </Nav.Link>
          <Nav.Link
            as={Link}
            onClick={closeNav}
            to="RegisterPage"
            className="nav-link-custom"
          >
            Registrera dig
          </Nav.Link>
 */}

          {isLoggedIn ? (
            <>
              <Nav.Link as={Link} to="/myaccount">
                Mitt konto
              </Nav.Link>
              <Nav.Link as={Link} to="/" onClick={handleLogout}>
                Logga ut
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/loggain">
                Logga in
              </Nav.Link>
              <Nav.Link as={Link} to="/registerpage">
                Registrera dig
              </Nav.Link>
            </>
          )}

          <Nav.Link as={Link} onClick={closeNav} to="kassa">
            Cart
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
