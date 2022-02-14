import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiRust,
  DiGit
} from "react-icons/di";
import { 
  SiCplusplus,
  SiPytorch, 
  SiTensorflow, 
  SiFirebase, 
  SiQiskit, 
  SiScikitlearn,
  SiDocker,
  SiCmake
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        [
          <SiCplusplus />,
          <DiJavascript1 />,
          <DiNodejs />,
          <DiReact />,
          <DiMongodb />,
          <DiPython />,
          <SiScikitlearn />,
          <SiQiskit />,
          <SiPytorch />,
          <SiTensorflow />,
          <DiGit />,
          <SiFirebase />,
          <DiRust />,
          <SiDocker />,
          <SiCmake/>
        ].map(tool => 
          <Col xs={4} md={2} className="tech-icons">
            {tool}
          </Col>)
      }
    </Row>
  );
}

export default Techstack;
