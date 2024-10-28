import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const Li = ({ children }) => {
  return (
    <li className="about-activity">
      <ImPointRight /> {children}
    </li>
  );
};

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1>My Expertise: ReactJS, NodeJS, and Django</h1>
          <p style={{ textAlign: "center", fontSize: '1.2em' }}>
            I am Oluwafemi David, a passionate Computer Engineering student at Obafemi Awolowo University, currently in my 500 level with a CGPA of 4.48/5. I thrive on tackling challenging programming problems and enjoy building real-world applications. 
            <br />
            My journey has included impactful experiences as a Junior Python Developer at Dowstrademus and a Software Engineering Intern at Zuri Inc., where I designed and deployed applications using modern frameworks and technologies.
            <br />
            My goal is to become a highly competent and dependable software engineer, continuously learning from experienced developers while sharing my knowledge with others.
          </p>
          <p>Here are a few of my interests and activities:</p>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              placeItems: "center",
            }}
          >
            <Li>Teaching and mentoring peers in programming concepts</Li>
            <Li>Exploring innovative approaches to problem-solving</Li>
            <Li>Reading tech-related books and blogs</Li>
            <Li>Engaging with martial arts literature for discipline and focus</Li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
