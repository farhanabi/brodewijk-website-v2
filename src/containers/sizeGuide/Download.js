import React from 'react'
import { Container, Row, Col, Button} from 'reactstrap'
import { useTranslation } from 'react-i18next'

const img = require('assets/images/measure.svg')

function Download() {
  const { t } = useTranslation("sizeguide");
  return(
    <div id="contact-section">
      <Container>
        <Row>
          <Col lg={8} xs={12} className="wrapper-text">
            <Row>
              <Col xs={12} md={3} lg={3} style={{ textAlign: 'center' }}>
                <img src={img} alt="contact"/>
              </Col>
              <Col xs={12} md={9} lg={9} className="text">
                <h5 className="title-contact">{t("contact-section.title")}</h5>
                <p className="subtitle-contact">{t("contact-section.subtitle")}</p>
              </Col>
            </Row>
          </Col>
          <Col lg={4} xs={12} className="wrapper-btn">
            <Button 
              className="btn-black sm"
              href="https://www.brodewijk.com/static/media/Printable%20Measuring%20Tape%20-%20English.pdf"
              target='_blank' rel='noopener noreferrer'
            >
              {t("contact-section.button-download")}
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Download;
