
import React, { useState } from 'react';
import classnames from 'classnames';
import { TabContent, TabPane, Button, Row, Col } from 'reactstrap';

function FeatureDesktop (props){
  const { 
    feature, setFeature, setFeaturePrice, setPrice, 
    listFeatureLining, listFeatureCanvas,  listFeatureShoulder, listFeatureLapels, listFeatureChestPocket, listFeatureButtons, 
    listFeaturePockets, listFeatureVents, listFeaturePants, listFeatureVest, listFeatureShirt, listFeatureTie, featureMonogram
  } = props
  console.log(listFeatureCanvas)

  function changeFeature (featureName, optionId, optionName, child = "", value = ""){
    console.log(featureName, optionId, optionName)
    
  }

  return (
    <div>
      {listFeatureCanvas && (
        <Row className="feature-item">
          <Col md={12} className="feature-text">
            <h5 className="feature-text-name">{listFeatureCanvas.name}</h5>
          </Col>
          <Col md={12} className="feature-options">
            <Row className="mr-0 ml-0">
              {listFeatureCanvas.options.map((v, k) => (
                <Col md={4} key={k} 
                  className={`option-item ${feature[listFeatureCanvas.name].name === v.name ? "active" : ""}`}
                  onClick={() => changeFeature(listFeatureCanvas.name, v.id, v.name)}
                >
                  <img className="option-item-img" src={v.image} alt={v.name} />
                  <p className="option-item-name">{v.name}</p>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </div>
  );
}

export default FeatureDesktop;