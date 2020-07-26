import React from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/CommonMobile'
import FilterBar from 'containers/customize/filter-bar/mobile';

function Customize (){
  const { t } = useTranslation("customize");
  return (
    <Layout header="white" page={t("title")} footer={false}>
      <div id="page-customize">
        <FilterBar/>
      </div>
    </Layout>
  )
}

export default withRouter(Customize)