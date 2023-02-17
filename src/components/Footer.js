import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();


  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4"/>

        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year} Massimiliano Pronesti</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="https://github.com/mspronesti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="https://www.linkedin.com/in/massimiliano-pronesti/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="mailto:massimiliano.pronesti@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a className="footer-social-icons"
                href="https://www.instagram.com/__mpronesti"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
        <Col md="4" className="footer-body"/>
        
      </Row>
    </Container>
  );
}

export default Footer;