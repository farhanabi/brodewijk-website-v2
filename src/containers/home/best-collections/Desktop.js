import React from 'react'
import { Container, Row, Col, Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const imgInfo = require('assets/images/collections.png')
const data = [
  {
    image: require('assets/images/collections-1.jpg'),
    state: {}
  },
  {
    image: require('assets/images/collections-2.jpg'),
    state: {}
  },
  {
    image: require('assets/images/collections-3.jpg'),
    state: {}
  }
]

function BestCollections() {
  const { t } = useTranslation("homepage");
  return(
    <div id="best-collections-desktop">
      <Container>
        <Row className="info-section">
          <Col lg={4} xs={12} className="left-section">
            <h6 className="tag-collection">{t("best-collections-section.category")}</h6>
            <h2 className="title-collection">{t("best-collections-section.title")}</h2>
            <p className="text-collection">{t("best-collections-section.subtitle")}</p>
          </Col>
          <Col lg={8} xs={12} className="right-section">
            <img src={imgInfo} alt="best collection" className="img-collection" />
          </Col>
        </Row>
        <Row className="data-section">
          {data.map((v, k) => (
            <Col md={4} xs={12} key={k} className="data-item">
              <Link to="/collection"><img src={v.image} className="item-img"/></Link>
            </Col>
          ))}
        </Row>
        <Row className="more-section">
          <Button className="btn-outline-black all">{t("best-collections-section.button")}</Button>
        </Row>
      </Container>
    </div>
  )
}

export default BestCollections;