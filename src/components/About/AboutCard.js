import React from "react";
import Card from "react-bootstrap/Card";
import { FaHandPointRight } from "react-icons/fa";
import { useTranslation } from "react-i18next";
function AboutCard() {
  const  { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          {t('Greeting')} {t('Im')} <span className="green">Massimiliano Pronesti</span>, {t('MLE')} {t('IWorkAt')} <span className="green">{t('Company')}</span> {t('CompanyLocation')}.
            <br/>
            {t('IHoldDegree1')} <span className="green">Computer Science Engineering</span> {t('School1')} {t('And')} <span className="green">Data Science and Engineering</span> {t('School2')}.
            
            <br/>
            <br/>
            {t('Interests')}
          </p>
          <ul>
            <li className="about-activity">
              <FaHandPointRight /> Machine Learning
            </li>
            <li className="about-activity">
              <FaHandPointRight /> High-Performance Computing
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Quantum Computing
            </li>
            <li className="about-activity">
              <FaHandPointRight /> Software Engineering
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
