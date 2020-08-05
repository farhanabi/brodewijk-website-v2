import React from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/CommonDesktop'

import MainSlider from 'containers/help/main-slider/Desktop'
import FAQ from 'containers/help/FAQ'

function Help (){
  const { t } = useTranslation("help");
  
  return (
    <Layout header="black" page={t("title")} footer={true}>
      <div id="page-faq">
        <MainSlider/>
        <FAQ/>
      </div>
    </Layout>
  )
}

export default withRouter(Help)