import React, { useState, useEffect } from 'react'
import { TabContent, TabPane, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next'
import axios from 'axios';

function FilterBar() {
  const { t } = useTranslation("customize");
  const [activeTab, setActiveTab] = useState('fabric');
  const [listFabric, setListFabric] = useState([])
  const [fabric, setFabric] = useState('')
  
  function fetchDataFabric() {
    const url = `${process.env.REACT_APP_BASE_API_URL}/customer/api/fabric/suit`
    axios
      .get(url)
      .then(res => {
        const listFabric = res.data.data.fabrics
        console.log(listFabric)
        setListFabric(listFabric)
      })
      .catch(err => console.log(err))
  }

  function fetchDataFeatures() {
    const url = `${process.env.REACT_APP_BASE_API_URL}/customer/api/feature/suit`
    axios
      .get(url)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchDataFabric()
  }, [])

  function toggleTab(tab) {
    if (activeTab !== tab) setActiveTab(tab);

    if (tab === 'fabric') fetchDataFabric()
    else fetchDataFeatures()
  }

  return(
    <div id="filter-bar-section">
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
          {listFabric && listFabric.map((val, key) => (
            <Row key={key} className="fabric-item">
              <Col md={12} className="fabric-text">
                <h5 className="fabric-text-name">{val.name}</h5>
                <p className="fabric-text-grade">{val.grade}</p>
                <p className="fabric-text-desc">{val.description}</p>
              </Col>
              <Col md={12} className="fabric-color">
                <Row className="mr-0 ml-0">
                  {val.colors.map((v, k) => (
                    <Col md={6} key={k} className="fabric-color-item">
                      <img className="fabric-color-img" src={v.image} alt={v.name} />
                      <p className="fabric-color-name">{v.name}</p>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          ))}
        </TabPane>
        <TabPane tabId="features" className="features">
          <Row>
            <Col>
              <h4>Features</h4>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  )
}

export default FilterBar;