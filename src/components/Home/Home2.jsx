import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.5em" }}>About Me</h1>
            <p className="home-about-body">
              I specialize in developing fullstack applications, leveraging my experience in
              <i>
                <b className="purple"> JavaScript, TypeScript, React, Node.js, and Django</b>.
              </i>
              <br />
              <br />
              With a background in 
              <b className="purple"> building scalable and robust solutions</b>, I’ve successfully contributed to projects
              that have improved efficiency and streamlined user experiences.
              <br />
              <br />
              I am passionate about creating innovative and impactful web solutions using
              <i>
                <b className="purple"> modern web technologies and industry best practices.</b>
              </i>
              <br />
              <br />
              I am highly proficient with 
              <b className="purple"> React.js, Next.js, and other modern JavaScript libraries and frameworks.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jay-davisphem"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub size="1.5em" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/oluw4femi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter size="1.5em" />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/davisphem/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn size="1.5em" />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
