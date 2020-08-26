import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'

import Layout from 'layout/CommonMobile';
import Measurement from 'containers/cart/measurement/Mobile';

function MeasureMobile (props){
  const { t } = useTranslation("measurement");

  return (
    <Layout header="white" page={t("title")} footer={false}>
      <Measurement/>
    </Layout>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
  user: state.auth.user
})

const mapDispatchToProps = () => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MeasureMobile))