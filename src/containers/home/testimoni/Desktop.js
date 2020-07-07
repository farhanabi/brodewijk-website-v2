import React, { useState } from 'react'
import { Container, Row, Col, Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap'
import faker from 'faker'

const data = [
  {
    id: faker.random.uuid(),
    person: {
      name: faker.name.firstName(),
      job: faker.name.jobTitle(),
      photo: faker.image.people(),
    },
    text: faker.lorem.sentences()
  },
  {
    id: faker.random.uuid(),
    person: {
      name: faker.name.firstName(),
      job: faker.name.jobTitle(),
      photo: faker.image.people(),
    },
    text: faker.lorem.sentences()
  },
  {
    id: faker.random.uuid(),
    person: {
      name: faker.name.firstName(),
      job: faker.name.jobTitle(),
      photo: faker.image.people(),
    },
    text: faker.lorem.sentences()
  },
  {
    id: faker.random.uuid(),
    person: {
      name: faker.name.firstName(),
      job: faker.name.jobTitle(),
      photo: faker.image.people(),
    },
    text: faker.lorem.sentences()
  },
]

function Testimoni() {
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
        <h5 className="title-testimoni">Why use our services?</h5>
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