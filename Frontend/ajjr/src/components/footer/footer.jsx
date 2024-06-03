import React from "react";
import { Col } from "react-bootstrap";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./footer.css";

const linksData = {
  "Om oss": [
    { label: "Om Ajjr", link: "aboutus#omajjr" },
    { label: "Välgörenhet", link: "aboutus#valgorenhet" },
    { label: "Sammarbeten", link: "aboutus#sammarbeten" },
    { label: "Kontakta oss", link: "aboutus#kontakt" },
  ],
  Kundservice: [
    { label: "Leveransinformation", link: "customerservice" },
    { label: "Retur & Byten", link: "customerservice" },
    { label: "FAQ - vanliga frågor och svar", link: "/faq" },
  ],
  Produkter: [
    { label: "Herr", link: "produkter/herr" },
    { label: "Dam", link: "produkter/dam" },
    { label: "Unisex", link: "produkter/unisex" },
    { label: "Musk ", link: "produkter/musk" },
    { label: "Oud", link: "produkter/Oud" },
  ],
};

const socialLinks = [
  {
    icon: GrInstagram,
    color: "brown",
    size: 40,
    link: "https://www.instagram.com/ajjr.official/",
    label: "Instagram",
  },
  {
    icon: AiFillTikTok,
    color: "black",
    size: 40,
    link: "https://www.tiktok.com/@ajjr.official",
    label: "TikTok",
  },
  {
    icon: FaFacebookSquare,
    color: "blue",
    size: 40,
    link: "https://www.facebook.com/Ajjr.official",
    label: "Facebook",
  },
];

const Footer = () => {
  return (
    <div className="container-fluid footer-custom">
      <div className="row">
        {Object.entries(linksData).map(([title, links], index) => (
          <Col xs={12} sm={6} lg={3} key={title} className="footer-col">
            <h5>{title}</h5>
            <ul>
              {links.map(({ label, link }) => (
                <li key={link}>
                  <Link to={link}>{label}</Link>
                </li>
              ))}
            </ul>
          </Col>
        ))}
        <Col xs={12} sm={6} lg={3} className="footer-col social-section">
          <h6>Följ våra sociala medier</h6>
          <div className="social-links">
            {socialLinks.map(({ icon: Icon, color, link, label }) => (
              <a key={link} href={link} style={{ color }} aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Footer;
