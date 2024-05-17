import React from "react";
import { Row, Col } from "react-bootstrap";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

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
    link: "https://instagram.com",
  },
  { icon: AiFillTikTok, color: "black", size: 40, link: "https://tiktok.com" },
  {
    icon: FaFacebookSquare,
    color: "blue",
    size: 40,
    link: "https://facebook.com",
  },
];

const Footer = () => {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "#f8f9fa", padding: "30px 0" }}
    >
      <Row>
        {Object.entries(linksData).map(([title, links], index) => (
          <Col
            xs={12}
            sm={6}
            lg={3}
            key={index}
            style={{ marginBottom: "20px" }}
          >
            <h5
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                color: "#333",
                marginBottom: "15px",
              }}
            >
              {title}
            </h5>
            <ul style={{ listStyleType: "none", padding: "0" }}>
              {links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.link}
                    style={{
                      color: "#666",
                      textDecoration: "none",
                      fontSize: "14px",
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        ))}
        <Col
          xs={12}
          sm={6}
          lg={3}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <h6
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "15px",
            }}
          >
            Följ våra sociala medier
          </h6>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginRight: "10px",
                  color: link.color,
                  textDecoration: "none",
                  fontSize: `${link.size}px`,
                }}
              >
                {React.createElement(link.icon, {
                  style: { color: link.color, marginRight: "8px" },
                })}
              </a>
            ))}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
