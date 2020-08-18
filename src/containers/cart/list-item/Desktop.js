import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Row, Col } from 'reactstrap';
import Loading from 'components/Loading';

const suitExample = require('assets/images/suit-example.svg')
const pantsExample = require('assets/images/pants-example.svg')

function ListItemDesktop (props){
  const { t } = useTranslation("cart");

  return (
    <div id="list-item-section-desktop">

      {/* category condition SUIT */}
      <div className="category">
        <h5 className="title">{t("suit")}</h5>
        {/* iterate item */}
        <div className="wrapper-item">
          <Row className="row-item">
            <Col>
              <Row className="wrapper-btn">
                <Col>
                  <Button className="btn-outline-black">{t("delete")}</Button>
                  <Button className="btn-outline-black">{t("edit")}</Button>
                  <Button className={`btn-outline-black measured`}>{t("measured")}</Button>
                </Col>
              </Row>
              <Row className="wrapper-info">
                <Col md={4} style={{ textAlign: 'center' }}>
                  <img src={suitExample} className="item-img" />
                </Col>
                <Col md={8}>
                  <p className="item-title">{t("custom-suit-details")}</p>
                  <p className="item-desc">Hagebridge Wool Navy Blue, Bermbeg Navy Blue, Unconstructed, Standard, Notch Slim, Welted, Four Buttons Double Breasted, Pocket Flap Slanted, No Vents.</p>
                  <p className="item-price">Rp 1.450.000</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>

      {/* category condition PANTS */}
      <div className="category">
        <h5 className="title">{t("pants")}</h5>
        {/* iterate item */}
        <div className="wrapper-item">
          <Row className="row-item">
            <Col>
              <Row className="wrapper-btn">
                <Col>
                  <Button className="btn-outline-black">{t("delete")}</Button>
                  <Button className="btn-outline-black">{t("edit")}</Button>
                  <Button className={`btn-outline-black measured`}>{t("measured")}</Button>
                </Col>
              </Row>
              <Row className="wrapper-info">
                <Col md={4} style={{ textAlign: 'center' }}>
                  <img src={pantsExample} className="item-img" />
                </Col>
                <Col md={8}>
                  <p className="item-title">{t("custom-pants-details")}</p>
                  <p className="item-desc">Hagebridge Wool Navy Blue, Bermbeg Navy Blue, Unconstructed, Standard, Notch Slim, Welted, Four Buttons Double Breasted, Pocket Flap Slanted, No Vents.</p>
                  <p className="item-price">Rp 1.450.000</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>

    </div>
  );
}

export default ListItemDesktop;
