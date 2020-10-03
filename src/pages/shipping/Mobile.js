import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'

import Layout from 'layout/CommonMobile';
import FormMobile from 'containers/shipping/form/Mobile';
import SummaryMobile from 'containers/shipping/summary/Mobile';

function Shipping (props){
  const { t } = useTranslation("shipping");

  return (
    <Layout header="white" page={`PROFILE & SHIPPING`} footer={false}>
      <div id="page-shipping">
        <FormMobile />
        <SummaryMobile totalPrice={0} />
      </div>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
  user: state.auth.user
})

const mapDispatchToProps = () => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shipping))