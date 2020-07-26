import React from 'react';
import { Row, Col } from 'reactstrap';

function FabricDesktop (props){
  const { value, key } = props

  return (
    <Row key={key} className="fabric-item">
      <Col md={12} className="fabric-text">
        <h5 className="fabric-text-name">{value.name}</h5>
        <p className="fabric-text-grade">{value.grade}</p>
        <p className="fabric-text-desc">{value.description}</p>
      </Col>
      <Col md={12} className="fabric-color">
        <Row className="mr-0 ml-0">
          {value.colors.map((v, k) => (
            <Col md={6} key={k} className="fabric-color-item">
              <img className="fabric-color-img" src={v.image} alt={v.name} />
              <p className="fabric-color-name">{v.name}</p>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
}

export default FabricDesktop;