import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, Button, Container } from 'reactstrap';

const items = [
  {
    src: require('assets/images/carousel-1-desktop.jpg'),
    altText: 'Slide 1',
    contain: {
      title: "Create Your Own Formal Wear",
      subtitle: "Using our customization feature, you can express yourself by creating your own Suit, Shirt, and Pants!",
      button: [
        { label: "CUSTOMIZE", link: "/customize", icon: "" },
        { label: "CONSULT NOW", link: "/contact", icon: "fab fa-whatsapp" }
      ]
    }
  },
];

const MainSlider = (props) => {
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

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        {item.contain ? (
          <div className="section-absolute">
            <Container>
              <div className="item-text">
                {item.contain.title ? <h2 className="title">{item.contain.title}</h2> : null}
                {item.contain.subtitle ? <p className="subtitle">{item.contain.subtitle}</p> : null }
                {item.contain.button ? (
                <div className="wrapper-btn">
                  {item.contain.button.map((v, k) => (
                    <Button size="sm" key={k} className="btn-outline-white all">
                      {v.icon.length > 0 ? <i className={v.icon} /> : null }
                      &nbsp;{v.label}
                    </Button>
                  ))}
                </div>
                ) : null}
              </div>
            </Container>
          </div>
        ) : null}
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <div id="home-slider-section">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default MainSlider;