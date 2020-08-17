import React, { useState } from 'react'
import { Carousel, CarouselItem, CarouselIndicators, Button, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const imgInfo = require('assets/images/wedding-package.png')
const items = [
  {
    image: require('assets/images/collections-1.jpg'),
    state: {},
    altText: "Collection-1",
    link: "/collection"
  },
  {
    image: require('assets/images/collections-2.jpg'),
    state: {},
    altText: "Collection-2",
    link: "/collection"
  },
  {
    image: require('assets/images/collections-3.jpg'),
    state: {},
    altText: "Collection-3",
    link: "/collection"
  }
]

function WeddingPackage() {
  const { t } = useTranslation("pricelist");
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }
  
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.image} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div id="wedding-package-mobile">
      <Container>
        <Row className="info-section">
          <Col lg={4} xs={12} className="left-section">
            <h6 className="tag-wedding-package">{t("wedding-package-section.category")}</h6>
            <h2 className="title-wedding-package">{t("wedding-package-section.title")}</h2>
            <p className="text-wedding-package">{t("wedding-package-section.subtitle")}</p>
          </Col>
          <Col lg={8} xs={12} className="right-section">
            <img src={imgInfo} alt="Best Wedding Package" className="img-wedding-package" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WeddingPackage;