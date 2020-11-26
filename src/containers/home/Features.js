import React from 'react'
import { Container, Button, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'


function Features() {
  const { t } = useTranslation("homepage")
  const data = [
    {
      label: t("features-section.button-suit"),
      image: require('assets/images/suit.jpg'),
      link: '/customize/suit'
    },
    {
      label: t("features-section.button-shirt"),
      image: require('assets/images/shirts.jpg'),
      link: '/collections/shirt'
    },
    {
      label: t("features-section.button-pants"),
      image: require('assets/images/pants.jpg'),
      link: '/collections/pants'
    },
    {
      label: t("features-section.button-vest"),
      image: require('assets/images/vest.jpg'),
      link: '/customize/vest'
    },
  ]

  return(
    <div id="features-section">
      <Container>
        <Row>
          <Col lg={4} className="left-section">
            <div className="wrapper-text">
              <h4 className="title">{t("features-section.title")}</h4>
              <p className="text">{t("features-section.subtitle")}</p>
            </div>
          </Col>
          <Col lg={8} className="right-section">
            <Row className="data-list">
              {data.map((v, k) => (
                <Col md={3} xs={6} key={k} className="data-item">
                  <div className="wrapper-btn">
                    <Link to={v.link}><Button size="sm" className="btn-outlinewhite all">{v.label}</Button></Link>
                  </div>
                  <img src={v.image} alt={v.label} className="item-img" />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Features;