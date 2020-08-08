import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import axios from 'axios';
import Layout from 'layout/CommonDesktop'
import FilterBar from 'containers/customize/filter-bar/desktop'
import DetailBox from 'containers/customize/DetailBox';
import LivePreviewDesktop from 'containers/customize/live-preview/Desktop';

function Customize (){
  const { t } = useTranslation("customize");

  const [price, setPrice] = useState(0)
  const [listFabric, setListFabric] = useState([])
  const [fabric, setFabric] = useState({})
  const [fabricPrice, setFabricPrice] = useState(0)

  const [listFeature, setListFeature] = useState([])
  const [listFeatureLining, setListFeatureLining] = useState({})
  const [listFeatureCanvas, setListFeatureCanvas] = useState({})
  const [listFeatureShoulder, setListFeatureShoulder] = useState({})
  const [listFeatureLapels, setListFeatureLapels] = useState({})
  const [listFeatureChestPocket, setListFeatureChestPocket] = useState({})
  const [listFeatureButtons, setListFeatureButtons] = useState({})
  const [listFeaturePockets, setListFeaturePockets] = useState({})
  const [listFeatureVents, setListFeatureVents] = useState({})
  const [listFeaturePants, setListFeaturePants] = useState({})
  const [listFeatureVest, setListFeatureVest] = useState({})
  const [listFeatureShirt, setListFeatureShirt] = useState({})
  const [listFeatureTie, setListFeatureTie] = useState({})
  const [featureMonogram, setFeatureMonogram] = useState({})
  const [feature, setFeature] = useState(null)
  
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
        setListFeatureLining(listFeature[0])
        setListFeatureCanvas(listFeature[1])
        setListFeatureShoulder(listFeature[2])
        setListFeatureLapels(listFeature[3])
        setListFeatureChestPocket(listFeature[4])
        setListFeatureButtons(listFeature[5])
        setListFeaturePockets(listFeature[6])
        setListFeatureVents(listFeature[7])
        setListFeaturePants(listFeature[8])
        setListFeatureVest(listFeature[9])
        setListFeatureShirt(listFeature[10])
        setListFeatureTie(listFeature[11])
        setFeatureMonogram(listFeature[12])
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
                listFeatureLining={listFeatureLining}
                listFeatureCanvas={listFeatureCanvas}
                listFeatureShoulder={listFeatureShoulder}
                listFeatureLapels={listFeatureLapels}
                listFeatureChestPocket={listFeatureChestPocket}
                listFeatureButtons={listFeatureButtons}
                listFeaturePockets={listFeaturePockets}
                listFeatureVents={listFeatureVents}
                listFeaturePants={listFeaturePants}
                listFeatureVest={listFeatureVest}
                listFeatureShirt={listFeatureShirt}
                listFeatureTie={listFeatureTie}
                featureMonogram={featureMonogram}
              />
            </Col>
            <Col md={5}>
              <LivePreviewDesktop fabric={fabric} feature={feature} />
            </Col>
            <Col md={3}>
              <DetailBox fabric={fabric} price={price} feature={feature} />
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default withRouter(Customize)