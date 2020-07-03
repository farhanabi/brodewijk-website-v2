import React from 'react'
import Layout from 'layout/Common'
import { withRouter } from 'react-router-dom'
import MainSlider from 'containers/home/main-slider/Desktop'
import HowItWorks from 'containers/home/how-it-works/Desktop'
import Features from 'containers/home/features/Desktop'

function Home (){
  return (
    <Layout>
      <div id="page-home">
        <MainSlider/>
        <HowItWorks/>
        <Features/>
      </div>
    </Layout>
  )
}

export default withRouter(Home)