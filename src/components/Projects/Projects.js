import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bayesnet from "../../assets/Projects/bayesnet.jpg";
import quantum from "../../assets/Projects/quantum.png";
import diffusers from "../../assets/Projects/diffusers2.jpg"
import portfolio from "../../assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diffusers}
              isBlog={false}
              title="Diffusers-rs"
              description="Rust implementation of the diffusers API, equivalent to huggingface's diffusers. Based on the tch-rs crate, the implementation is complete enough so as to be able to run Stable Diffusion v1.5 and v2.1. Main open-source contributor."
              link="https://github.com/LaurentMazare/diffusers-rs"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bayesnet}
              isBlog={false}
              title="Baylib"
              description="High-performance C++20 library for bayesian inference on discrete bayesian network, supporting both CPU and GPU implementations (Cuda and/or Boost compute) of inference algorithms and copy-on-write memory optimizations."
              link="https://github.com/mspronesti/baylib"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quantum}
              isBlog={false}
              title="Qlearnkit"
              description="Python toolkit for quantum machine learning, developed on top of Qiskit, offers well-known supervised and unsupervised machine learning implementations for a gated quantum computer. Winner of a University award for best project."
              link="https://github.com/mspronesti/qlearnkit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="This Website"
              description="Personal website portfolio. Built with React, NodeJS and  ❤️
              
              
              
              "
              link="https://github.com/mspronesti/mspronesti.github.io"
            />
          </Col>


          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
