import React from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/CommonMobile'

import MainSlider from 'containers/priceList/main-slider/Mobile'
import BespokeService from 'containers/priceList/BespokeService'

function Help (){
  const { t } = useTranslation("pricelist");
  
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