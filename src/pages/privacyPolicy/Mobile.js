import React from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/CommonMobile'

import MainSlider from 'containers/privacyPolicy/main-slider/Mobile'
import PrivacyPolicySection from 'containers/privacyPolicy/PrivacyPolicy'

function PrivacyPolicy (){
  const { t } = useTranslation("privacypolicy");
  
  return (
    <Layout header="black" page={t("title")} footer={true}>
      <div id="page-privacy-policy">
        <MainSlider/>
        <PrivacyPolicySection/>
      </div>
    </Layout>
  )
}

export default withRouter(PrivacyPolicy)