import React, { useEffect, useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { Container, Row, Col, Input } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'

import Layout from 'layout/CommonDesktop'
import FilterBar from 'containers/customize/filter-bar/desktop'
import DetailBox from 'containers/customize/DetailBox';
import LivePreviewDesktop from 'containers/customize/live-preview/Desktop';

import { getSuitFabrics } from 'services/fabric';
import { getSuitFeatures } from 'services/feature';
import { addToCart } from 'services/cart'

function Customize (props){
  const { t } = useTranslation("customize");

  const [price, setPrice] = useState(0)
  const [product, setProduct] = useState({})
  const [listFabric, setListFabric] = useState([])
  const [fabric, setFabric] = useState({})
  const [fabricPrice, setFabricPrice] = useState(0)

  const [listFeature, setListFeature] = useState([])
  const [featurePrice, setFeaturePrice] = useState(0)
  const [feature, setFeature] = useState(null)
  
  function fetchDataFabric() {
    getSuitFabrics()
      .then(data => {
        const initFabricColor = data.initFabric.colors.filter(v => v.selected === true)[0]
        const fabric = { 
          id: data.initFabric.id, 
          name: data.initFabric.name, 
          colorId: initFabricColor.id, 
          colorName: initFabricColor.name, 
          path: initFabricColor.path 
        }

        setProduct(data.initProduct)
        setListFabric(data.listFabric)
        setFabric(fabric)
        setFabricPrice(data.initFabric.type.base_price)
      })
      .catch(err => console.log(err))
  }

  function fetchDataFeatures() {
    getSuitFeatures()
      .then(data => {
        const initFeaturePrice = data.initFeature.map(v => v.data.price).reduce((a, b) => a + b)
        setListFeature(data.listFeature)
        setFeature(data.initFeature)
        setFeaturePrice(initFeaturePrice)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchDataFabric()
    fetchDataFeatures()
  }, [])

  const totalPrice = () => {
    const price = fabricPrice + featurePrice
    setPrice(price)
  }

  useEffect(() => {
    totalPrice()
  }, [fabricPrice, featurePrice])

  function submit (){
    const features = feature.map((v) => {
      return {
        "option_value": v.data.id,
        "child_value": v.data.child ? v.data.child.id : null,
        "string_value": v.data.value ? v.data.value : null
      }
    })

    const data = {
      "fabric_color_id": fabric.colorId,
      "product_id": product.id,
      "category":{
        "id": product.category.id,
        "type": product.category.type
      },
      "is_customized": 0,
      "note": "",
      "features": features,
      "measurement": {
        "method": "manual",
        "fit_option_id": 1,
        "standard_measurement_id": 1,
        "height": 160,
        "weight": 60,
      }
    }
    
    if (props.auth === null || props.user === null) {
      return window.location = `/login?redirectTo=${encodeURIComponent(window.location.href)}`
    } else {
      addToCart(props.auth.token, data)
        .then(res => {
          if (res.data.message === "success") {
            window.location = "/cart"
          }
        })
    }
  }

  return (
    <Layout header="white" page={t("title")} footer={false}>
      <div id="page-customize">
        <Container fluid>
          <Row>
            <Col md={4}>
              <FilterBar 
                setFabricPrice={setFabricPrice} setFeaturePrice={setFeaturePrice}
                listFabric={listFabric} fabric={fabric} setFabric={setFabric} 
                listFeature={listFeature} feature={feature} setFeature={setFeature}
              />
            </Col>
            <Col md={5}>
              <LivePreviewDesktop fabric={fabric} feature={feature} />
            </Col>
            <Col md={3}>
              {console.log('cek',feature)}
              <DetailBox fabric={fabric} price={price} feature={feature} addToCart={submit} />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
  user: state.auth.user
})

const mapDispatchToProps = () => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Customize));