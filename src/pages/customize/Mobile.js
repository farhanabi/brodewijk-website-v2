import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'

import Layout from 'layout/CommonMobile'
import FilterBar from 'containers/customize/filter-bar/mobile';
import LivePreview from 'containers/customize/live-preview/Mobile';

import { getSuitFabrics } from 'services/fabric';
import { getSuitFeatures } from 'services/feature';
import { addToCart } from 'services/cart'
import Loading from 'components/Loading'

function Customize (props){
  const { t } = useTranslation("customize");

  const [price, setPrice] = useState(0)
  const [product, setProduct] = useState({})
  const [listFabric, setListFabric] = useState([])
  const [fabric, setFabric] = useState(null)
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
          type: { id: data.initFabric.type.id.toString(), name: data.initFabric.type.name },
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
        const initFeaturePrice = data.initFeature.map(v => {
          const price = v.data.prices.filter(val => val.fabric_id === fabric.type.id)[0].price
          return price
        }).reduce((a, b) => a + b)
        setListFeature(data.listFeature)
        setFeature(data.initFeature)
        setFeaturePrice(initFeaturePrice)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchDataFabric()
  }, [])

  useEffect(() => {
    fetchDataFeatures()
  }, [fabric])

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
      {fabric && listFabric && feature && listFeature ? (
        <div id="page-customize">
          <FilterBar setFabricPrice={setFabricPrice} setFeaturePrice={setFeaturePrice}
            listFabric={listFabric} fabric={fabric} setFabric={setFabric} 
            listFeature={listFeature} feature={feature} setFeature={setFeature}
          />
          <LivePreview price={price} fabric={fabric} feature={feature} addToCart={submit} />
        </div>
      ) : <Loading/>}
    </Layout>
  )
}

const mapStateToProps = (state) => ({
  auth: state.auth.auth,
  user: state.auth.user
})

const mapDispatchToProps = () => ({
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Customize))