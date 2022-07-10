import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  // const colourTheme = {
  //   background: "transparent",
  //   text: "#ffffff",
  //   grade4: "#39d353",
  //   grade3: "#26a641",
  //   grade2: "#006d32",
  //   grade1: "#0e4429",
  //   grade0: "#161b22",
  // };
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="mspronesti"
        blockSize={15}
        blockMargin={5}
        color="#39d353"
        //theme={colourTheme}
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
