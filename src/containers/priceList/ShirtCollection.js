import React from 'react'
import { Link } from "react-router-dom";
import { Container, Row, Col, Button} from 'reactstrap'
import { useTranslation } from 'react-i18next'

function ShirtCollection() {

  const { t } = useTranslation("pricelist");
  const dataBespokeService = [
    {
      "name": "Classic Dress Shirt",
      "image": require("../../assets/images/pricelist-classic-dress-shirt.jpg"),
      "description": t("shirt-collection-section.shirt-card.card-1.description"),
      "available": t("shirt-collection-section.shirt-card.card-1.available"),
      "collar": [
        require("../../assets/images/pricelist-collar-new-kent.jpg"),
        require("../../assets/images/pricelist-collar-kent.jpg"),
        require("../../assets/images/pricelist-collar-rounded.jpg"),
        require("../../assets/images/pricelist-collar-standup.jpg"),
        require("../../assets/images/pricelist-collar-buttondown.jpg"),
        require("../../assets/images/pricelist-collar-wing.jpg")
      ],
      "standardPrice": "Rp275.000",
      "customPrice": "Rp350.000"
    },
    {
      "name": "Casual Dress Shirt",
      "image": require("../../assets/images/pricelist-casual-dress-shirt.jpg"),
      "description": t("shirt-collection-section.shirt-card.card-2.description"),
      "available": t("shirt-collection-section.shirt-card.card-2.available"),
      "collar": [
        require("../../assets/images/pricelist-collar-new-kent.jpg"),
        require("../../assets/images/pricelist-collar-kent.jpg"),
        require("../../assets/images/pricelist-collar-rounded.jpg"),
        require("../../assets/images/pricelist-collar-standup.jpg"),
        require("../../assets/images/pricelist-collar-buttondown.jpg"),
        require("../../assets/images/pricelist-collar-open.jpg")
      ],
      "standardPrice": "Rp250.000",
      "customPrice": "Rp350.000"
     }
  ]
  return(
    <div id="shirt-collection-section">
      <Container>
        <h5 className="title-shirt-collection">{t("shirt-collection-section.title")}</h5>
        <p className="subtitle-shirt-collection">{t("shirt-collection-section.subtitle")}</p>
        {dataBespokeService.map(v => (
          <div className="shirt-collection-section">
            <h6 className="collection-label">{t("shirt-collection-section.shirt-collection-subtitle")}</h6>
            <h5 className="collection-title">{v.name}</h5>
            <img className="collection-img" src={v.image}></img>
            <p className="collection-description">{v.description}</p>
            <p className="collection-description">{v.available}</p>
            <b>Collar:</b>
            <div className="collar-wrapper">
              {v.collar.map(c => <img className="collar-image" alt="" src={c}/>)}
            </div>
            <p className="collection-price"><b>{t("shirt-collection-section.standard")}:</b> {v.standardPrice}</p>
            <p className="collection-price"><b>{t("shirt-collection-section.custom")}:</b> {v.customPrice}</p>
            <Link to="/size-guide" className="size-guide-button">Size Guide</Link>
            <a href={`${t("shirt-collection-section.wa-link")}%20${v.name}%20shirt%collection`}><Button className="collection-cta">{t("shirt-collection-section.order-now")}</Button></a>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default ShirtCollection;