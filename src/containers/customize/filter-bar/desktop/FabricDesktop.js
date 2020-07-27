import React from 'react';
import { Row, Col } from 'reactstrap';

function FabricDesktop (props){
  const { item, setPrice, fabric, setFabric, setFabricPrice } = props

  function changeFabric(fabricName, fabricColor, price) {
    setFabric({ name: fabricName, color: fabricColor })
    setFabricPrice(price)
    setPrice(price)
  }

  return (
    <div className={`fabric-item ${fabric.name === item.name ? "active" : ""}`}>
      <Col md={12} className="fabric-text">
        <h5 className="fabric-text-name">{item.name}</h5>
        <p className="fabric-text-grade">{item.grade}</p>
        <p className="fabric-text-desc">{item.description}</p>
      </Col>
      <Col md={12} className="fabric-color">
        <Row className="mr-0 ml-0">
          {item.colors.map((v, k) => (
            <Col md={6} key={k} 
              className={`fabric-color-item ${fabric.color === v.name ? "color-active" : ""}`}
              onClick={() => changeFabric(item.name, v.name, item.type.base_price)}
            >
              <img className="fabric-color-img" src={v.image} alt={v.name} />
              <p className="fabric-color-name">{v.name}</p>
            </Col>
          ))}
        </Row>
      </Col>
    </div>
  );
}

export default FabricDesktop;