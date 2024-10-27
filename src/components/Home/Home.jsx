import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import AboutCard from "../About/AboutCard";
import Home2 from "./Home2";
import Type from "./Type";
import ExperienceHighlights from "./ExperienceHighlights";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I am <strong className="main-name">DAVID OLUWAFEMI</strong>
              </h1>

              <p className="heading-description">
                Fullstack Developer | Experienced with scalable web solutions using JavaScript, TypeScript, and modern web frameworks.
              </p>
              <a href='https://coolors.co/?ref=6217acdeb4c9a6000a7cce18'></a>
              <h2 className="heading-tagline">
                Transforming ideas into impactful digital experiences.
              </h2>

              <div style={{ textAlign: "left", marginTop: 20 }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <AboutCard />
      <ExperienceHighlights />
      <Home2 />
    </section>
  );
}

export default Home;
