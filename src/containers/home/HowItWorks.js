import React from 'react'
import { Container, Row, Col} from 'reactstrap'

const data = [
  {
    label: 'fabric',
    image: require('assets/images/fabric.svg'),
    text: 'Pick your fabric and craft your apparel'
  },
  {
    label: 'measure',
    image: require('assets/images/measure.svg'),
    text: 'Select how you want to get measured'
  },
  {
    label: 'cart',
    image: require('assets/images/cart.svg'),
    text: 'Your product will be delivered for free and ready to wear'
  }
]

function HowItWorks() {

  return(
    <div id="how-it-works-section">
      <Container>
        <h5 className="title-how">How it works</h5>
        <Row className="data-list">
          {data.map((v, k) => (
            <Col md={4} key={k} className="data-item">
              <img src={v.image} alt={v.label} className="item-img" />
              <p className="item-text">{v.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default HowItWorks;