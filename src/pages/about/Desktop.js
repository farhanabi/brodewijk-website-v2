import React from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/CommonDesktop'

import MainSlider from 'containers/about/main-slider/Desktop'
import AboutUs from 'containers/about/aboutUs'

function About (){
  const { t } = useTranslation("aboutus");
  
  return (
    <Layout header="black" page={t("title")} footer={true}>
      <div id="page-about">
        <MainSlider/>
        <AboutUs/>
      </div>
    </Layout>
  )
}

export default withRouter(About)