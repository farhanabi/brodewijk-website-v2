
import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { TabContent, TabPane, Button, Row, Col } from 'reactstrap';

function FeatureDesktop (props){
  const { item, index, fabric, feature, setFeature, setFeaturePrice } = props
  const [activeTabLining, setActiveTabLining] = useState(0);


  function toggleTabLining(tab) {
    if (activeTabLining !== tab) setActiveTabLining(tab);
  }

  useEffect(() => {
    let lining = feature[0]
    setActiveTabLining(lining.data.id)
  }, [feature])

  function changeLining(lining, child) {
    const newLining = {
      name: "Lining",
      data: { 
        id: lining.id,
        name: lining.name,
        codeName: lining.code_name,
        resources: lining.resources,
        description: lining.description,
        prices: lining.prices,
        child: { id: child.id, name: child.name }
      }
    }
    const newFeature = feature.map(obj => obj.name === "Lining" ? newLining : obj)
    const newFeaturePrice = newFeature.map(v => {
      const price = v.data.prices.filter(val => val.fabric_id === fabric.type.id)[0].price
      return price
    }).reduce((a, b) => a + b)
    setFeature(newFeature)
    setFeaturePrice(newFeaturePrice)
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
                    className={`lining-color ${feature[0].data.child.id === v.id ? "active" : ""}`}
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

  function changeFeature(featureName, value) {
    const data = {
      id: value.id,
      name: value.name,
      codeName: value.code_name,
      resources: value.resources,
      prices: value.prices
    }
    const itemFeature = { name: featureName, data }
    const newFeature = feature.map(obj => obj.name === featureName ? itemFeature : obj)
    const newFeaturePrice = newFeature.map(v => {
      const price = v.data.prices.filter(val => val.fabric_id === fabric.type.id)[0].price
      return price
    }).reduce((a, b) => a + b)

    setFeature(newFeature)
    setFeaturePrice(newFeaturePrice)
  }

  return (
    item.type === "option" ? (
      <div className="feature-item">
        <Col md={12} className="feature-text">
          {item.name === "Monogram" ? null :
          <h5 className="feature-text-name">{item.name}</h5>}
        </Col>
        <Col md={12} className="feature-options">
          <Row className="mr-0 ml-0">
            {item.name === "Lining" ? (
              <Lining item={item}/>
            ) : (
              item.options.map((v, k) => {
                return(
                  <Col md={4} key={k} 
                    className={`option-item ${feature[index].data.name === v.name ? "active" : ""}`}
                    onClick={() => changeFeature(item.name, v)}
                  >
                    <img className="option-item-img" src={v.image} alt={v.name} />
                    <p className="option-item-name">{v.name}</p>
                  </Col>
                )}
              )
            )}
          </Row>
        </Col>
      </div>
    ) : null
  );
}

export default FeatureDesktop;