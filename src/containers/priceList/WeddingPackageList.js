import React, {useState} from 'react'
import { Card, CardHeader, CardBody, Collapse, Container, Row, Col, Button} from 'reactstrap'
import { useTranslation } from 'react-i18next'

function WeddingPackageList() {

  const [toggleQuestion, setToggleQuestion] = useState(0);

  const { t } = useTranslation("pricelist");
  const dataWeddingPackage = [
    {
      "id": 1,
      "title": "Like Father, Like Son",
      "image": require("../../assets/images/pricelist-wedding-likefather.jpg"),
      "description": [
        "1 Set of Semi Wool Canvassed Suit + Pants + Vest + Shirt + Tie + Monogram",
        "1 Set of Semi Wool Suit + Pants"
      ],
      "price": "Rp4.625.000"
    },
    {
      "id": 2,
      "title": "Family Set",
      "image": require("../../assets/images/pricelist-wedding-family.jpg"),
      "description": [
        "1 Set of Semi Wool Canvassed Suit + Pants + Vest + Shirt + Tie + Monogram",
        "3 Set of Semi Wool Suit + Pants"
      ],
      "price": "Rp8.800.000"
     },
     {
      "id": 3,
      "title": "Tuxedo Man",
      "image": require("../../assets/images/pricelist-wedding-tuxedo.jpg"),
      "description": [
        "1 Set of Tuxedo + Pants + Shirt + Bow Tie + Monogram"
      ],
      "price": "Rp2.830.000"
     },
     {
      "id": 4,
      "title": "Groomsmen",
      "image": require("../../assets/images/pricelist-wedding-groomsmen.jpg"),
      "description": [
        "1 Set of Semi Wool Canvassed Suit + Pants + Shirt + Tie + Monogram",
        "4 Set of Hi Twist Suit + Pants"
      ],
      "price": "Rp7.760.000"
     }
  ]
  return(
    <div id="wedding-package-list-section">
      <Container>
        {dataWeddingPackage.map(v => (
          <div className="wedding-section">
            <h6 className="wedding-suit-label">{`${t("wedding-package-section.wedding-card-subtitle")} #${v.id}`}</h6>
            <h5 className="wedding-title">{v.title}</h5>
            <img className="wedding-img" src={v.image} alt={v.title}></img>
            {v.description.map(p => <p className="wedding-description">{p}</p>)}
            <h5 className="wedding-price-label">{v.price}</h5>
            <a href={`${t("wedding-package-section.wa-link")}%20${v.title}%20wedding%20package`}>
              <Button className="wedding-cta">
                Order Now
              </Button>
            </a>
          </div>
        ))}
      </Container>
    </div>
  )
}

export default WeddingPackageList;