import React from 'react'
import { withRouter } from 'react-router-dom'

import Layout from 'layout/CommonDesktop'

import MainSlider from 'containers/home/main-slider/Desktop'
import HowItWorks from 'containers/home/HowItWorks'
import Features from 'containers/home/Features'
import BookAppointment from 'containers/home/BookAppointment'
import SocialProof from 'containers/home/SocialProof'
import BestCollections from 'containers/home/best-collections/Desktop'
import Testimoni from 'containers/home/Testimoni'
import Contact from 'containers/home/Contact'

function Home (){
  return (
    <Layout header="black" page="Home" footer={true}>
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