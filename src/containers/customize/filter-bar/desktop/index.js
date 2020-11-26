import React, { useState, useEffect } from 'react'
import { TabContent, TabPane, Button, Row, Col, Input } from 'reactstrap';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next'
import FabricDesktop from './FabricDesktop';
import FeatureDesktop from './FeatureDesktop';

function FilterBar(props) {
  const { listFabric, fabric, setFabric, setFabricPrice, listFeature, feature, setFeature, setFeaturePrice } = props
  const { t } = useTranslation("customize");
  const [activeTab, setActiveTab] = useState('fabric');
  const [valueMonogram, setValueMonogram] = useState("")

  function toggleTab(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  }

  function changeMonogram (){
    const optionMonogram = listFeature.filter(v => v.name === "Monogram")[0].options
    const addMonogram = optionMonogram.filter(v => v.name === "add")[0]
    const noneMonogram = optionMonogram.filter(v => v.name === "none")[0]
    const monogram = {
      name: "Monogram",
      data: {
        id: valueMonogram.length > 0 ? addMonogram.id : noneMonogram.id,
        name: valueMonogram.length > 0 ? addMonogram.name : noneMonogram.name,
        codeName: valueMonogram.length > 0 ? addMonogram.code_name : noneMonogram.code_name,
        resources: valueMonogram.length > 0 ? addMonogram.resources : noneMonogram.resources,
        prices: valueMonogram.length > 0 ? addMonogram.prices : noneMonogram.prices,
        value: valueMonogram
      }
    }
    const newFeature = feature.map(obj => obj.name === "Monogram" ? monogram : obj)
    const newFeaturePrice = newFeature.map(v => {
      const price = v.data.prices.filter(val => val.fabric_id === fabric.type.id)[0].price
      return price
    }).reduce((a, b) => a + b)

    setFeature(newFeature)
    setFeaturePrice(newFeaturePrice)
  }

  useEffect(() => {
    changeMonogram()
  }, [valueMonogram])

  return(
    <div id="filter-bar-desktop">
      <Row className="tab">
        <Col md={6} className="tab-fabric">
          <Button
            className={`btn-tab ${classnames({ active: activeTab === 'fabric' })}`}
            onClick={() => toggleTab('fabric')}
          >
            {t("fabric-section.title")}
          </Button>
        </Col>
        <Col md={6} className="tab-features">
          <Button
            className={`btn-tab ${classnames({ active: activeTab === 'features' })}`}
            onClick={() => toggleTab('features')}
          >
            {t("features-section.title")}
          </Button>
        </Col>
      </Row>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="fabric" className="fabric">
          {listFabric.length > 0 && listFabric.map((v, k) => (
            <Row key={k}>
              <FabricDesktop item={v} fabric={fabric} setFabric={setFabric} setFabricPrice={setFabricPrice} />
            </Row>
          ))}
        </TabPane>
        <TabPane tabId="features" className="features">
          {feature !== null &&  listFeature.length > 0 && listFeature.map((v, k) => (
            <Row key={k}>
              <FeatureDesktop item={v} index={k} fabric={fabric} feature={feature} setFeature={setFeature} setFeaturePrice={setFeaturePrice} />
            </Row>
          ))}
          {/* exceptional case for monogram */}
          <Row>
            <div className="feature-item">
              <Col xs={12} className="feature-text">
                <h5 className="feature-text-name">Monogram</h5>
              </Col>
              <Col xs={12} className="feature-options">
                <div className="monogram">
                  <Input type="text" placeholder="Monogram" value={valueMonogram} onChange={(e) => setValueMonogram(e.target.value)}/>
                </div>
              </Col>
            </div>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  )
}

export default FilterBar;