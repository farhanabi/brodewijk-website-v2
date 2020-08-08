
import React, { useState } from 'react';
import classnames from 'classnames';
import { TabContent, TabPane, Button, Row, Col } from 'reactstrap';

function FeatureDesktop (props){
  const { item, feature, setFeature, setFeaturePrice, setPrice } = props
  const [activeTabLining, setActiveTabLining] = useState(1);

  function toggleTab(tab) {
    if (activeTabLining !== tab) setActiveTabLining(tab);
  }

  function changeLining(liningId, liningName, childId, childName) {
    console.log(liningId, liningName, childId, childName)
  }
  
  function changeFeature(featureName, optionId, featureValue) {
    const itemFeature = {}
    Object.defineProperty(itemFeature, `${featureName}`, { value: featureValue })
    let newFeature = { ...feature, ...itemFeature }
    console.log(newFeature)
    setFeature(newFeature)
  }

  const Lining = (item) => {
    return (
      <div className="lining">
        {item.item.options.map((val, key) => (
          <Col md={12 / item.item.options.length} key={key} className="tab-lining">
            <Button
              className={`btn-tab ${classnames({ active: activeTabLining === val.id })}`}
              onClick={() => toggleTab(val.id)}
            >
              {val.name}
            </Button>
          </Col>
        ))}
        {item.item.options.map(val => (
          <TabContent activeTab={activeTabLining} className="tab-content-lining">
            <TabPane tabId={val.id} className="tab-pane-lining">
              <Row className="mr-0 ml-0">
                {val.childs.map((v, k) => (
                  <Col md={6} key={k} 
                    className={`lining-color ${feature["Lining"].child.name === v.name ? "active" : ""}`}
                    onClick={() => changeLining(val.id, val.name, v.id, v.name)}
                  >
                    <img className="lining-color-img" src={v.image} alt={v.name} />
                    <p className="lining-color-name">{v.name}</p>
                  </Col>
                ))}
              </Row>
            </TabPane>
          </TabContent>
        ))}
      </div>
    );
  }

  return (
    <div className="feature-item">
      <Col md={12} className="feature-text">
        <h5 className="feature-text-name">{item.name}</h5>
      </Col>
      <Col md={12} className="feature-options">
        <Row className="mr-0 ml-0">
          {item.name === "Lining" ? (
            <Lining item={item}/>
          ) : (
            item.options.map((v, k) => (
              <Col md={4} key={k} 
                className={`option-item ${feature[item.name].name === v.name ? "active" : ""}`}
                onClick={() => changeFeature(item.name, v.id, v.name)}
              >
                <img className="option-item-img" src={v.image} alt={v.name} />
                <p className="option-item-name">{v.name}</p>
              </Col>
            ))
          )}
        </Row>
      </Col>
    </div>
  );
}

export default FeatureDesktop;