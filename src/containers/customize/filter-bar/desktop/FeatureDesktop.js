
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { TabContent, TabPane, Button, Row, Col, Input } from 'reactstrap';

function FeatureDesktop (props){
  const { item, index, feature, setFeature, setFeaturePrice, setPrice } = props
  const [activeTabLining, setActiveTabLining] = useState(1);
  const [valueMonogram, setValueMonogram] = useState("")

  function toggleTabLining(tab) {
    if (activeTabLining !== tab) setActiveTabLining(tab);
  }

  function changeLining(liningId, liningName, childId, childName) {
    const lining = {
      name: "Lining",
      data: { 
        id: liningId,
        name: liningName,
        child: { id: childId, name: childName }
      }
    }
    const newFeature = feature.map(obj => obj.name === "Lining" ? lining : obj)
    setFeature(newFeature)
  }

  const Lining = (item) => {
    return (
      <div className="lining">
        {item.item.options.map((val, key) => (
          <Col md={12 / item.item.options.length} key={key} className="tab-lining">
            <Button
              className={`btn-tab ${classnames({ active: activeTabLining === val.id })}`}
              onClick={() => toggleTabLining(val.id)}
            >
              {val.name}
            </Button>
          </Col>
        ))}
        {item.item.options.map((val, index) => (
          <TabContent key={index} activeTab={activeTabLining} className="tab-content-lining">
            <TabPane tabId={val.id} className="tab-pane-lining">
              <Row className="mr-0 ml-0">
                {val.childs.map((v, k) => (
                  <Col md={6} key={k} 
                    className={`lining-color ${feature[0].data.child.name === v.name ? "active" : ""}`}
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

  function changeMonogram (value){
    const monogram = {
      name: "Monogram",
      data: {
        id: value.length > 0 ? 26 : 25,
        name: value.length > 0 ? "add" : "none",
        value: value
      }
    }
    const newFeature = feature.map(obj => obj.name === "Monogram" ? monogram : obj)
    setValueMonogram(value)
    setFeature(newFeature)
  }

  const Monogram = () => {
    return (
      <div className="monogram">
        <Input type="text" placeholder="monogram" value={valueMonogram} onChange={(e) => changeMonogram(e.target.value)}/>
      </div>
    );
  }

  function changeFeature(featureName, optionId, optionName, resource, codeName) {
    let data = {}
    if (resource && codeName) {
      data = { id: optionId, name: optionName, resources: resource, codeName: codeName }
    } else if (resource) {
      data = { id: optionId, name: optionName, resources: resource }
    } else {
      data = { id: optionId,  name: optionName }
    }

    const itemFeature = { name: featureName, data}
    const newFeature = feature.map(obj => obj.name === featureName ? itemFeature : obj)
    setFeature(newFeature)
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
            item.type === "option" ? (
              item.options.map((v, k) => {
                const resource = v.resources ? v.resources : null;
                const codeName = v.code_name ? v.code_name : null;
                return(
                  <Col md={4} key={k} 
                    className={`option-item ${feature[index].data.name === v.name ? "active" : ""}`}
                    onClick={() => changeFeature(item.name, v.id, v.name, resource, codeName )}
                  >
                    <img className="option-item-img" src={v.image} alt={v.name} />
                    <p className="option-item-name">{v.name}</p>
                  </Col>
                )}
              )
            ) : (
              <Monogram/>
          ))}
        </Row>
      </Col>
    </div>
  );
}

export default FeatureDesktop;