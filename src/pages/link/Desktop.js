import React from 'react'
import { withRouter } from 'react-router-dom'

import Layout from 'layout/CommonDesktop'

import MainSlider from 'containers/link/main-slider/Desktop'

function Link (){
  return (
    <Layout header="black" page="Link">
      <div id="page-link">
        <MainSlider/>
      </div>
    </Layout>
  )
}

export default withRouter(Link)