import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bayesnet from "../../assets/Projects/bayesnet.jpg";
import quantum from "../../assets/Projects/quantum.png";
import diffusers from "../../assets/Projects/diffusers2.jpg"
import portfolio from "../../assets/Projects/portfolio.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();
  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('ProjHeader')} <strong className="green">{t('Works')} </strong>
        </h1>
        <p className="text">{t('ProjSubtitle')}</p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diffusers}
              title="Diffusers-rs"
              description={t('Proj1')}
              link="https://github.com/LaurentMazare/diffusers-rs"
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bayesnet}
              isBlog={false}
              title="Baylib"
              description={t('Proj2')}
              link="https://github.com/mspronesti/baylib"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quantum}
              isBlog={false}
              title="Qlearnkit"
              description={t('Proj3')}
              link="https://github.com/mspronesti/qlearnkit"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title={t('ThisWebsite')}
              description={t('Proj4')}
              link="https://github.com/mspronesti/mspronesti.github.io"
            />
          </Col>         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
