import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function ExperienceHighlights() {
  const experiences = [
    {
      title: "ReactJS Frontend Lead | Sandsstores, Pennsylvania, USA (Remote)",
      description:
        "Led front-end development for Sandsstores.com, an e-commerce platform, using Next.js, Tailwind CSS, and Zustand. Successfully deployed the project on Vercel with AWS S3 integration, designed intuitive UIs enhancing user experience, and optimized for high performance. Overcame complex challenges, elevating site reliability and user satisfaction, and managed seamless front-end deployment with custom domain setup on sandsstores.com.",
    },
    {
      title: "Lead Developer | Datnas Learning Management System",
      description:
        "Spearheaded the development of Datnas, an innovative Learning Management System (LMS) designed to facilitate seamless online education. Utilized Express.js and TypeScript to build a robust backend, ensuring efficient data handling and user management. Integrated advanced features such as interactive course content, real-time notifications, and user analytics to enhance the learning experience. Focused on creating a responsive front-end with a user-friendly interface, ultimately driving student engagement and satisfaction.",
    },
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
