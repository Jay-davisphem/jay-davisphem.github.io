import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

const Li = (val) => {
  return (
    <li className="about-activity">
      <ImPointRight /> {val}
    </li>
  );
};
function AboutCard() {
  return (
    <Card className="quote-card-view ">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1>ReactJS, NodeJS and Django are my area of expertise!</h1>
          <p style={{ textAlign: "center", fontSize: '1.2em'}}>
            I study Computer Engineering at Obafemi Awolowo University. I am presently in 300level with a CGPA of 4.59/5. <br />I love programming, expecially the challenging and practical/real-life ones.
            I also help friends debug.<br /> My aim is to become very competent and dependable in my skillsets by learning from others and teaching others likewise.
            <br />
            <br />
            <p>Few extra activities about me: </p>
          </p>
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              placeItems: "center",
            }}
          >
            <li className="about-activity">
              <ImPointRight /> Teaching Others
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning new things and different ways to do things
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading martial arts and tech novel
            </li>
            <li className="about-activity">
                <ImPointRight /> Reading tech books and blogs
              </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
