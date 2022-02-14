import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Massimiliano Pronesti</span>,
            a passionate Computer Engineering student from <span className="purple"> Italy</span>,
            currently in <span className="purple"> France</span>.
            
            <br />
            <br />
            Apart from coding, some other activities I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Going to the gym
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to the movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <br/>
          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "you can't climb the ladder of success with your hands in your pockets."{" "}
          </p>
          <footer className="blockquote-footer">Arnold Schwarzenegger</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
