import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, TabContent, TabPane, Container, Row, Col } from 'reactstrap'
import classnames from 'classnames';
import { useTranslation } from 'react-i18next'
import axios from 'axios';
import Layout from 'layout/CommonDesktop'

function User (){
  const { t } = useTranslation("user");
  const [activeTab, setActiveTab] = useState('profile');

  function toggleTab(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  }
  
  const [dropdownOpen, setOpen] = useState(false);

  const toggleDropdown = () => setOpen(!dropdownOpen);

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
    <Layout header="white" page={t("title").toUpperCase()} footer={true}>
      <div id="user-page">
        <Container>
          <Row className="row-content">
            <Col md={12} className="col-content">
              <h2 className="title">{t("title")}</h2>
              <Row className="tab">
                <Col xs={4} md={3} className="tab-content">
                  <Button
                    className={`btn-tab ${classnames({ active: activeTab === 'profile' })}`}
                    onClick={() => toggleTab('profile')}
                  >
                    {t("profile.title")}
                  </Button>
                </Col>
                <Col xs={4} md={3} className="tab-content">
                  <Button
                    className={`btn-tab ${classnames({ active: activeTab === 'address' })}`}
                    onClick={() => toggleTab('address')}
                  >
                    {t("address.title")}
                  </Button>
                </Col>
                <Col xs={4} md={3} className="tab-content">
                  <Button
                    className={`btn-tab ${classnames({ active: activeTab === 'size' })}`}
                    onClick={() => toggleTab('size')}
                  >
                    {t("size.title")}
                  </Button>
                </Col>
              </Row>
              <TabContent activeTab={activeTab}>
                <TabPane tabId="profile" className="tab-content">
                  <Row>
                    <Col xs={6} md={3}>
                      <h2 className="label">{t("profile.first-name")}</h2>
                      <p className="value">Alberto Di Marizio</p>
                    </Col>
                    <Col xs={6} md={3}>
                      <h2 className="label">{t("profile.last-name")}</h2>
                      <p className="value">Supratman</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2 className="label">{t("profile.email")}</h2>
                      <p className="value">albertodimarizio@supratman.com</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2 className="label">{t("profile.username")}</h2>
                      <p className="value">albertodimarizio</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2 className="label">{t("profile.phone-number")}</h2>
                      <p className="value">+6281322888888</p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="address" className="tab-content">
                  <Row id="address-name">
                    <Col>
                      <h2 className="label">{t("address.address-name")}</h2>
                      <ButtonDropdown isOpen={dropdownOpen} toggle={toggleDropdown}>
                        <DropdownToggle caret color="outline-secondary">
                          Home
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Home</DropdownItem>
                          <DropdownItem>Office</DropdownItem>
                          <DropdownItem>Sara's Apartment</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2 className="label">{t("address.address")}</h2>
                      <p className="value">4823 Country Road</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2 className="label">{t("address.apt-number")}</h2>
                      <p className="value">28 Leavy Condo</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2 className="label">{t("address.city")}</h2>
                      <p className="value">Dry Creek</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} md={3}>
                      <h2 className="label">{t("address.province")}</h2>
                      <p className="value">Alaska</p>
                    </Col>
                    <Col xs={6} md={3}>
                      <h2 className="label">{t("address.country")}</h2>
                      <p className="value">United States</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <h2 className="label">{t("address.postal-code")}</h2>
                      <p className="value">99737</p>
                    </Col>
                  </Row>
                </TabPane>
                <TabPane tabId="size" className="tab-content">
                  <Row>
                    <Col xs={12} md={4} className="col-size">
                      <h2 className="label">{t("size.body-measurement.title")}</h2>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.body-measurement.height")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">170 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.body-measurement.weight")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">60 kg</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12} md={4} className="col-size">
                      <h2 className="label">{t("size.upper-measurement.title")}</h2>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.neck")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">170 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.shoulder")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">170 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.bicep")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">100 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.arm")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">100 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.wrist")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">100 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.torso")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">100 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.chest")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">100 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.stomach")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">100 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.upper-measurement.waist")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">100 cm</p>
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12} md={4} className="col-size">
                      <h2 className="label">{t("size.bottom-measurement.title")}</h2>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.bottom-measurement.waist")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">170 cm</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.bottom-measurement.seat")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">60 kg</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.bottom-measurement.leg")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">60 kg</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.bottom-measurement.crotch")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">60 kg</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.bottom-measurement.thigh")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">60 kg</p>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={8} md={7}>
                          <p className="value">{t("size.bottom-measurement.knee")}</p>
                        </Col>
                        <Col xs={4} md={5}>
                          <p className="value">60 kg</p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Container>
      </div>
    </Layout>
  )
}

export default withRouter(User)