import React from 'react'
import Layout from 'layout/Common'
import { withRouter } from 'react-router-dom'
import MainSlider from 'containers/home/main-slider/Desktop'
import HowItWorks from 'containers/home/how-it-works/Desktop'
import Features from 'containers/home/features/Desktop'
import BookAppointment from 'containers/home/book-appointment/Desktop'
import SocialProof from 'containers/home/social-proof/Desktop'
import BestCollections from 'containers/home/best-collections/Desktop'
import Testimoni from 'containers/home/testimoni/Desktop'

function Home (){
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
      </div>
    </Layout>
  )
}

export default withRouter(Home)