import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Row, Col, Modal, ModalBody } from 'reactstrap';
import CheckoutConfirmModal from '../CheckoutConfirmModal';
import { currencyFormatter } from 'utils/number';

function SummaryDesktop ({ items, totalPrice }){
  const { t } = useTranslation("cart");

  const [popupCheckout, setPopupCheckout] = useState(false);

  const togglePopupCheckout = () => setPopupCheckout(!popupCheckout)

  const submit = () => {
    console.log('submit')
  }

  return (
    <div id="summary-section-desktop">
      <h5 className="title">{t("summary")}</h5>
      {items.length > 0 ? (
        items.map((v, k) => (
          <Row className="row-item" key={k}>
            <Col md={6}>
              <p className="text">{v.name}</p>
            </Col>
            <Col md={6}>
              <p className="text value">Rp {currencyFormatter(v.price)}</p>
            </Col>
          </Row>
        ))
      ) : null }
      <Row className="row-item">
        <Col md={6}>
          <p className="text">{t("shipping")}</p>
        </Col>
        <Col md={6}>
          <p className="text value">{t("shipping-fee")}</p>
        </Col>
      </Row>
      <hr/>
      <Row className="row-total-price">
        <Col md={3}>
          <p className="total-price">TOTAL</p>
        </Col>
        <Col md={9}>
          <p className="total-price value">Rp {currencyFormatter(totalPrice)}</p>
        </Col>
      </Row>
      <div className="btn-wrapper">
        <Button className="btn-checkout" onClick={togglePopupCheckout}>Checkout</Button>
      </div>
      <Modal isOpen={popupCheckout} toggle={togglePopupCheckout} className="checkout-confirm-modal">
        <ModalBody>
          <CheckoutConfirmModal toggle={togglePopupCheckout} submit={submit} />
        </ModalBody>
      </Modal>
    </div>
  );
}

export default SummaryDesktop;