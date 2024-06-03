import React, { useEffect } from "react";
import "./aboutus.css";
import { Container, Row, Col } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { Element } from "react-scroll";
import descriptionimg from "../../images/descriptionimg.png"
import purseimg from "../../images/purseimg.png"
import produktpageimg from "../../images/produktpageimg.png"
import holdingperfume from "../../images/holdingperfume.png"

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
                src={descriptionimg}
                alt="AboutUs-vision"
                className="aboutusimg"
              />
            </Col>
            <Col md={8}>

              <h1>Om Ajjr</h1>
              <p className="visiontext">
                Ajjr grundades år 2020 av två bröder som såg en möjlighet att introducera oljeparfym på den svenska marknaden. Deras intresse och den stora efterfrågan de observerade i Sverige ledde till insikten att många vill köpa oljeparfym, men att det inte är lika lättillgängligt här som i arabvärlden. Oljeparfymer är mer koncentrerade än vanliga sprayparfymer, appliceras direkt på huden, tränger in bättre och har en längre hållbarhet. Våra flaskor är designade för att vara praktiska och portabla, så att du alltid kan ha med dig din signaturdoft, oavsett var du befinner dig. Vårt sortiment inkluderar dofter inspirerade av kända parfymer samt orientaliska dofter som musk och oud, allt för att erbjuda högkvalitativa parfymer till rimliga priser.
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
                src={purseimg}
                alt="AboutUs-history"
                className="aboutusimg"
              />
            </Col>
            <Col md={8} className="order-md-1">
              <h3>Vår vision</h3>
              <p>
                På Ajjr strävar vi efter att bli ledande inom oljeparfym på den svenska marknaden genom att erbjuda exklusiva och långvariga dofter som kombinerar traditionell parfymkonst med modern bekvämlighet. Vi vill sprida medvetenheten om oljeparfym och dess fördelar till en bredare publik i Sverige, och på så sätt öppna upp en ny värld av doftupplevelser för våra kunder. Vår vision är att varje person ska kunna bära sin signaturdoft med stolthet, var de än befinner sig, och känna sig unik och självsäker.
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
                src={produktpageimg}
                alt="AboutUs-charity"
                className="aboutusimg"
              />
            </Col>
            <Col md={8}>
              <h3>Välgörenhet</h3>
              <p>
                På Ajjr är vi engagerade i att ge tillbaka till samhället. Därför donerar vi 10% av våra vinster till välgörenhet. Vi tror starkt på att företag har en viktig roll i att göra världen till en bättre plats och att varje bidrag, stort som smått, kan göra skillnad. Genom våra donationer vill vi stödja olika välgörenhetsorganisationer och projekt som arbetar för att förbättra livet för människor i nöd, både lokalt och globalt.
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
                src={holdingperfume}
                alt="AboutUs-collaborations"
                className="aboutusimg"
              />
            </Col>
            <Col md={8} className="order-md-1 order-2">
              <h3>Sammarbeten</h3>
              <p>
                Ajjr värdesätter samarbeten och ser dem som en nyckel till att nå ut till fler människor och skapa en stark gemenskap kring våra produkter. Vi arbetar aktivt med influencers och andra företag genom tävlingar, giveaways, rabattkoder och liknande kampanjer. Dessa samarbeten gör det möjligt för oss att erbjuda våra kunder spännande möjligheter och förmånliga erbjudanden, samtidigt som vi stärker vår närvaro och sprider kunskapen om oljeparfym. Vi ser fram emot att fortsätta utveckla kreativa och givande partnerskap i framtiden.
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
