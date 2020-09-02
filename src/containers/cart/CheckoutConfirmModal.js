import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { useTranslation } from 'react-i18next';

function CheckoutConfirmModal (props){
  const { t } = useTranslation("cart")
  return (
    <div className="wrapper-checkout-confirm">
      <Container>
        <Row>
          <Col>
            <h3 className="text">{t("checkout.text")}</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <Button className="btn-outline-black all btn-back" onClick={props.toggle}>{t("checkout.btn-back")}</Button>
          </Col>
          <Col xs={6}>
            <Button className="btn-checkout" onClick={props.submit}>{t("checkout.btn-checkout")}</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default CheckoutConfirmModal;