import React, {useState} from 'react'
import { Card, CardHeader, CardBody, Collapse, Container, Row, Col, Button} from 'reactstrap'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

function AboutUs() {

  const { t } = useTranslation("aboutus");

  return(
    <div id="about-us-section">
      <Container>
        <h5 className="title-about-us">{t("about-us-section.title")}</h5>
        <div className="about-us-section">
          <h5 className="section-title">{t("about-us-section.section.who-we-are.title")}</h5>
          <p className="section-content">{t("about-us-section.section.who-we-are.content-1")}</p>
          <p className="section-content">{t("about-us-section.section.who-we-are.content-2")}</p>
        </div>
        <div className="about-us-section">
          <h5 className="section-title">{t("about-us-section.section.problems.title")}</h5>
          <ul>
            <li className="section-content">{t("about-us-section.section.problems.content-1")}</li>
            <li className="section-content">{t("about-us-section.section.problems.content-2")}</li>
            <li className="section-content">{t("about-us-section.section.problems.content-3")}</li>
          </ul>
        </div>
        <div className="about-us-section">
          <h5 className="section-title">{t("about-us-section.section.solutions.title")}</h5>
          <ul>
            <li className="section-content">{t("about-us-section.section.solutions.content-1")}</li>
            <li className="section-content">{t("about-us-section.section.solutions.content-2")}</li>
            <li className="section-content">{t("about-us-section.section.solutions.content-3")}</li>
          </ul>
        </div>
      </Container>
    </div>
  )
}

export default AboutUs;