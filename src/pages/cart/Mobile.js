import React from 'react';
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/CommonMobile';
import ListItemMobile from 'containers/cart/list-item/Mobile';
import SummaryMobile from 'containers/cart/summary/Mobile';

function Cart (){
  const { t } = useTranslation("cart");

  return (
    <Layout header="white" page={t("title")} footer={false}>
      <div id="page-cart">
        <ListItemMobile/>
        <SummaryMobile/>
      </div>
    </Layout>
  );
}

export default withRouter(Cart)