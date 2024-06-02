import React, { useEffect } from "react";
import "./aboutus.css";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Element } from "react-scroll";

const AboutUs = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }, 0);
    }
  }, [location]);

  return (
    <>
   
      <Element>
        <Container className="vision my-4" id="omajjr">
          <Row className="row-aboutus ">
            <Col md={4}>
              <img
                src="src/images/descriptionimg.png"
                alt="AboutUs-vision"
                className="aboutusimg"
              />
            </Col>
            <Col md={8}>
             
              <h1>Om Ajjr</h1>
              <p className="visiontext">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius
                similique ea harum. Porro harum cum nam expedita culpa, ipsum at
                impedit blanditiis illum iste nostrum quia vel nisi. Laborum at
                accusantium nostrum cupiditate praesentium tempore qui vitae
                neque? Fugiat aspernatur deleniti assumenda, at voluptates
                eligendi adipisci et cum aut accusantium.
              </p>
            </Col>
          </Row>
        </Container>
      </Element>

      <Element>
        <Container className="vårvision my-4" id="vision">
          <Row className="row-aboutus ">
            <Col md={4} className="order-md-2">
              <img
                src="src/images/purseimg.JPG"
                alt="AboutUs-history"
                className="aboutusimg"
              />
            </Col>
            <Col md={8} className="order-md-1">
              <h3>Vår vision</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem quasi ad explicabo laboriosam, harum consequuntur
                ipsam itaque? Quaerat ut rerum itaque voluptate explicabo.
                Reiciendis officia ducimus, hic itaque voluptate repudiandae
                harum fugiat iste eaque at! Debitis aliquid provident corporis
                nisi magni similique esse, atque sapiente consectetur ullam
                repellat vero deserunt.
              </p>
            </Col>
          </Row>
        </Container>
      </Element>

      <Element>
        <Container className="välgörenhet my-4" id="valgorenhet">
          <Row className="row-aboutus ">
            <Col md={4}>
              <img
                src="src/images/produktpageimg.JPG"
                alt="AboutUs-charity"
                className="aboutusimg"
              />
            </Col>
            <Col md={8}>
              <h3>Välgörenhet</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, dicta, ducimus totam nemo ad est voluptatum doloribus
                blanditiis voluptates nihil amet ipsum obcaecati neque natus
                iste quibusdam. Earum rem hic, molestiae inventore molestias
                eveniet, eos quasi repellat ullam itaque nulla explicabo harum!
                Provident temporibus fuga minus cumque esse eius maxime.
              </p>
            </Col>
          </Row>
        </Container>
      </Element>

      <Element>
        {/* <Container className="sammarbeten my-4" id="sammarbeten">
          <Row className="row-aboutus ">
            <Col md={8}>
              <h3>Sammarbeten</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, dicta, ducimus totam nemo ad est voluptatum doloribus
                blanditiis voluptates nihil amet ipsum obcaecati neque natus
                iste quibusdam. Earum rem hic, molestiae inventore molestias
                eveniet, eos quasi repellat ullam itaque nulla explicabo harum!
                Provident temporibus fuga minus cumque esse eius maxime.
              </p>
            </Col>
            <Col md={4}>
              <img
                src="src/images/holdingperfume.jpg"
                alt="AboutUs-collaborations"
                className="aboutusimg"
              />
            </Col>
          </Row>
        </Container> */}
        <Container className="sammarbeten my-4" id="sammarbeten">
    <Row className="row-aboutus">
        <Col md={4} className="order-md-2 order-1">
            <img
                src="src/images/holdingperfume.jpg"
                alt="AboutUs-collaborations"
                className="aboutusimg"
            />
        </Col>
        <Col md={8} className="order-md-1 order-2">
            <h3>Sammarbeten</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aliquam, dicta, ducimus totam nemo ad est voluptatum doloribus
                blanditiis voluptates nihil amet ipsum obcaecati neque natus
                iste quibusdam. Earum rem hic, molestiae inventore molestias
                eveniet, eos quasi repellat ullam itaque nulla explicabo harum!
                Provident temporibus fuga minus cumque esse eius maxime.
            </p>
        </Col>
    </Row>
</Container>
      </Element>

      <Element>
        <Container className="contact my-4" id="kontakt">
          <Row className="row-aboutus">
            <Col md={12}>
              <h3>Kontakta oss:</h3>
              <p>
                Har du frågor? Ställ din fråga genom att kontakta oss på
                följande eller via sociala medier:
              </p>
              <ul>
                <li>Telefon: 07005566448</li>
                <li>E-post: info@ajjr.se</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Element>
    </>
  );
};

export default AboutUs;
