import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import { useTranslation } from 'react-i18next'

function HowItWorks() {
  const { t } = useTranslation("bookappointment");
  const data = [
    {
      label: 'book',
      image: require('assets/images/book.svg'),
      text: t("hiw-section.book")
    },
    {
      label: 'pick',
      image: require('assets/images/measure.svg'),
      text: t("hiw-section.pick")
    },
    {
      label: 'pay',
      image: require('assets/images/pay.svg'),
      text: t("hiw-section.pay")
    },
    {
      label: 'finish',
      image: require('assets/images/cart.svg'),
      text: t("hiw-section.finish")
    }
  ]
  return(
    <div id="how-it-works-section">
      <Container>
        <h5 className="title-how">{t("hiw-section.title")}</h5>
        <Row className="data-list">
          {data.map((v, k) => (
            <Col md={3} key={k} className="data-item">
              <img src={v.image} alt={v.label} className="item-img" />
              <p className="item-text">{v.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default HowItWorks;