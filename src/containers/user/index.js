import React, { useState } from 'react'
import { TabContent, TabPane, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next'

function FilterBar(props) {
  const { 
    setPrice, listFabric, fabric, setFabric, setFabricPrice, listFeature, feature, setFeature, setFeaturePrice, 
    listFeatureLining, listFeatureCanvas,  listFeatureShoulder, listFeatureLapels, listFeatureChestPocket, listFeatureButtons, 
    listFeaturePockets, listFeatureVents, listFeaturePants, listFeatureVest, listFeatureShirt, listFeatureTie, featureMonogram
  } = props
  const { t } = useTranslation("user");
  const [activeTab, setActiveTab] = useState('fabric');

  function toggleTab(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return(
    <div id="user-tab">
      <Row>
        <h1>{t("title")}</h1>
      </Row>
      <Row className="tab">
        <Col xs={6} className="tab-fabric">
          <Button
            className={`btn-tab ${classnames({ active: activeTab === 'fabric' })}`}
            onClick={() => toggleTab('fabric')}
          >
            {t("fabric-section.title")}
          </Button>
        </Col>
        <Col xs={6} className="tab-features">
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
          {listFabric && listFabric.map((v, k) => (
            <Row key={k}>
              
            </Row>
          ))}
        </TabPane>
        <TabPane tabId="features" className="features">
          {listFeature && listFeature.map((v, k) => (
            <Row key={k}>
              
            </Row>
          ))} 
        </TabPane>
      </TabContent>
    </div>
  )
}

export default FilterBar;