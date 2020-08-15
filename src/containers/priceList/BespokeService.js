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
     "twoPieceStrike": "Rp1.300.000",
     "twoPiecePrice": "Rp1.170.000",
     "threePieceStrike": "Rp1.739.000",
     "threePiecePrice": "Rp1.478.000"
    },
    {
      "name": "Semi Wool",
      "image": require("../../assets/images/pricelist-bespoke-semiwool.jpg"),
      "description": t("bespoke-service-section.bespoke-card.card-2.description"),
      "twoPieceStrike": "Rp1.895.000",
      "twoPiecePrice": "Rp1.421.000",
      "threePieceStrike": "Rp2.366.000",
      "threePiecePrice": "Rp1.775.000"
     },
     {
      "name": "Wool",
      "image": require("../../assets/images/pricelist-bespoke-wool.jpg"),
      "description": t("bespoke-service-section.bespoke-card.card-3.description"),
      "twoPieceStrike": "Rp2.685.000",
      "twoPiecePrice": "Rp2.148.000",
      "threePieceStrike": "Rp3.340.000",
      "threePiecePrice": "Rp2.672.000"
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
            <p className="bespoke-price">{t("bespoke-service-section.start-from")} <strike>{v.twoPieceStrike}</strike> {v.twoPiecePrice}</p>
            <h5 className="bespoke-price-label"><b>{t("bespoke-service-section.three-piece-bold")}</b> {t("bespoke-service-section.three-piece-regular")}</h5>
            <p className="bespoke-price">{t("bespoke-service-section.start-from")} <strike>{v.threePieceStrike}</strike> {v.threePiecePrice}</p>
            <a href="https://beta.brodewijk.com"><Button className="bespoke-cta">{t("bespoke-service-section.order-now")}</Button></a>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default BespokeService;