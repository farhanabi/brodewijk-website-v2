import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Loading from 'components/Loading';

const espalda_abajo = require('assets/images/interior+espalda_abajo+length_long.png')
const espalda_arriba = require('assets/images/interior+espalda_arriba.png')

function LivePreviewDesktop (props){
  const { fabric, feature } = props
  let lapel_button = ""
  let buttonSegment = ""
  let chestPocket = ""
  let pockets = ""
  if (feature) {
    lapel_button = feature[5].data.resources[`${feature[3].data.codeName}`].neck
    buttonSegment = feature[5].data.codeName.split('+')[0]
    chestPocket = feature[4].data.resources.pocket
    pockets = feature[6].data.resources.pockets
  }

  return (
    <div id="live-preview-desktop">
      <Container>
        {/* <Row className="row-top">
          <Col md={{ size: 1, offset: 11 }} className="wrapper-btn">
            <Button className="btn-full" title="Full screen">
              <i className="fas fa-expand"/>
            </Button>
          </Col>
        </Row> */}
        <Row className="row-bottom">
          {fabric && fabric.colorName && feature ? (
            <Col className="wrapper-img">
              <img src={espalda_abajo} className="img-preview" alt=''/>
              <img src={espalda_arriba} className="img-preview" alt=''/>
              <img src={`${fabric.path}/interior+espalda_arriba+label.png`} className="img-preview" alt=''/>
              <img src={`${fabric.path}/${lapel_button}`} className="img-preview" alt=''/>
              <img src={`${fabric.path}/bottom_${buttonSegment}+length_long+hemline_closed.png`} className="img-preview" alt=''/>
              <img src={`${fabric.path}/interior+sleeves.png`} className="img-preview" alt=''/>
              <img src={`${fabric.path}/${chestPocket}`} className="img-preview" alt=''/>
              <img src={`${fabric.path}/${pockets}`} className="img-preview" alt=''/>
            </Col>
          ) : (<Loading text={true} />)}
        </Row>
      </Container>
    </div>
  )
}

export default LivePreviewDesktop;