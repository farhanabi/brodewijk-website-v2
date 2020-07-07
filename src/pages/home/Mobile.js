import React from 'react'
import { withRouter } from 'react-router-dom'

import Layout from 'layout/CommonMobile'

import MainSlider from 'containers/home/main-slider/Desktop'
import HowItWorks from 'containers/home/HowItWorks'
import Features from 'containers/home/features/Desktop'
import BookAppointment from 'containers/home/book-appointment/Desktop'
import SocialProof from 'containers/home/social-proof/Desktop'
import BestCollections from 'containers/home/best-collections/Desktop'
import Testimoni from 'containers/home/testimoni/Desktop'
import Contact from 'containers/home/Contact'

function Home (){
  console.log('mobile')
  return (
    <Layout>
      <div id="page-home">
        <MainSlider/>
        <HowItWorks/>
        <Features/>
        <BookAppointment/>
        <SocialProof/>
        <BestCollections/>
        <Testimoni/>
        <Contact/>
      </div>
    </Layout>
  )
}

export default withRouter(Home)