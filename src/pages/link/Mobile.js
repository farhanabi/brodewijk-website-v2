import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container } from 'reactstrap'

import Layout from 'layout/CommonMobile'

import MainSlider from 'containers/link/main-slider/Mobile'

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