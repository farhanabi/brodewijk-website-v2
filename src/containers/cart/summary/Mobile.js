import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Row, Col, Modal, ModalBody } from 'reactstrap';
import Loading from 'components/Loading';
import CheckoutConfirmModal from '../CheckoutConfirmModal';

function SummaryMobile (props){
  const { t } = useTranslation("cart");

  const [popupCheckout, setPopupCheckout] = useState(false);

  const togglePopupCheckout = () => setPopupCheckout(!popupCheckout)

  const submit = () => {
    console.log('submit')
  }

  return (
    <div id="summary-section-mobile">
      <Row>
        <Col xs={6}>
          <p className="text">TOTAL</p>
          <p className="text price">Rp 1.450.000</p>
        </Col>
        <Col xs={6}>
          <Button className="btn-checkout" onClick={togglePopupCheckout}>Checkout</Button>
        </Col>
        <Modal isOpen={popupCheckout} toggle={togglePopupCheckout} className="checkout-confirm-modal">
          <ModalBody>
            <CheckoutConfirmModal toggle={togglePopupCheckout} submit={submit} />
          </ModalBody>
        </Modal>
      </Row>
    </div>
  );
}

export default SummaryMobile;