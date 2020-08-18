import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Row, Col } from 'reactstrap';
import Loading from 'components/Loading';

const suitExample = require('assets/images/suit-example.svg')
const pantsExample = require('assets/images/pants-example.svg')

function ListItemMobile (props){
  const { t } = useTranslation("cart");

  return (
    <div id="list-item-section-mobile">
      <div className="wrapper-scroll">
      
        {/* category condition SUIT */}
        <div className="category">
          <h5 className="title">{t("suit")}</h5>
          {/* iterate item */}
          <div className="wrapper-item">
            <Row className="row-item">
              <Col>
                <Row className="wrapper-info">
                  <Col xs={4}>
                    <img src={suitExample} className="item-img" />
                  </Col>
                  <Col xs={8}>
                    <p className="item-title">{t("suit-details")}</p>
                    <p className="item-desc">Hagebridge Wool Navy Blue, Bermbeg Navy Blue, Unconstructed, Standard, Notch Slim, Welted, Four Buttons Double Breasted, Pocket Flap Slanted, No Vents.</p>
                    <p className="item-price">Rp 1.450.000</p>
                  </Col>
                </Row>
                <Row className="wrapper-btn">
                  <Col xs={5} className="pl-0">
                    <Button className={`btn-outline-black measured`}>{t("measured")}</Button>
                  </Col>
                  <Col xs={7} className="pr-0">
                    <Button className="btn-outline-black">{t("delete")}</Button>
                    <Button className="btn-outline-black">{t("edit")}</Button>
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
                <Row className="wrapper-info">
                  <Col xs={4}>
                    <img src={pantsExample} className="item-img" />
                  </Col>
                  <Col xs={8}>
                    <p className="item-title">{t("pants-details")}</p>
                    <p className="item-desc">Hagebridge Wool Navy Blue, Bermbeg Navy Blue, Unconstructed, Standard, Notch Slim, Welted, Four Buttons Double Breasted, Pocket Flap Slanted, No Vents.</p>
                    <p className="item-price">Rp 1.450.000</p>
                  </Col>
                </Row>
                <Row className="wrapper-btn">
                  <Col xs={5} className="pl-0">
                    <Button className={`btn-outline-black measured`}>{t("measured")}</Button>
                  </Col>
                  <Col xs={7} className="pr-0">
                    <Button className="btn-outline-black">{t("delete")}</Button>
                    <Button className="btn-outline-black">{t("edit")}</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ListItemMobile;
