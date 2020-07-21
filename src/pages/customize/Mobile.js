import React from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/CommonMobile'

function Customize (){
  const { t } = useTranslation("customize");
  return (
    <Layout header="white" page={t("title")} footer={false}>
      <div id="page-customize">
        live preview
      </div>
    </Layout>
  )
}

export default withRouter(Customize)