import React from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/CommonDesktop'

import MainSlider from 'containers/notFound/main-slider/Desktop'

function NotFound (){
  const { t } = useTranslation("notfound");
  console.log('desktop')
  return (
    <Layout header="black" page={t("title")} footer={true}>
      <div id="page-not-found">
        <MainSlider/>
      </div>
    </Layout>
  )
}

export default withRouter(NotFound)