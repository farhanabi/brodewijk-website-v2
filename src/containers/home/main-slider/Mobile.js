import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, Button, Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const MainSlider = (props) => {
  const { t } = useTranslation("homepage")
  const items = [
    {
      src: require('assets/images/carousel-1-mobile.jpg'),
      altText: 'Slide 1',
      contain: {
        title: t("main-slider-section.slide-1.title"),
        subtitle: t("main-slider-section.slide-1.subtitle"),
        button: [
          { label: t("main-slider-section.slide-1.button-1"), link: "/customize", icon: "" },
          { label: t("main-slider-section.slide-1.button-2"), link: "https://api.whatsapp.com/send?phone=628156051373&text=Hi%20Brodewijk!%20I%20am%20interested%20to%20learn%20more%20about%20you", newtab: true, icon: "fab fa-whatsapp" }
        ]
      }
    },
    {
      src: require('assets/images/carousel-2-mobile.jpg'),
      altText: 'Slide 2',
      contain: {
        title: t("main-slider-section.slide-2.title"),
        subtitle: t("main-slider-section.slide-2.subtitle"),
        button: [
          { label: t("main-slider-section.slide-2.button-1"), link: "/customize", icon: "" },
        ]
      }
    },
  ];
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
                    <Button key={k} className="btn-outline-white all" href={v.link} target={v.newtab?`_blank`:``} rel={v.newtab?`noopener noreferrer`:``}>
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
    <div id="mobile-slider-section">
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