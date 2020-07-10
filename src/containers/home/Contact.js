import React from 'react'
import { Container, Row, Col, Button} from 'reactstrap'
import { useTranslation } from 'react-i18next'

const img = require('assets/images/contact.svg')

function Contact() {
  const { t } = useTranslation("homepage");
  return(
    <div id="contact-section">
      <Container>
        <Row>
          <Col lg={6} xs={12} className="wrapper-text">
            <Row>
              <Col xs={12} md={3} lg={2} style={{ textAlign: 'center' }}>
                <img src={img} alt="contact"/>
              </Col>
              <Col xs={12} md={9} lg={10} className="text">
                <h5 className="title-contact">{t("contact-section.title")}</h5>
                <p className="subtitle-contact">{t("contact-section.subtitle")}</p>
              </Col>
            </Row>
          </Col>
          <Col lg={6} xs={12} className="wrapper-btn">
            <Button className="btn-black sm">{t("contact-section.button-register")}</Button>
            <Button className="btn-outline-black sm"><i className="fab fa-whatsapp"/>&nbsp;{t("contact-section.button-consult")}</Button>
          </Col>
        </Row>
        
      </Container>
    </div>
  )
}

export default Contact;