import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiDjango,
  DiPostgresql
} from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiShell } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> 
        <div style={{fontSize: '.5em'}}>ReactJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
        <div style={{fontSize: '.5em'}}>Django</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <div style={{fontSize: '.5em'}}>NodeJS</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <div style={{fontSize: '.5em'}}>Next.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <div style={{fontSize: '.5em'}}>Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <div style={{fontSize: '.5em'}}>JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <div style={{fontSize: '.5em'}}>Postgres</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <div style={{fontSize: '.5em'}}>Mongodb</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <div style={{fontSize: '.5em'}}>Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <div style={{fontSize: '.5em'}}>C++</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiShell />
        <div style={{fontSize: '.5em'}}>Shell Scripting</div>
      </Col>
    </Row>
  );
}

export default Techstack;
