// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "../navbar/navbar.css"; // Importerar CSS från samma mapp
// import { useState } from "react";
// import logoImg from "../../images/ajjrlogo.png"; // Gå upp två nivåer, sedan in i images-mappen
// import {
//   Link,
//   NavLink,
//   Route,
//   Routes,
//   Outlet,
//   BrowserRouter,
// } from "react-router-dom";

// import { Link as ScrollLink } from "react-scroll";

// function Navigation() {
//   const [isNavDropdownOpenProduct, setIsNavDropdownOpenProduct] =
//     useState(false);
//   const [isNavDropdownOpenAbout, setIsNavDropdownOpenAbout] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);

//   function closeNav() {
//     setIsExpanded(false);
//   }

//   return (
//     <Navbar
//       expand="lg"
//       expanded={isExpanded}
//       className="navbar-custom px-5"
//       sticky="top"
//     >
//       <Navbar.Brand as={Link} to="/">
//         <img src={logoImg} alt="Logotyp" className="logoimg " />{" "}
//         {/* Använd den importerade bilden här */}
//       </Navbar.Brand>
//       <Navbar.Toggle
//         aria-controls="basic-navbar-nav"
//         onClick={() => setIsExpanded(isExpanded ? false : true)}
//       />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ms-auto fs-3">
//           <Nav.Link
//             as={Link}
//             onClick={closeNav}
//             to="/"
//             className="nav-link-custom"
//           >
//             Hem
//           </Nav.Link>
//           <NavDropdown
//             title="Produkter"
//             /* id="basic-nav-dropdown" */
//             show={isNavDropdownOpenProduct}
//             onMouseEnter={() => setIsNavDropdownOpenProduct(true)}
//             onMouseLeave={() => setIsNavDropdownOpenProduct(false)}
//           >
//             <NavDropdown.Item as={Link} onClick={closeNav} to="produkter">
//               Produkter
//             </NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item as={Link} onClick={closeNav} to="produkter/herr">
//               Herr
//             </NavDropdown.Item>
//             <NavDropdown.Item as={Link} onClick={closeNav} to="produkter/dam">
//               Dam
//             </NavDropdown.Item>
//             <NavDropdown.Item
//               as={Link}
//               onClick={closeNav}
//               to="produkter/unisex"
//             >
//               Unisex
//             </NavDropdown.Item>
//             <NavDropdown.Item as={Link} onClick={closeNav} to="produkter/musk">
//               Musk
//             </NavDropdown.Item>
//             <NavDropdown.Item as={Link} onClick={closeNav} to="produkter/oud">
//               Oud
//             </NavDropdown.Item>
//             <NavDropdown.Divider />
//             <NavDropdown.Item as={Link} onClick={closeNav} to="testers">
//               Testers
//             </NavDropdown.Item>
//           </NavDropdown>

//           <NavDropdown
//             title="Om oss"
//             /* id="basic-nav-dropdown" */
//             show={isNavDropdownOpenAbout}
//             onMouseEnter={() => setIsNavDropdownOpenAbout(true)}
//             onMouseLeave={() => setIsNavDropdownOpenAbout(false)}
//           >
//             <NavDropdown.Item
//         as={ScrollLink}
//               to="omajjr"
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//             >
//               Om Ajjr
//             </NavDropdown.Item>
//             <NavDropdown.Item
//            as={ScrollLink}
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="vårvision"
//             >
//               Vår Vision
//             </NavDropdown.Item>

//             <NavDropdown.Divider />

//             <NavDropdown.Item
//          as={ScrollLink}
//               spy={true}
//               smooth={true}
//               offset={-70}
//               duration={500}
//               to="välgörenhet"
//             >
//               Välgörenhet
//             </NavDropdown.Item>

//             <NavDropdown.Item
//         as={ScrollLink}
//               spy={true}
//               smooth={true}
//               offset={-220}
//               duration={500}
//               to="sammarbeten"
//             >
//               Sammarbeten
//             </NavDropdown.Item>

//             <NavDropdown.Item
//      as={ScrollLink}
//               spy={true}
//               smooth={true}
//               offset={-220}
//               duration={500}
//               to="kontakt"
//             >
//               Kontakta oss
//             </NavDropdown.Item>
//           </NavDropdown>
//           <Nav.Link
//             as={Link}
//             onClick={closeNav}
//             to="loggain"
//             a
//             className="nav-link-custom"
//           >
//             Logga in
//           </Nav.Link>
//           <Nav.Link
//             as={Link}
//             onClick={closeNav}
//             to="RegisterPage"
//             className="nav-link-custom"
//           >
//             Registrera dig
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Navigation;


// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import "../navbar/navbar.css";
// import { useState } from "react";
// import logoImg from "../../images/ajjrlogo.png";
// import { Link } from "react-router-dom";
// import { Link as ScrollLink } from "react-scroll";

// function Navigation() {
//   const [isNavDropdownOpenProduct, setIsNavDropdownOpenProduct] = useState(false);
//   const [isNavDropdownOpenAbout, setIsNavDropdownOpenAbout] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);

//   function closeNav() {
//     setIsExpanded(false);
//   }

//   return (
//     <Navbar expand="lg" expanded={isExpanded} className="navbar-custom px-5" sticky="top">
//       <Navbar.Brand as={Link} to="/">
//         <img src={logoImg} alt="Logotyp" className="logoimg" />
//       </Navbar.Brand>
//       <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsExpanded(!isExpanded)} />
//       <Navbar.Collapse id="basic-navbar-nav">
//         <Nav className="ms-auto fs-3">
//           <Nav.Link as={Link} onClick={closeNav} to="/" className="nav-link-custom">
//             Hem
//           </Nav.Link>
//           <NavDropdown title="Produkter" show={isNavDropdownOpenProduct} onMouseEnter={() => setIsNavDropdownOpenProduct(true)} onMouseLeave={() => setIsNavDropdownOpenProduct(false)}>
//             <NavDropdown.Item as={Link} onClick={closeNav} to="/produkter">
//               Alla Produkter
//             </NavDropdown.Item>
//             <NavDropdown.Item as={Link} onClick={closeNav} to="/produkter/herr">
//               Herr
//             </NavDropdown.Item>
//             <NavDropdown.Item as={Link} onClick={closeNav} to="/produkter/dam">
//               Dam
//             </NavDropdown.Item>
//             <NavDropdown.Item as={Link} onClick={closeNav} to="/produkter/unisex">
//               Unisex
//             </NavDropdown.Item>
//             <NavDropdown.Item as={Link} onClick={closeNav} to="/produkter/musk">
//               Musk
//             </NavDropdown.Item>
//             <NavDropdown.Item as={Link} onClick={closeNav} to="/produkter/oud">
//               Oud
//             </NavDropdown.Item>
//             <NavDropdown.Item as={Link} onClick={closeNav} to="/testers">
//               Testers
//             </NavDropdown.Item>
//           </NavDropdown>
//           <NavDropdown title="Om oss" show={isNavDropdownOpenAbout} onMouseEnter={() => setIsNavDropdownOpenAbout(true)} onMouseLeave={() => setIsNavDropdownOpenAbout(false)}>
//             <NavDropdown.Item as={Link} to="aboutus#omajjr" spy={true} smooth={true} offset={-70} duration={500}>
//               Om Ajjr
//             </NavDropdown.Item>

//             <NavDropdown.Item as={Link} to="aboutus#vision" spy={true} smooth={true} offset={-70} duration={500}>
//               Vår Vision
//             </NavDropdown.Item>

//             <NavDropdown.Item as={Link} to="aboutus#valgorenhet" spy={true} smooth={true} offset={-70} duration={500}>
//               Välgörenhet
//             </NavDropdown.Item>

//             <NavDropdown.Item as={Link} to="aboutus#sammarbeten" spy={true} smooth={true} offset={-220} duration={500}>
//               Sammarbeten
//             </NavDropdown.Item>

//             <NavDropdown.Item as={Link} to="aboutus#kontakt" spy={true} smooth={true} offset={-220} duration={500}>
//               Kontakta oss
//             </NavDropdown.Item>

//           </NavDropdown>
//           <Nav.Link as={Link} onClick={closeNav} to="/loggain" className="nav-link-custom">
//             Logga in
//           </Nav.Link>
//           <Nav.Link as={Link} onClick={closeNav}  to="RegisterPage" className="nav-link-custom">
//             Registrera dig
//           </Nav.Link>
//         </Nav>
//       </Navbar.Collapse>
//     </Navbar>
//   );
// }

// export default Navigation;



import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../navbar/navbar.css";
import { useState } from "react";
import logoImg from "../../images/ajjrlogo.png";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function Navigation() {
  const [isNavDropdownOpenProduct, setIsNavDropdownOpenProduct] = useState(false);
  const [isNavDropdownOpenAbout, setIsNavDropdownOpenAbout] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  function closeNav() {
    setIsExpanded(false);
  }

  // Antag att navbar höjd är ca 70px, justera därefter
  const navbarOffset = -70;

  return (
    <Navbar expand="lg" expanded={isExpanded} className="navbar-custom px-5" sticky="top">
      <Navbar.Brand as={Link} to="/">
        <img src={logoImg} alt="Logotyp" className="logoimg" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setIsExpanded(!isExpanded)} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto fs-3">
          <Nav.Link as={Link} onClick={closeNav} to="/" className="nav-link-custom">
            Hem
          </Nav.Link>
          <NavDropdown title="Produkter" show={isNavDropdownOpenProduct} onMouseEnter={() => setIsNavDropdownOpenProduct(true)} onMouseLeave={() => setIsNavDropdownOpenProduct(false)}>
            {/* Lägg till produktlänkar här */}
          </NavDropdown>
          <NavDropdown title="Om oss" show={isNavDropdownOpenAbout} onMouseEnter={() => setIsNavDropdownOpenAbout(true)} onMouseLeave={() => setIsNavDropdownOpenAbout(false)}>
            <NavDropdown.Item as={ScrollLink} to="omajjr" spy={true} smooth={true} offset={navbarOffset} duration={500}>
              Om Ajjr
            </NavDropdown.Item>
            <NavDropdown.Item as={ScrollLink} to="vision" spy={true} smooth={true} offset={navbarOffset} duration={500}>
              Vår Vision
            </NavDropdown.Item>
            <NavDropdown.Item as={ScrollLink} to="valgorenhet" spy={true} smooth={true} offset={navbarOffset} duration={500}>
              Välgörenhet
            </NavDropdown.Item>
            <NavDropdown.Item as={ScrollLink} to="sammarbeten" spy={true} smooth={true} offset={navbarOffset} duration={500}>
              Sammarbeten
            </NavDropdown.Item>
            <NavDropdown.Item as={ScrollLink} to="kontakt" spy={true} smooth={true} offset={navbarOffset} duration={500}>
              Kontakta oss
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} onClick={closeNav} to="/loggain" className="nav-link-custom">
            Logga in
          </Nav.Link>
          <Nav.Link as={Link} onClick={closeNav} to="/registrera" className="nav-link-custom">
            Registrera dig
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
