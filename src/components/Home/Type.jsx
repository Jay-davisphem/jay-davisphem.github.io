import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Software Developer",
          "Open Source Contributor",
          "Algorist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 200,
      }}
    />
  );
}

export default Type;
