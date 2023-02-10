import React from "react";
import Card from "react-bootstrap/Card";
import { FaHandPointRight } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="green">Massimiliano Pronesti</span>,
            a passionate Computer Science Engineering student from <span className="green"> Italy</span>,
            currently in <span className="green"> France</span>.
            
            <br />
            <br />
            Apart from coding, some other activities I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Going to the gym
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Going to the movies
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Travelling
            </li>
          </ul>

          <br/>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
