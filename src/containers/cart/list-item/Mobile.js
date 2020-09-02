import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import Loading from 'components/Loading';
import { currencyFormatter } from 'utils/number';

const suitExample = require('assets/images/suit-example.svg')
const pantsExample = require('assets/images/pants-example.svg')

function ListItemMobile ({ items }){
  const { t } = useTranslation("cart");

  return (
    <div id="list-item-section-mobile">
      <div className="wrapper-scroll">
      
        {/* category condition SUIT */}
        {items.suit && items.suit.length > 0 ? (
          <div className="category">
            <h5 className="title">{t("suit")}</h5>
            {/* iterate item */}
            {items.suit.map((v, k) => (
              <div className="wrapper-item">
                <Row className="row-item">
                  <Col>
                    <Row className="wrapper-info">
                      <Col xs={4}>
                        <img src={v.image} alt="suit" className="item-img" />
                      </Col>
                      <Col xs={8}>
                        <p className="item-title">{t("suit-details")}</p>
                        <p className="item-desc">{v.description}</p>
                        <p className="item-price">Rp {currencyFormatter(v.price)}</p>
                      </Col>
                    </Row>
                    <Row className="wrapper-btn">
                      <Col xs={5} className="pl-0">
                        <Link to={`/measure/${v.id}`}>
                          <Button className={`btn-outline-black`}>{t("measure")}</Button>
                        </Link>
                      </Col>
                      {/* <Col xs={7} className="pr-0">
                        <Button className="btn-outline-black">{t("delete")}</Button>
                        <Button className="btn-outline-black">{t("edit")}</Button>
                      </Col> */}
                    </Row>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        ) : null}

        {/* category condition PANTS */}
        {items.pants && items.pants.length > 0 ? (
          <div className="category">
            <h5 className="title">{t("pants")}</h5>
            {/* iterate item */}
            {items.pants.map((v, k) => (
              <div className="wrapper-item">
                <Row className="row-item">
                  <Col>
                    <Row className="wrapper-info">
                      <Col xs={4}>
                        <img src={v.image} alt="pants" className="item-img" />
                      </Col>
                      <Col xs={8}>
                        <p className="item-title">{t("pants-details")}</p>
                        <p className="item-desc">{v.description}</p>
                        <p className="item-price">Rp {currencyFormatter(v.price)}</p>
                      </Col>
                    </Row>
                    <Row className="wrapper-btn">
                      <Col xs={5} className="pl-0">
                        <Button className={`btn-outline-black`}>{t("measure")}</Button>
                      </Col>
                      {/* <Col xs={7} className="pr-0">
                        <Button className="btn-outline-black">{t("delete")}</Button>
                        <Button className="btn-outline-black">{t("edit")}</Button>
                      </Col> */}
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
              <div className="wrapper-item">
                <Row className="row-item">
                  <Col>
                    <Row className="wrapper-info">
                      <Col xs={4}>
                        <img src={v.image} alt="shirt" className="item-img" />
                      </Col>
                      <Col xs={8}>
                        <p className="item-title">{t("shirt-details")}</p>
                        <p className="item-desc">{v.description}</p>
                        <p className="item-price">Rp {currencyFormatter(v.price)}</p>
                      </Col>
                    </Row>
                    <Row className="wrapper-btn">
                      <Col xs={5} className="pl-0">
                        <Button className={`btn-outline-black`}>{t("measure")}</Button>
                      </Col>
                      {/* <Col xs={7} className="pr-0">
                        <Button className="btn-outline-black">{t("delete")}</Button>
                        <Button className="btn-outline-black">{t("edit")}</Button>
                      </Col> */}
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
              <div className="wrapper-item">
                <Row className="row-item">
                  <Col>
                    <Row className="wrapper-info">
                      <Col xs={4}>
                        <img src={v.image} alt="vest" className="item-img" />
                      </Col>
                      <Col xs={8}>
                        <p className="item-title">{t("vest-details")}</p>
                        <p className="item-desc">{v.description}</p>
                        <p className="item-price">Rp {currencyFormatter(v.price)}</p>
                      </Col>
                    </Row>
                    <Row className="wrapper-btn">
                      <Col xs={5} className="pl-0">
                        <Button className={`btn-outline-black`}>{t("measure")}</Button>
                      </Col>
                      {/* <Col xs={7} className="pr-0">
                        <Button className="btn-outline-black">{t("delete")}</Button>
                        <Button className="btn-outline-black">{t("edit")}</Button>
                      </Col> */}
                    </Row>
                  </Col>
                </Row>
              </div>
            ))}
          </div>
        ) : null}

      </div>
    </div>
  );
}

export default ListItemMobile;
