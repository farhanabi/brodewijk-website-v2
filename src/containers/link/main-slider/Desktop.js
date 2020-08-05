import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl, Button, Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';

const MainSlider = (props) => {
  const { t } = useTranslation("link")
  const items = [
    {
      src: require('assets/images/carousel-1-link-mobile.jpg'),
      altText: 'Slide 1',
      contain: {
        title: t("main-slider-section.title"),
        subtitle: t("main-slider-section.subtitle"),
        button: [
          { label: t("main-slider-section.button-1"), link: "", icon: "" },
          { label: t("main-slider-section.button-2"), link: "", newtab: true, icon: "fab fa-whatsapp" },
          { label: t("main-slider-section.button-3"), link: "", newtab: true, icon: ""},
          { label: t("main-slider-section.button-4"), link: "", newtab: true, icon: ""},
          { label: t("main-slider-section.button-5"), link: "", newtab: true, icon: ""}
        ]
      }
    }
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
    <div id="desktop-link-slider-section">
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        {slides}

      </Carousel>
    </div>
  );
}

export default MainSlider;