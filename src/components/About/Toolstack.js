import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiJupyter, 
  SiPycharm,
  SiClion,
  SiIntellijidea,
  SiVim
} from "react-icons/si";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {
        [
          <SiLinux/>,
          <SiVisualstudiocode/>,
          <SiPycharm />,
          <SiJupyter />,
          <SiIntellijidea/>,
          <SiClion/>,
          <SiVim/>
        ].map(tool => 
            <Col xs={4} md={2} className="tech-icons">
              {tool}
          </Col>)
      }
    </Row>
  );
}

export default Toolstack;
