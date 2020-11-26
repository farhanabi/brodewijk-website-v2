import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Button} from 'reactstrap'
import { useTranslation } from 'react-i18next'

function PantsCollection() {

  const { t } = useTranslation("pricelist");
  const dataBespokeService = [
    {
      "name": "Gurkha Pants",
      "image": [
        require("../../assets/images/pricelist-gurkha-1.jpg"),
        require("../../assets/images/pricelist-gurkha-2.jpg"),
        require("../../assets/images/pricelist-gurkha-3.jpg"),
        require("../../assets/images/pricelist-gurkha-4.jpg")
      ],
      "description": t("pants-collection-section.pants-card.card-1.description"),
      "available": t("pants-collection-section.pants-card.card-1.available"),
      "standardPrice": "Rp390.000",
      "customPrice": "Rp450.000"
    }
  ]
  return(
    <div id="pants-collection-section">
      <Container>
        <h5 className="title-pants-collection">{t("pants-collection-section.title")}</h5>
        <p className="subtitle-pants-collection">{t("pants-collection-section.subtitle")}</p>
        {dataBespokeService.map(v => (
          <div className="pants-collection">
            <h6 className="collection-label">{t("pants-collection-section.pants-collection-subtitle")}</h6>
            <h5 className="collection-title">{v.name}</h5>
            {v.image.map(i => <img className="collection-img" src={i}></img>)}
            <p className="collection-description">{v.description}</p>
            <p className="collection-description">{v.available}</p>
            <p className="collection-price"><b>{t("pants-collection-section.standard")}:</b> {v.standardPrice}</p>
            <p className="collection-price"><b>{t("pants-collection-section.custom")}:</b> {v.customPrice}</p>
            <Link to="/size-guide" className="size-guide-button">Size Guide</Link>
            <a href={`${t("pants-collection-section.wa-link")}%20${v.name}%20pants%collection`}><Button className="collection-cta">{t("pants-collection-section.order-now")}</Button></a>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default PantsCollection;