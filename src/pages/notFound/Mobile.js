import React, {useEffect} from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/CommonMobile'

import MainSlider from 'containers/notFound/main-slider/Mobile'

function BookAppointment (){
  const { t } = useTranslation("notfound");
  return (
    <Layout page={t("title")} footer={true}>
      <div id="page-not-found">
        <MainSlider/>
      </div>
    </Layout>
  )
}

export default withRouter(BookAppointment)