import React, { useState } from 'react'
import { Container, Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap'
import faker from 'faker'
import { useTranslation } from 'react-i18next'

const imgNabiel = require('assets/images/person-nabiel.jpg')
const imgMangaramot = require('assets/images/person-mangaramot.jpg')
const imgNaufal = require('assets/images/person-naufal.jpg')
const imgRusdi = require('assets/images/person-rusdi.jpg')

function Testimoni() {
  const { t } = useTranslation("homepage");
  const data = [
    {
      id: 1,
      person: {
        name: t("testimoni-section.sliders.slider-1.person"),
        job: t("testimoni-section.sliders.slider-1.job"),
        photo: imgNabiel,
      },
      text: t("testimoni-section.sliders.slider-1.quote")
    },
    {
      id: 2,
      person: {
        name: t("testimoni-section.sliders.slider-2.person"),
        job: t("testimoni-section.sliders.slider-2.job"),
        photo: imgMangaramot,
      },
      text: t("testimoni-section.sliders.slider-2.quote")
    },
    {
      id: 3,
      person: {
        name: t("testimoni-section.sliders.slider-3.person"),
        job: t("testimoni-section.sliders.slider-3.job"),
        photo: imgNaufal,
      },
      text: t("testimoni-section.sliders.slider-3.quote")
    },
    {
      id: 3,
      person: {
        name: t("testimoni-section.sliders.slider-4.person"),
        job: t("testimoni-section.sliders.slider-4.job"),
        photo: imgRusdi,
      },
      text: t("testimoni-section.sliders.slider-4.quote")
    }
  ]

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = data.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
      >
        <div className="testimoni-item">
          <p className="item-text">"{item.text}"</p>
          <center>
            <img src={item.person.photo} className="item-photo"/>
            <p className="item-person">{item.person.name}, {item.person.job}</p>
          </center>
        </div>
      </CarouselItem>
    );
  });

  return(
    <div id="testimoni-section">
      <Container>
        <h5 className="title-testimoni">{t("testimoni-section.title")}</h5>
        <Row className="data-list justify-content-center">
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
          >
            <CarouselIndicators items={data} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        </Row>
      </Container>
    </div>
  )
}

export default Testimoni;