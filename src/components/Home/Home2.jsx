import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              I have a strong inner motivation to assertively create and implement new ideas. I am a team player, multi-tasker and strive to constantly exceed expectations
            </h1>
            <p className="home-about-body">
              
              <br />I am very proficient with
              <i>
                <b className="purple"> JavaScript, TypeScript, HTML, CSS and other web technologies. </b>
              </i>
              <br />
              <br />
              I love building scalable, robust and responsive web apps with modern
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also with other required and recommended technologies.
                
              </i>
              <br />
              <br />
            To be precise I am very proficient with {' '}
              <i>
                <b className="purple">
                  
                  {'  '} Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
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
                  <AiFillGithub size='1.5em'/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/oluw4femi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter size='1.5em'/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/davisphem/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn size='1.5em' />
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
