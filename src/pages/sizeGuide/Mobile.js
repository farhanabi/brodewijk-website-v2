import React from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/CommonMobile'

import MainSlider from 'containers/sizeGuide/main-slider/Mobile'
import SizeChart from 'containers/sizeGuide/SizeChart'
import BookAppointment from 'containers/sizeGuide/BookAppointment'
import Download from 'containers/sizeGuide/Download'

function SizeGuide (){
  const { t } = useTranslation("sizeguide");
  
  return (
    <Layout header="black" page={t("title")} footer={true}>
      <div id="page-size-guide">
        <MainSlider/>
        <SizeChart/>
        <Download/>
        <BookAppointment/>
      </div>
    </Layout>
  )
}

export default withRouter(SizeGuide)