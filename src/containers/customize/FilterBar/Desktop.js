import React, { useState } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { useTranslation } from 'react-i18next'

function FilterBar() {
  const { t } = useTranslation("customize");
  const [activeTab, setActiveTab] = useState('fabric');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }
  return(
    <div id="filter-bar-section">
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 'fabric' })}
            onClick={() => { toggle('fabric'); }}
          >
            {t("fabric-section.title")}
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === 'features' })}
            onClick={() => { toggle('features'); }}
          >
            {t("features-section.title")}
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="fabric">
          <Row>
            <Col>
              <h4>Fabric</h4>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="features">
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