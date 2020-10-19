import React from 'react';
import { Row, Col } from 'reactstrap';
import { currencyFormatter } from 'utils/number';

function FabricMobile (props){
  const { item, fabric, setFabric, setFabricPrice } = props

  function changeFabric(fabric, fabricColor) {
    setFabric({ 
        id: fabric.id, name: fabric.name, type: { id: fabric.type.id.toString(), name: fabric.type.name },
        colorId: fabricColor.id, colorName: fabricColor.name, path: fabricColor.path 
    })
    setFabricPrice(fabric.type.base_price)
  }

  return (
    <div className={`fabric-item ${fabric.name === item.name ? "active" : ""}`}>
      <Col xs={12} className="fabric-text">
        <h5 className="fabric-text-name">{item.name} (Start from Rp{currencyFormatter(item.type.base_price)})</h5>
        <p className="fabric-text-grade">{item.grade}</p>
        <p className="fabric-text-desc">{item.description}</p>
      </Col>
      <Col xs={12} className="fabric-color">
        <Row className="row-color">
          {item.colors.map((v, k) => (
            <Col xs={6} key={k} 
              className={`fabric-color-item ${fabric.colorId === v.id ? "color-active" : ""}`}
              onClick={() => changeFabric(item, v)}
            >
              <div className="wrapper-color-item">
                <img className="fabric-color-img" src={v.image} alt={v.name} />
                <p className="fabric-color-name">{v.name}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Col>
    </div>
  );
}

export default FabricMobile;