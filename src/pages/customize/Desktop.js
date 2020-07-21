import React from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { useTranslation } from 'react-i18next'

import Layout from 'layout/CommonDesktop'
import FilterBar from 'containers/customize/FilterBar/Desktop'

function Customize (){
  const { t } = useTranslation("customize");
  return (
    <Layout header="white" page={t("title")} footer={false}>
      <div id="page-customize">
        <Container fluid>
          <Row>
            <Col md={4}>
              <FilterBar/>
            </Col>
            <Col md={5}>
              live preview
            </Col>
            <Col md={3}>
              detail box
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default withRouter(Customize)