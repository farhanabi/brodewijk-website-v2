import React from 'react'
import { Container, Row, Col, Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const img = require('assets/images/book-appointment.png')

function BookAppointment() {
  const { t } = useTranslation("sizeguide")
  return(
    <div id="book-appointment-section">
      <Container>
        <Row className="data">
          <Col xs={12} className="right-section d-lg-none">
            <img src={img} alt="book appointment" className="img-book" />
          </Col>          
          <Col lg={5} xs={12} className="left-section">
            <h3 className="title-book">{t("book-section.title")}</h3>
            <p className="text-book">{t("book-section.subtitle")}</p>
            <Link to="/book-appointment">
              <Button className="btn-black">{t("book-section.button")}</Button>
            </Link>
          </Col>
          <Col lg={7} className="right-section d-none d-lg-block">
            <img src={img} alt="book appointment" className="img-book" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BookAppointment;