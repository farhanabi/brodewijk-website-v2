import React from 'react'
import { withRouter } from 'react-router-dom'

import Layout from 'layout/CommonDesktop'

import MainSlider from 'containers/notFound/main-slider/Desktop'

function BookAppointment (){
  console.log('desktop')
  return (
    <Layout>
      <div id="page-not-found">
        <MainSlider/>
      </div>
    </Layout>
  )
}

export default withRouter(BookAppointment)