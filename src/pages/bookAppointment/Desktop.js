import React from 'react'
import { withRouter } from 'react-router-dom'

import Layout from 'layout/CommonDesktop'

import MainSlider from 'containers/bookAppointment/main-slider/Desktop'
import HowItWorks from 'containers/bookAppointment/HowItWorks'
import Testimoni from 'containers/bookAppointment/Testimoni'
import Contact from 'containers/bookAppointment/Contact'

function BookAppointment (){
  console.log('desktop')
  return (
    <Layout>
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