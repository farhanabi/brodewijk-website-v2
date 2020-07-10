import React from 'react'
import { Container, Row, Col} from 'reactstrap'
import { useTranslation } from 'react-i18next'

function HowItWorks() {
  const { t } = useTranslation("homepage");
  const data = [
    {
      label: 'fabric',
      image: require('assets/images/fabric.svg'),
      text: t("hiw-section.fabric")
    },
    {
      label: 'measure',
      image: require('assets/images/measure.svg'),
      text: t("hiw-section.measure")
    },
    {
      label: 'cart',
      image: require('assets/images/cart.svg'),
      text: t("hiw-section.cart")
    }
  ]
  return(
    <div id="how-it-works-section">
      <Container>
        <h5 className="title-how">{t("hiw-section.title")}</h5>
        <Row className="data-list">
          {data.map((v, k) => (
            <Col md={4} key={k} className="data-item">
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