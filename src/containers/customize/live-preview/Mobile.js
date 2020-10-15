import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container, Row, Col, Button } from 'reactstrap';
import Loading from 'components/Loading';
import { currencyFormatter } from 'utils/number';
import { addToCart } from 'services/cart';

const imgCart = require('assets/images/cart.svg')
const espalda_abajo = require('assets/images/interior+espalda_abajo+length_long.png')
const espalda_arriba = require('assets/images/interior+espalda_arriba.png')

function LivePreviewMobile(props) {
  const { price, fabric, feature } = props;
  const { t } = useTranslation("customize");
  
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
    <div id="live-preview-mobile">
      <Container>
        <Row className="row-top">
          {fabric && fabric.colorName && feature ? (
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
            {/* <Button className="btn-cart" title="Add to cart" onClick={() => props.addToCart()}>
                  <img src={imgCart}/>
                </Button> */}
            <Button className="btn-cart" title="Add to cart"
              href={feature && `${t("detail-box-section.order-this-via-wa.link")} ${t("detail-box-section.features.fabric")}: ${fabric.name} ${fabric.colorName}, ${t("detail-box-section.features.lining")}: ${feature[0].data.name} ${feature[0].data.child.name}, ${t("detail-box-section.features.canvas")}: ${feature[1].data.name}, ${t("detail-box-section.features.shoulder")}: ${feature[2].data.name}, ${t("detail-box-section.features.lapels")}: ${feature[3].data.name}, ${t("detail-box-section.features.chest-pocket")}: ${feature[4].data.name}, ${t("detail-box-section.features.buttons")}: ${feature[5].data.name}, ${t("detail-box-section.features.pockets")}: ${feature[6].data.name}, ${t("detail-box-section.features.vents")}: ${feature[7].data.name}, ${feature[8].data.name}, ${feature[9].data.name}, ${feature[10].data.name}`}>
                <img src={imgCart}/>
            </Button>
          </Col>
        </Row>
        <Row className="row-bottom">
          <p className="text-price">Rp <strong>{currencyFormatter(price)}</strong></p>
        </Row>
      </Container>
    </div>
  )
}

export default LivePreviewMobile;