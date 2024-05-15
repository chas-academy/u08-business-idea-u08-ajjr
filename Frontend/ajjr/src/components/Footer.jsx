import React from "react";
import { Row, Col } from "react-bootstrap";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  const linksData = {
    Omoss: [
      { label: "Om Ajjr", link: "/om-ajjr" },
      { label: "Välgörenhet", link: "/valgorenhet" },
      { label: "Sammarbeten", link: "/sammarbeten" },
      { label: "Kontakta oss", link: "/kontakta-oss" },
    ],
    Kundservice: [
      { label: "Leveransinformation", link: "/leveransinformation" },
      { label: "Retur & Byten", link: "/retur-byten" },
      { label: "FAQ - vanliga frågor och svar", link: "/faq" },
    ],
    Dofter: [
      { label: "Herr", link: "/herr" },
      { label: "Dam", link: "/dam" },
      { label: "Unisex", link: "/unisex" },
      { label: "Musk & Oud", link: "/musk-oud" },
    ],
  };

  const socialLinks = [
    {
      icon: GrInstagram,
      color: "brown",
      size: 40,
      link: "instagram.com",
    },
    {
      icon: AiFillTikTok,
      color: "black",
      size: 40,
      link: "tiktok.com",
    },
    {
      icon: FaFacebookSquare,
      color: "blue",
      size: 40,
      link: "facebook.com",
    },
  ];

  return (
    <div
      className="container-fluid bg-gainsboro  footer pt-5 mt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div
        className="container py-5"
        style={{ marginLeft: "5rem", marginRight: "15rem" }}
      >
        <Row>
          {/* Links Sections */}
          {Object.entries(linksData).map(([title, links], index) => (
            <Col xs={12} md={6} lg={3} key={index}>
              <h5 className="section-title ff-secondary text-start fw-bold ">
                {title}
              </h5>
              <ul className="list-unstyled">
                {links.map((link, idx) => (
                  <li key={idx} className="m-2">
                    <a
                      href={link.link}
                      className="text-dark text-light fw-normal"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          ))}
          {/* Social Media Section */}
          <Col
            xs={12}
            md={6}
            lg={3}
            className="d-flex flex-column justify-content-lg-end"
          >
            <h6 className="section-title ff-secondary text-start d-flex align-items-center fw-normal  ">
              Följ våra sociala medier
            </h6>
            <div className="d-flex flex-wrap" style={{ marginLeft: "-4rem" }}>
              {/* Wrap links in a flex container */}
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link} // Add href attribute here
                  className="btn btn-link d-flex align-items-center me-3 mb-3"
                >
                  {/* Wrap icon in a flex container */}
                  {link.icon === GrInstagram ||
                  link.icon === AiFillTikTok ||
                  link.icon === FaFacebookSquare ? (
                    <div className="d-flex align-items-center me-2">
                      {React.createElement(link.icon, {
                        style: { fontSize: link.size, color: link.color },
                        className: "m-2",
                      })}
                    </div>
                  ) : (
                    React.createElement(link.icon, {
                      style: { fontSize: link.size, color: link.color },
                      className: "m-2",
                    })
                  )}
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;
