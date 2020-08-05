import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Loading from 'components/Loading';

const imgCart = require('assets/images/cart.svg')
const espalda_abajo = require('assets/images/interior+espalda_abajo+length_long.png')
const espalda_arriba = require('assets/images/interior+espalda_arriba.png')

function LivePreviewMobile(props) {
  const { price, fabric, feature } = props;
  let lapel_button = ""
  let buttonSegment = ""
  let chestPocket = ""
  let pockets = ""
  if (feature && feature["Lapels"] && feature["Buttons"] && feature["Chest Pocket"] && feature["Pockets"]) {
    lapel_button = feature[`Buttons`].resources[`${feature["Lapels"].codeName}`].neck
    buttonSegment = feature["Buttons"].codeName.split('+')[0]
    chestPocket = feature["Chest Pocket"].resources.pocket
    pockets = feature["Pockets"].resources.pocket
  }
  console.log(fabric)
  return (
    <div id="live-preview-mobile">
      <Container>
        <Row className="row-top">
          {fabric && fabric.color && feature ? (
            <Col xs={10} className="wrapper-img">
              <div className="bg-grey">
                <img src={espalda_abajo} className="img-preview" alt=''/>
                <img src={espalda_arriba} className="img-preview" alt=''/>
                <img src={`${fabric.path}/interior+espalda_arriba+label.png`} className="img-preview" alt=''/>
                <img src={`${fabric.path}/${lapel_button}`} className="img-preview" alt=''/>
                <img src={`${fabric.path}/bottom_${buttonSegment}+length_long+hemline_closed.png`} className="img-preview" alt=''/>
                <img src={`${fabric.path}/interior+sleeves.png`} className="img-preview" alt=''/>
                <img src={`${fabric.path}/${chestPocket}`} className="img-preview" alt=''/>
                <img src={`${fabric.path}/${pockets}`} className="img-preview" alt=''/>
              </div>
            </Col>
          ) : (<Loading text={true} />)}
          <Col xs={2} className="wrapper-btn">
            <Button className="btn-cart" title="Add to cart">
              <img src={imgCart}/>
            </Button>
          </Col>
        </Row>
        <Row className="row-bottom">
          <p className="text-price">Rp <strong>{price}</strong></p>
        </Row>
      </Container>
    </div>
  )
}

export default LivePreviewMobile;