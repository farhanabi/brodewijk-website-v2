import React, { useEffect } from 'react'
import Layout from 'layout/Common'
import HighlightsPanel from 'containers/Home/HighlightsPanel'
import HeroShotPanel from 'containers/Home/HeroShotPanel'
import { withRouter } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    document.title = "Home | FD Works"
  }, [])

  return (
    <Layout>
      <div id="page-home">
        <HeroShotPanel/>
        <HighlightsPanel/>
      </div>
    </Layout>
  )
}

export default withRouter(Home)