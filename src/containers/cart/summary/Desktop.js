import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Row, Col, Modal, ModalBody } from 'reactstrap';
import Loading from 'components/Loading';
import CheckoutConfirmModal from '../CheckoutConfirmModal';

function SummaryDesktop (props){
  const { t } = useTranslation("cart");

  const [popupCheckout, setPopupCheckout] = useState(false);

  const togglePopupCheckout = () => setPopupCheckout(!popupCheckout)

  const submit = () => {
    console.log('submit')
  }

  return (
    <div id="summary-section-desktop">
      <h5 className="title">{t("summary")}</h5>
      <Row className="row-item">
        <Col md={6}>
          <p className="text">Custom Suit</p>
        </Col>
        <Col md={6}>
          <p className="text value">Rp 1.450.000</p>
        </Col>
      </Row>
      <p className="text">{t("shipping")} (<a href="#" className="enter-location">{t("enter-location")}</a>)</p>
      <hr/>
      <Row className="row-total-price">
        <Col md={3}>
          <p className="total-price">TOTAL</p>
        </Col>
        <Col md={9}>
          <p className="total-price value">Rp 1.450.000</p>
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