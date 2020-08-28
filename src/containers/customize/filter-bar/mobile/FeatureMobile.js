
import React, { useState } from 'react';
import classnames from 'classnames';
import { TabContent, TabPane, Button, Row, Col, Input } from 'reactstrap';

function FeatureMobile (props){
  const { item, index, feature, setFeature, setFeaturePrice, setPrice } = props
  const [activeTabLining, setActiveTabLining] = useState(1);
  const [valueMonogram, setValueMonogram] = useState("")

  function toggleTabLining(tab) {
    if (activeTabLining !== tab) setActiveTabLining(tab);
  }

  function changeLining(lining, child) {
    const newLining = {
      name: "Lining",
      data: { 
        id: lining.id,
        name: lining.name,
        codeName: lining.code_name,
        resources: lining.resources,
        price: lining.prices[0].price,
        child: { id: child.id, name: child.name }
      }
    }
    const newFeature = feature.map(obj => obj.name === "Lining" ? newLining : obj)
    const newFeaturePrice = newFeature.map(v => v.data.price).reduce((a, b) => a + b)
    setFeature(newFeature)
    setFeaturePrice(newFeaturePrice)
  }

  const Lining = (item) => {
    return (
      <div className="lining">
        {item.item.options.map((val, key) => (
          <Col xs={12 / item.item.options.length} key={key} className="tab-lining">
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
                  <Col xs={6} key={k} 
                    className={`lining-color ${feature[0].data.child.name === v.name ? "active" : ""}`}
                    onClick={() => changeLining(val, v)}
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
        codeName: null,
        resources: [],
        price: 0,
        value: value
      }
    }
    const newFeature = feature.map(obj => obj.name === "Monogram" ? monogram : obj)
    const newFeaturePrice = newFeature.map(v => v.data.price).reduce((a, b) => a + b)
    setValueMonogram(value)
    setFeature(newFeature)
    setFeaturePrice(newFeaturePrice)
  }

  const Monogram = () => {
    return (
      <div className="monogram">
        <Input type="text" placeholder="monogram" value={valueMonogram} onChange={(e) => changeMonogram(e.target.value)}/>
      </div>
    );
  }

  function changeFeature(featureName, value) {
    const data = {
      id: value.id,
      name: value.name,
      codeName: value.code_name,
      resources: value.resources,
      price: value.prices[0].price
    }
    const itemFeature = { name: featureName, data }
    const newFeature = feature.map(obj => obj.name === featureName ? itemFeature : obj)
    const newFeaturePrice = newFeature.map(v => v.data.price).reduce((a, b) => a + b)

    setFeature(newFeature)
    setFeaturePrice(newFeaturePrice)
  }

  return (
    <div className="feature-item">
      <Col xs={12} className="feature-text">
        <h5 className="feature-text-name">{item.name}</h5>
      </Col>
      <Col xs={12} className="feature-options">
        <Row className="mr-0 ml-0">
          {item.name === "Lining" ? (
            <Lining item={item}/>
          ) : (
            item.type === "option" ? (
              item.options.map((v, k) => {
                return(
                  <Col xs={4} key={k} 
                    className={`option-item ${feature[index].data.name === v.name ? "active" : ""}`}
                    onClick={() => changeFeature(item.name, v)}
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

export default FeatureMobile;