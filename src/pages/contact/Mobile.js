import React from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/CommonMobile'

import MainSlider from 'containers/contact/main-slider/Mobile'

function Contact (){
  const { t } = useTranslation("contact");
  
  return (
    <Layout header="black" page={t("title")} footer={true}>
      <div id="page-contact">
        <MainSlider/>
      </div>
    </Layout>
  )
}

export default withRouter(Contact)