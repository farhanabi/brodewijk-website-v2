
import React, { useState } from 'react';
import classnames from 'classnames';
import { Row, Col, Button } from 'reactstrap';

function FeatureMobile (props){
  const { item, feature, setFeature, setFeaturePrice, setPrice } = props
  const [activeTab, setActiveTab] = useState('standard');

  function toggleTab(tab) {
    if (activeTab !== tab) setActiveTab(tab);
  }
  
  function changeFeature(featureName, optionId, featureValue) {
    const itemFeature = {}
    Object.defineProperty(itemFeature, `${featureName}`, { value: featureValue })
    let newFeature = { ...feature, ...itemFeature }
    console.log(newFeature)
    setFeature(newFeature)
  }

  return (
    <div className="feature-item">
      <Col xs={12} className="feature-text">
        <h5 className="feature-text-name">{item.name}</h5>
      </Col>
      <Col xs={12} className="feature-options">
        <Row className="mr-0 ml-0">
          {item.name === "Lining" ? (
            <div className="lining">
              {item.options.map((v, k) => (
                <Col xs={12 / item.options.length} key={k} className="tab-lining">
                  <Button
                    className={`btn-tab ${classnames({ active: activeTab === v.name })}`}
                    onClick={() => toggleTab(v.name)}
                  >
                    {v.name}
                  </Button>
                </Col>
              ))}
            </div>
          ) : (
            item.options.map((v, k) => (
              <Col xs={4} key={k} 
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

export default FeatureMobile;