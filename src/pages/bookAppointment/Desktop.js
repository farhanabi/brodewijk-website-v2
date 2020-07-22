import React from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/CommonDesktop'

import MainSlider from 'containers/bookAppointment/main-slider/Desktop'
import HowItWorks from 'containers/bookAppointment/HowItWorks'
import Testimoni from 'containers/bookAppointment/Testimoni'
import Contact from 'containers/bookAppointment/Contact'

function BookAppointment (){
  const { t } = useTranslation("bookappointment");
  return (
    <Layout header="black" page={t("title")} footer={true}>
      <div id="page-home">
        <MainSlider/>
        <HowItWorks/>
        <Testimoni/>
        <Contact/>
      </div>
    </Layout>
  )
}

export default withRouter(BookAppointment)