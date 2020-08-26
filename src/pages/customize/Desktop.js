import React, { useEffect, useState } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import { Container, Row, Col, Input } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'

import Layout from 'layout/CommonDesktop'
import FilterBar from 'containers/customize/filter-bar/desktop'
import DetailBox from 'containers/customize/DetailBox';
import LivePreviewDesktop from 'containers/customize/live-preview/Desktop';

import { getFabrics } from 'services/fabric';
import { getFeatures } from 'services/feature';
import { addToCart } from 'services/cart'

function Customize (props){
  const { t } = useTranslation("customize");

  const [price, setPrice] = useState(0)
  const [product, setProduct] = useState({})
  const [listFabric, setListFabric] = useState([])
  const [fabric, setFabric] = useState({})
  const [fabricPrice, setFabricPrice] = useState(0)

  const [listFeature, setListFeature] = useState([])
  const [feature, setFeature] = useState(null)
  
  function fetchDataFabric() {
    getFabrics('suit')
      .then(res => {
        const initProduct = res.data.data.product
        setProduct(initProduct)
        
        const listFabric = res.data.data.fabrics
        const initFabric = listFabric.filter(v => v.selected === true)[0]
        const initFabricColor = initFabric.colors.filter(v => v.selected === true)[0]
        const fabric = { id: initFabric.id, name: initFabric.name, colorId: initFabricColor.id, colorName: initFabricColor.name, path: initFabricColor.path }
        setListFabric(listFabric)
        setFabric(fabric)
        setFabricPrice(initFabric.type.base_price)
        setPrice(initFabric.type.base_price)
      })
      .catch(err => console.log(err))
  }

  function fetchDataFeatures() {
    getFeatures('suit')
      .then(res => {
        const listFeature = res.data.data.features 
        setListFeature(listFeature)
        
        const initLining = listFeature[0].options.filter(v => v.selected)[0] || {}
        const initCanvas = listFeature[1].options.filter(v => v.selected)[0] || {}
        const initShoulder = listFeature[2].options.filter(v => v.selected)[0] || {}
        const initLapels = listFeature[3].options.filter(v => v.selected)[0] || {}
        const initChestPocket = listFeature[4].options.filter(v => v.selected)[0] || {}
        const initButtons = listFeature[5].options.filter(v => v.selected)[0] || {}
        const initPockets = listFeature[6].options.filter(v => v.selected)[0] || {}
        const initVents = listFeature[7].options.filter(v => v.selected)[0] || {}
        const initPants = listFeature[8].options.filter(v => v.selected)[0] || {}
        const initVest = listFeature[9].options.filter(v => v.selected)[0] || {}
        const initShirt = listFeature[10].options.filter(v => v.selected)[0] || {}
        const initTie = listFeature[11].options.filter(v => v.selected)[0] || {}
        const initMonogram = listFeature[12].options.filter(v => v.selected)[0] || {}

        const initFeature = [
          { name: "Lining",
            data: { 
              id: initLining.id,
              name: initLining.name, 
              child: {
                id: initLining.childs.filter(v => v.selected)[0].id,
                name: initLining.childs.filter(v => v.selected)[0].name
              }
            }
          },
          { name: "Canvas Type", data: { id: initCanvas.id, name: initCanvas.name }},
          { name: "Shoulder Type", data: { id: initShoulder.id, name: initShoulder.name }},
          { name: "Lapels", data: { id: initLapels.id, name: initLapels.name, codeName: initLapels.code_name, resources: initLapels.resources }},
          { name: "Chest Pocket", data: { id: initChestPocket.id, name: initChestPocket.name, resources: initChestPocket.resources }},
          { name: "Buttons", data: { id: initButtons.id, name: initButtons.name, codeName: initButtons.code_name, resources: initButtons.resources }},
          { name: "Pockets", data: { id: initPockets.id, name: initPockets.name, resources: initPockets.resources }},
          { name: "Vents", data: { id: initVents.id, name: initVents.name }},
          { name: "Pants", data: { id: initPants.id, name: initPants.name }},
          { name: "Vest", data: { id: initVest.id, name: initVest.name}},
          { name: "Shirt", data: { id: initShirt.id, name: initShirt.name}},
          { name: "Tie", data: { id: initTie.id, name: initTie.name}},
          { name: "Monogram", data: { id: initMonogram.id, name: initMonogram.name, value: "" }}
        ]

        setFeature(initFeature)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchDataFabric()
    fetchDataFeatures()
  }, [])

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
    
    if (props.auth === null && props.user) {
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
                setPrice={setPrice} setFabricPrice={setFabricPrice}
                listFabric={listFabric} fabric={fabric} setFabric={setFabric} 
                listFeature={listFeature} feature={feature} setFeature={setFeature}
              />
            </Col>
            <Col md={5}>
              <LivePreviewDesktop fabric={fabric} feature={feature} />
            </Col>
            <Col md={3}>
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