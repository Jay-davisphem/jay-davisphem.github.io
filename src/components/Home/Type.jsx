import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Engineer",
          "React Developer"
          "Frontend Engineer",
          "Backend Engineer",
          "Aspiring Data Engineer",
          "JavaScript Developer",
          "Open Source Contributor"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 200,
      }}
    />
  );
}

export default Type;
