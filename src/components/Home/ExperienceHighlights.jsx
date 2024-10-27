import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function ExperienceHighlights() {
  const experiences = [
    {
      title: "Software Engineer at Dowstrademus",
      description:
        "Led a team in building a scalable e-commerce platform using Django and React, enhancing load time and optimizing the UI/UX.",
    },
    {
      title: "Software Engineering Intern at Zuri Inc.",
      description:
        "Implemented UI components and API integrations, improving front-end efficiency by 30% and contributing to multiple successful project launches.",
    },
  ];

  return (
    <Container fluid className="experience-section">
      <Container>
        <h1 className="experience-heading">Experience Highlights</h1>
        <Row>
          {experiences.map((exp, index) => (
            <Col md={6} key={index} className="experience-card-col">
              <Card className="experience-card">
                <Card.Body>
                  <Card.Title>{exp.title}</Card.Title>
                  <Card.Text>{exp.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default ExperienceHighlights;
