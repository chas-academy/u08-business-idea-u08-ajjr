import React from "react";
import "./aboutus.css"; // Importera CSS-filen


const AboutUs = () => {
  return (
    <>
      <div className="text-center">
        <h1> Om Ajjr </h1>
      </div>

      <br />

      <div className="vision">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src="src/images/descriptionimg.png"
                alt="AboutUs-vision"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <h3>Vår vision</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae nihil hic delectus excepturi ipsam reprehenderit
                iusto rem, quam, repellendus accusantium culpa reiciendis sit
                dolorum aut aperiam a architecto. Fuga, sit. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Recusandae nihil hic
                delectus excepturi ipsam reprehenderit iusto rem, quam,
                repellendus accusantium culpa reiciendis sit dolorum aut aperiam
                a architecto. Fuga, sit. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Recusandae nihil hic delectus excepturi ipsam
                reprehenderit iusto rem, quam, repellendus accusantium culpa
                reiciendis sit dolorum aut aperiam a architecto. Fuga, sit.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <br />

      <div className="history">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3>Ajjr historia</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae nihil hic delectus excepturi ipsam reprehenderit
                iusto rem, quam, repellendus accusantium culpa reiciendis sit
                dolorum aut aperiam a architecto. Fuga, sit. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Recusandae nihil hic
                delectus excepturi ipsam reprehenderit iusto rem, quam,
                repellendus accusantium culpa reiciendis sit dolorum aut aperiam
                a architecto. Fuga, sit. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Recusandae nihil hic delectus excepturi ipsam
                reprehenderit iusto rem, quam, repellendus accusantium culpa
                reiciendis sit dolorum aut aperiam a architecto. Fuga, sit.
              </p>
            </div>
            <div className="col-md-4">
              <img
                src="src/images/purseimg.JPG"
                alt="AboutUs-history"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="valgorenhet">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src="src/images/produktpageimg.JPG"
                alt="AboutUs-charity"
                className="img-fluid"
              />
            </div>
            <div className="col-md-8">
              <h3>Välgörenhet</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae nihil hic delectus excepturi ipsam reprehenderit
                iusto rem, quam, repellendus accusantium culpa reiciendis sit
                dolorum aut aperiam a architecto. Fuga, sit. Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Recusandae nihil hic
                delectus excepturi ipsam reprehenderit iusto rem, quam,
                repellendus accusantium culpa reiciendis sit dolorum aut aperiam
                a architecto. Fuga, sit. Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Recusandae nihil hic delectus excepturi ipsam
                reprehenderit iusto rem, quam, repellendus accusantium culpa
                reiciendis sit dolorum aut aperiam a architecto. Fuga, sit.
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="contact">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h3>Kontakta oss:</h3>
              <p>
                Har du frågor? Ställ din fråga genom att kontakta oss på
                följande eller via sociala medier:
              </p>
              <ul>
                <li>Telefon: 07005566448</li>
                <li>E-post: info@ajjr.se</li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
