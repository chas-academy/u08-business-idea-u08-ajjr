import React from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  const OmossLinks = [
    { label: "Om Ajjr", icon: FaRegArrowAltCircleRight, Link: "om ajjr" },
    {
      label: "Välgörenhet",
      icon: FaRegArrowAltCircleRight,
      Link: "välgörenhet",
    },
    {
      label: "Sammarbeten",
      icon: FaRegArrowAltCircleRight,
      Link: "sammarbeten",
    },
    {
      label: "Kontakta oss",
      icon: FaRegArrowAltCircleRight,
      Link: "kontakta oss",
    },
  ];

  const kundserviceLinks = [
    {
      label: "Leveransinformation",
      icon: FaRegArrowAltCircleRight,
      Link: "leveransinformation",
    },
    {
      label: "Retur & Byten",
      icon: FaRegArrowAltCircleRight,
      Link: "retur&byten",
    },
    {
      label: "FAQ - vanliga frågor och svar",
      icon: FaRegArrowAltCircleRight,
      Link: "faq",
    },
  ];

  const dofterLinks = [
    {
      label: "Herr",
      icon: FaRegArrowAltCircleRight,
      Link: "herr",
    },

    {
      label: "Dam",
      icon: FaRegArrowAltCircleRight,
      Link: "dam",
    },

    {
      label: "Unisex",
      icon: FaRegArrowAltCircleRight,
      Link: "unisex",
    },

    {
      label: "Musk & Oud",
      icon: FaRegArrowAltCircleRight,
      Link: "musk & oud",
    },
  ];

  const socialLinks = [
    { icon: GrInstagram, size: 40, scale: 1.3 },
    { icon: AiFillTikTok, size: 40, scale: 1.3 },
    { icon: FaFacebookSquare, size: 40, scale: 1.3 },
  ];

  return (
    <>
      <div
        className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary">
                OM OSS
              </h4>
              {OmossLinks.map((link, number) => (
                <a
                  key={number}
                  className="btn btn-link d-flex align-items-center"
                  href={link.Link}
                >
                  {React.createElement(link.icon, { className: "me-2" })}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary">
                Kundservice
              </h4>
              {kundserviceLinks.map((link, number) => (
                <a
                  key={number}
                  className="btn btn-link d-flex align-items-center"
                  href={link.Link}
                >
                  {React.createElement(link.icon, { className: "me-2" })}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary">
                Dofter
              </h4>
              {dofterLinks.map((link, number) => (
                <a
                  key={number}
                  className="btn btn-link d-flex align-items-center"
                  href={link.Link}
                >
                  {React.createElement(link.icon, { className: "me-2" })}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h4 className="section-title ff-secondary text-start text-primary">
                Föjl våra sociala medier
              </h4>
              {socialLinks.map((link, number) => (
                <a
                  key={number}
                  className="btn btn-link d-flex align-items-center"
                  href={link.Link}
                >
                  {React.createElement(link.icon, { className: "me-2" })}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
