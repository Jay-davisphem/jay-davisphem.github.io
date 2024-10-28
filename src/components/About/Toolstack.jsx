import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiInsomnia,
  SiVim,
  SiCurl,
  SiCloudflare
} from "react-icons/si";
import { FaAws } from 'react-icons/fa'

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <div style={{fontSize: '.5em'}}>Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVim />
        <div style={{fontSize: '.5em'}}>VIM</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCloudflare />
        <div style={{fontSize: '.5em'}}>VIM</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <div style={{fontSize: '.5em'}}>Cloudflare</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAws />
        <div style={{fontSize: '.5em'}}>AWS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <div style={{fontSize: '.5em'}}>Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiInsomnia />
        <div style={{fontSize: '.5em'}}>Insomia</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCurl />
        <div style={{fontSize: '.5em'}}>Curl</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <div style={{fontSize: '.5em'}}>Vercel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <div style={{fontSize: '.5em'}}>Heroku</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
