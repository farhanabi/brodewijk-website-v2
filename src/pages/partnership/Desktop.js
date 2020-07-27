import React from 'react'
import { withRouter } from 'react-router-dom'

import Layout from 'layout/CommonDesktop'

import MainSlider from 'containers/partnership/main-slider/Desktop'
import HowItWorks from 'containers/partnership/HowItWorks'
import Testimoni from 'containers/partnership/Testimoni'
import Contact from 'containers/partnership/Contact'

function Partnership (){
  console.log('desktop')
  return (
    <Layout>
      <div id="page-partnership">
        <MainSlider/>
        <HowItWorks/>
        <Testimoni/>
        <Contact/>
      </div>
    </Layout>
  )
}

export default withRouter(Partnership)