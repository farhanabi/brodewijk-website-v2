import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import axios from 'axios';
import Layout from 'layout/CommonDesktop'
import FilterBar from 'containers/customize/filter-bar/desktop'

function Customize (){
  const { t } = useTranslation("customize");

  const [price, setPrice] = useState(0)
  const [listFabric, setListFabric] = useState([])
  const [fabric, setFabric] = useState({})
  const [fabricPrice, setFabricPrice] = useState(0)
  const [listFeature, setListFeature] = useState([])
  const [feature, setFeature] = useState({})
  
  function fetchDataFabric() {
    const url = `${process.env.REACT_APP_BASE_API_URL}/customer/api/fabric/suit`
    axios
      .get(url)
      .then(res => {
        const listFabric = res.data.data.fabrics
        const initFabric = listFabric.filter(v => v.selected === true)[0]
        const initFabricColor = initFabric.colors.filter(v => v.selected === true)[0]
        const fabric = { name: initFabric.name, color: initFabricColor.name}
        setListFabric(listFabric)
        setFabric(fabric)
        setFabricPrice(initFabric.type.base_price)
        setPrice(initFabric.type.base_price)
      })
      .catch(err => console.log(err))
  }

  function fetchDataFeatures() {
    const url = `${process.env.REACT_APP_BASE_API_URL}/customer/api/feature/suit`
    axios
      .get(url)
      .then(res => {
        const listFeature = res.data.data.features 
        setListFeature(listFeature)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchDataFabric()
    fetchDataFeatures()
  }, [])

  return (
    <Layout header="white" page={t("title")} footer={false}>
      <div id="page-customize">
        <Container fluid>
          <Row>
            <Col md={4}>
              <FilterBar 
                setPrice={setPrice} setFabricPrice={setFabricPrice}
                listFabric={listFabric} fabric={fabric} setFabric={setFabric} 
                listFeature={listFeature} feature={feature} setFeature={setFeature}
              />
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