import React, {useEffect} from 'react'
import { withRouter } from 'react-router-dom'

import Layout from 'layout/CommonMobile'

import MainSlider from 'containers/notFound/main-slider/Mobile'

function BookAppointment (){
  console.log('mobile')
  return (
    <Layout>
      <div id="page-not-found">
        <MainSlider/>
      </div>
    </Layout>
  )
}

export default withRouter(BookAppointment)