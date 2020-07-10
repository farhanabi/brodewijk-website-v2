import React from 'react'
import { Container, Row, Col, Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function SocialProof() {
  const { t } = useTranslation("homepage");
  const data = [
    {
      title: t("social-proof-section.advantages.shipping.title"),
      image: require('assets/images/shipping.svg'),
      text: t("social-proof-section.advantages.shipping.subtitle")
    },
    {
      title: t("social-proof-section.advantages.fabric.title"),
      image: require('assets/images/fabric-2.svg'),
      text: t("social-proof-section.advantages.fabric.subtitle")
    },
    {
      title: t("social-proof-section.advantages.customize.title"),
      image: require('assets/images/easy-customization.svg'),
      text: t("social-proof-section.advantages.customize.subtitle")
    },
    {
      title: t("social-proof-section.advantages.measure.title"),
      image: require('assets/images/perfect-fit.svg'),
      text: t("social-proof-section.advantages.measure.subtitle")
    },
    {
      title: t("social-proof-section.advantages.guarantee.title"),
      image: require('assets/images/guarantee.svg'),
      text: t("social-proof-section.advantages.guarantee.subtitle")
    },
  ]
  return(
    <div id="social-proof-section">
      <Container>
        <h5 className="title-proof">{t("social-proof-section.title")}</h5>
        <p className="subtitle-proof">{t("social-proof-section.subtitle")}</p>
        <Row className="data-list justify-content-center">
          {data.map((v, k) => (
            <Col lg={2} xs={12} key={k} className="data-item">
              <img src={v.image} alt={v.title} className="item-img" />
              <h6 className="item-title">{v.title}</h6>
              <p className="item-text">{v.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default SocialProof;