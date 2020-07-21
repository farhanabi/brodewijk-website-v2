import React, {useEffect} from 'react'
import { withRouter } from 'react-router-dom'

import Layout from 'layout/CommonMobile'

import MainSlider from 'containers/bookAppointment/main-slider/Mobile'
import HowItWorks from 'containers/bookAppointment/HowItWorks'
import Testimoni from 'containers/bookAppointment/Testimoni'
import Contact from 'containers/bookAppointment/Contact'

function BookAppointment (){
  return (
    <Layout header="black" page="Book Appointment" footer={true}>
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