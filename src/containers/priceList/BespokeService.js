import React, {useState} from 'react'
import { Card, CardHeader, CardBody, Collapse, Container, Row, Col, Button} from 'reactstrap'
import { useTranslation } from 'react-i18next'

function BespokeService() {

  const [toggleQuestion, setToggleQuestion] = useState(0);

  const { t } = useTranslation("pricelist");
  const dataBespokeService = [
    {
     "name": "Hi-Twist",
     "image": require("../../assets/images/pricelist-bespoke-hitwist.jpg"),
     "description": t("bespoke-service-section.bespoke-card.card-1.description"),
     "twoPiecePrice": "Rp1.545.000",
     "threePiecePrice": "Rp2.059.000"
    },
    {
      "name": "Semi Wool",
      "image": require("../../assets/images/pricelist-bespoke-semiwool.jpg"),
      "description": t("bespoke-service-section.bespoke-card.card-2.description"),
      "twoPiecePrice": "Rp2.215.000",
      "threePiecePrice": "Rp2.801.000"
     },
     {
      "name": "Wool",
      "image": require("../../assets/images/pricelist-bespoke-wool.jpg"),
      "description": t("bespoke-service-section.bespoke-card.card-3.description"),
      "twoPiecePrice": "Rp2.855.000",
      "threePiecePrice": "Rp3.585.000"
     }
  ]
  return(
    <div id="bespoke-service-section">
      <Container>
        <h5 className="title-bespoke-service">{t("bespoke-service-section.title")}</h5>
        <p className="subtitle-bespoke-service">{t("bespoke-service-section.subtitle")}</p>
        {dataBespokeService.map(v => (
          <div className="bespoke-section">
            <h6 className="bespoke-suit-label">{t("bespoke-service-section.bespoke-suit-subtitle")}</h6>
            <h5 className="bespoke-title">{v.name}</h5>
            <img className="bespoke-img" src={v.image}></img>
            <p className="bespoke-description">{v.description}</p>
            <h5 className="bespoke-price-label"><b>{t("bespoke-service-section.two-piece-bold")}</b> {t("bespoke-service-section.two-piece-regular")}</h5>
            <p className="bespoke-price">{t("bespoke-service-section.start-from")} {v.twoPiecePrice}</p>
            <h5 className="bespoke-price-label"><b>{t("bespoke-service-section.three-piece-bold")}</b> {t("bespoke-service-section.three-piece-regular")}</h5>
            <p className="bespoke-price">{t("bespoke-service-section.start-from")} {v.threePiecePrice}</p>
            <a href={`${t("bespoke-service-section.wa-link")}%20${v.name}%20bespoke%20suit%20service`}><Button className="bespoke-cta">{t("bespoke-service-section.order-now")}</Button></a>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default BespokeService;