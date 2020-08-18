import React from 'react';
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/CommonDesktop';
import SummaryDesktop from 'containers/cart/summary/Desktop';
import ListItemDesktop from 'containers/cart/list-item/Desktop';

function Cart (){
  const { t } = useTranslation("cart");

  return (
    <Layout header="white" page={t("title")} footer={false}>
      <div id="page-cart">
        <Container>
          <h2 className="title">{t("title")}</h2>
          <Row>
            <Col md={8} className="col-item">
              <ListItemDesktop/>
            </Col>
            <Col md={4} className="col-summary">
              <SummaryDesktop/>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  );
}

export default withRouter(Cart)