import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Row, Col, Modal, ModalBody } from 'reactstrap';
import { currencyFormatter } from 'utils/number';
import Measurement from '../measurement/Desktop';

const suitExample = require('assets/images/suit-example.svg')
const pantsExample = require('assets/images/pants-example.svg')

function ListItemDesktop ({ items }){
  const { t } = useTranslation("cart");
  const [popupMeasureSuit, toggleMeasureSuit] = useState(false) // suit, pants, vest, shirt
  const [idSuit, setIdSuit] = useState(null)

  const showMeasureSuit = (id) => {
    toggleMeasureSuit(!popupMeasureSuit)
    console.log(id, popupMeasureSuit)
    setIdSuit(id)
  }

  console.log(items)

  return (
    <div id="list-item-section-desktop">

      {/* category condition SUIT */}
      {items.suit && items.suit.length > 0 ? (
        <div className="category">
          <h5 className="title">{t("suit")}</h5>
          {/* iterate item */}
          {items.suit.map((v, k) => (
            <div className="wrapper-item" key={k}>
              <Row className="row-item">
                <Col>
                  <Row className="wrapper-btn">
                    <Col>
                      {/* <Button className="btn-outline-black">{t("delete")}</Button>
                      <Button className="btn-outline-black">{t("edit")}</Button> */}
                      <Button className={`btn-outline-black`} onClick={() => showMeasureSuit(v.id)}>{t("measure")}</Button>
                    </Col>
                  </Row>
                  <Row className="wrapper-info">
                    <Col md={4} style={{ textAlign: 'center' }}>
                      <img src={v.image} alt="suit" className="item-img" />
                    </Col>
                    <Col md={8}>
                      <p className="item-title">{t("custom-suit-details")}</p>
                      <p className="item-desc">{v.description}</p>
                      <p className="item-price">Rp {currencyFormatter(v.price)}</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          ))}
          <Modal toggle={() => showMeasureSuit(idSuit)} isOpen={popupMeasureSuit} size="lg">
            <ModalBody>
              <Measurement toggle={() => showMeasureSuit(idSuit)}/>
            </ModalBody>
          </Modal>
        </div>
      ) : null}

      {/* category condition PANTS */}
      {items.pants && items.pants.length > 0 ? (
        <div className="category">
          <h5 className="title">{t("pants")}</h5>
          {/* iterate item */}
          {items.pants.map((v, k) => (
            <div className="wrapper-item" key={k}>
              <Row className="row-item">
                <Col>
                  <Row className="wrapper-btn">
                    <Col>
                      {/* <Button className="btn-outline-black">{t("delete")}</Button>
                      <Button className="btn-outline-black">{t("edit")}</Button> */}
                      <Button className={`btn-outline-black`}>{t("measure")}</Button>
                    </Col>
                  </Row>
                  <Row className="wrapper-info">
                    <Col md={4} style={{ textAlign: 'center' }}>
                      <img src={v.image} alt="pants" className="item-img" />
                    </Col>
                    <Col md={8}>
                      <p className="item-title">{t("custom-pants-details")}</p>
                      <p className="item-desc">{v.description}</p>
                      <p className="item-price">Rp {currencyFormatter(v.price)}</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      ) : null}

      {/* category condition SHIRT */}
      {items.shirt && items.shirt.length > 0 ? (
        <div className="category">
          <h5 className="title">{t("shirt")}</h5>
          {/* iterate item */}
          {items.shirt.map((v, k) => (
            <div className="wrapper-item" key={k}>
              <Row className="row-item">
                <Col>
                  <Row className="wrapper-btn">
                    <Col>
                      {/* <Button className="btn-outline-black">{t("delete")}</Button>
                      <Button className="btn-outline-black">{t("edit")}</Button> */}
                      <Button className={`btn-outline-black`}>{t("measure")}</Button>
                    </Col>
                  </Row>
                  <Row className="wrapper-info">
                    <Col md={4} style={{ textAlign: 'center' }}>
                      <img src={v.image} alt={"shirt"} className="item-img" />
                    </Col>
                    <Col md={8}>
                      <p className="item-title">{t("custom-shirt-details")}</p>
                      <p className="item-desc">{v.description}</p>
                      <p className="item-price">Rp {currencyFormatter(v.price)}</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      ) : null}

      {/* category condition VEST */}
      {items.vest && items.vest.length > 0 ? (
        <div className="category">
          <h5 className="title">{t("vest")}</h5>
          {/* iterate item */}
          {items.vest.map((v, k) => (
            <div className="wrapper-item" key={k}>
              <Row className="row-item">
                <Col>
                  <Row className="wrapper-btn">
                    <Col>
                      {/* <Button className="btn-outline-black">{t("delete")}</Button>
                      <Button className="btn-outline-black">{t("edit")}</Button> */}
                      <Button className={`btn-outline-black`}>{t("measure")}</Button>
                    </Col>
                  </Row>
                  <Row className="wrapper-info">
                    <Col md={4} style={{ textAlign: 'center' }}>
                      <img src={v.image} alt="vest" className="item-img" />
                    </Col>
                    <Col md={8}>
                      <p className="item-title">{t("custom-vest-details")}</p>
                      <p className="item-desc">{v.description}</p>
                      <p className="item-price">Rp {currencyFormatter(v.price)}</p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      ) : null}

    </div>
  );
}

export default ListItemDesktop;
