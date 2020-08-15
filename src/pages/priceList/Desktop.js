import React from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/CommonDesktop'

import MainSlider from 'containers/priceList/main-slider/Desktop'
import BespokeService from 'containers/priceList/BespokeService'

function Help (){
  const { t } = useTranslation("help");
  
  return (
    <Layout header="white" page={t("title")} footer={true}>
      <div id="page-price-list">
        <MainSlider/>
        <BespokeService/>
      </div>
    </Layout>
  )
}

export default withRouter(Help)