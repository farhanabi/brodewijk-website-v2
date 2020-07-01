import React, { useEffect } from 'react'
import Layout from 'layout/Common'
import { withRouter } from 'react-router-dom'
import MainSlider from 'containers/home/main-slider/Desktop'

function Home (){
  return (
    <Layout>
      <div id="page-home">
        <MainSlider/>
      </div>
    </Layout>
  )
}

export default withRouter(Home)