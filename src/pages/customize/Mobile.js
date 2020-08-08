import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import axios from 'axios';

import Layout from 'layout/CommonMobile'
import FilterBar from 'containers/customize/filter-bar/mobile';
import LivePreview from 'containers/customize/live-preview/Mobile';

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
        const fabric = { name: initFabric.name, color_id: initFabricColor.id, color: initFabricColor.name, path: initFabricColor.path }
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
        const initLining = listFeature.filter(v => v.name === "Lining")[0].options.filter(v => v.selected)[0] || {}
        const initCanvas = listFeature.filter(v => v.name === "Canvas Type")[0].options.filter(v => v.selected)[0] || {}
        const initShoulder = listFeature.filter(v => v.name === "Shoulder Type")[0].options.filter(v => v.selected)[0] || {}
        const initLapels = listFeature.filter(v => v.name === "Lapels")[0].options.filter(v => v.selected)[0] || {}
        const initChestPocket = listFeature.filter(v => v.name === "Chest Pocket")[0].options.filter(v => v.selected)[0] || {}
        const initButtons = listFeature.filter(v => v.name === "Buttons")[0].options.filter(v => v.selected)[0] || {}
        const initPockets = listFeature.filter(v => v.name === "Pockets")[0].options.filter(v => v.selected)[0] || {}
        const initVents = listFeature.filter(v => v.name === "Vents")[0].options.filter(v => v.selected)[0] || {}
        const initPants = listFeature.filter(v => v.name === "Pants")[0].options.filter(v => v.selected)[0] || {}
        const initVest = listFeature.filter(v => v.name === "Vest")[0].options.filter(v => v.selected)[0] || {}
        const initShirt = listFeature.filter(v => v.name === "Shirt")[0].options.filter(v => v.selected)[0] || {}
        const initTie = listFeature.filter(v => v.name === "Tie")[0].options.filter(v => v.selected)[0] || {}
        const initMonogram = listFeature.filter(v => v.name === "Monogram")[0].options.filter(v => v.selected)[0] || {}
        console.log(listFeature)
        const initFeature = {
          "Lining": { 
            id: initLining.id,
            name: initLining.name, 
            child: {
              id: initLining.childs.filter(v => v.selected)[0].id,
              name: initLining.childs.filter(v => v.selected)[0].name
            }
          },
          "Canvas Type": { id: initCanvas.id, name: initCanvas.name },
          "Shoulder Type": { id: initShoulder.id, name: initShoulder.name },
          "Lapels": { id: initLapels.id, name: initLapels.name, codeName: initLapels.code_name, resources: initLapels.resources },
          "Chest Pocket": { id: initChestPocket.id, name: initChestPocket.name, resources: initChestPocket.resources },
          "Buttons": { id: initButtons.id, name: initButtons.name, codeName: initButtons.code_name, resources: initButtons.resources },
          "Pockets": { id: initPockets.id, name: initPockets.name, resources: initPockets.resources },
          "Vents": { id: initVents.id, name: initVents.name },
          "Pants": { id: initPants.id, name: initPants.name },
          "Vest": { id: initVest.id, name: initVest.name},
          "Shirt": { id: initShirt.id, name: initShirt.name},
          "Tie": { id: initTie.id, name: initTie.name},
          "Monogram": { id: initMonogram.id, name: initMonogram.name }
        }
        setFeature(initFeature)
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
        <FilterBar setPrice={setPrice} setFabricPrice={setFabricPrice}
          listFabric={listFabric} fabric={fabric} setFabric={setFabric} 
          listFeature={listFeature} feature={feature} setFeature={setFeature}
        />
        <LivePreview price={price} fabric={fabric} feature={feature} />
      </div>
    </Layout>
  )
}

export default withRouter(Customize)