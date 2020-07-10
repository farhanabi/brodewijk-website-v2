import React, { useState } from 'react'
import { Carousel, CarouselItem, CarouselIndicators, Button, Row, Col, Container } from 'reactstrap';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const imgInfo = require('assets/images/collections.png')
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

function BestCollections() {
  const { t } = useTranslation("homepage");
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
    <div id="best-collections-mobile">
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
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
          </Carousel>
        </Row>
      </Container>
    </div>
  );
}

export default BestCollections;