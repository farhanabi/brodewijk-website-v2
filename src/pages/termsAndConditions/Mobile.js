import React from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/CommonMobile'

import MainSlider from 'containers/termsAndConditions/main-slider/Mobile'
import TnC from 'containers/termsAndConditions/TnC'

function TermsAndConditions (){
  const { t } = useTranslation("termsandconditions");
  
  return (
    <Layout header="black" page={t("title")} footer={true}>
      <div id="page-tnc">
        <MainSlider/>
        <TnC/>
      </div>
    </Layout>
  )
}

export default withRouter(TermsAndConditions)