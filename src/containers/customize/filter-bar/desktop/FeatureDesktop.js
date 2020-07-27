
import React from 'react';
import { Row, Col } from 'reactstrap';

function FeatureDesktop (props){
  const { item } = props

  return (
    <div className="feature-item">
      <Col md={12} className="feature-text">
        <h5 className="feature-text-name">{item.name}</h5>
      </Col>
    </div>
  );
}

export default FeatureDesktop;