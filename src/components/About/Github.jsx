import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
    <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      <strong className="purple">GitHub Activities</strong>
      </h1>
      <GitHubCalendar
        username="jay-davisphem"
        blockSize={15}
        blockMargin={5}
        color="black"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
