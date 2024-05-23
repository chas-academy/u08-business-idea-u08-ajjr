import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import "./footer.css";

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
      link: "https://instagram.com",
    },
    {
      icon: AiFillTikTok,
      color: "black",
      size: 40,
      link: "https://tiktok.com",
    },
    {
      icon: FaFacebookSquare,
      color: "blue",
      size: 40,
      link: "https://facebook.com",
    },
  ];

  return (
    <div className="footer container-fluid wow fadeIn" data-wow-delay="0.1s">
      <div className="container">
        <div className="footer-content">
          {Object.entries(linksData).map(([title, links], index) => (
            <div className="footer-section" key={index}>
              <h5 className="section-title">{title}</h5>
              <ul>
                {links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.link}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="footer-section social-media">
            <h6 className="social-media-title">Följ våra sociala medier</h6>
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <a key={index} href={link.link} className="btn btn-link">
                  {React.createElement(link.icon, {
                    style: { fontSize: link.size, color: link.color },
                    className: "icon",
                  })}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
