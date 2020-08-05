import React, { useState } from 'react'
import { TabContent, TabPane, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next'
import FabricDesktop from './FabricDesktop';
import FeatureDesktop from './FeatureDesktop';

function FilterBar(props) {
  const { setPrice, listFabric, fabric, setFabric, setFabricPrice, listFeature, feature, setFeature, setFeaturePrice } = props
  const { t } = useTranslation("customize");
  const [activeTab, setActiveTab] = useState('fabric');

  function toggleTab(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  }

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
          {listFabric && listFabric.map((v, k) => (
            <Row key={k}>
              <FabricDesktop item={v} fabric={fabric} setFabric={setFabric} setFabricPrice={setFabricPrice} setPrice={setPrice} />
            </Row>
          ))}
        </TabPane>
        <TabPane tabId="features" className="features">
          {listFeature && listFeature.map((v, k) => (
            <Row key={k}>
              <FeatureDesktop item={v} feature={feature} setFeature={setFeature} setFeaturePrice={setFeaturePrice} setPrice={setPrice} />
            </Row>
          ))}
        </TabPane>
      </TabContent>
    </div>
  )
}

export default FilterBar;