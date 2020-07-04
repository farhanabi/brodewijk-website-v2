import React from 'react'
import { Container, Row, Col, Button} from 'reactstrap'
import { Link } from 'react-router-dom'

const data = [
  {
    title: 'Free Nation-Wide Shipping',
    image: require('assets/images/shipping.svg'),
    text: 'We ship thoroughly all over the country without minimum purchase.'
  },
  {
    title: 'Premium Fabrics',
    image: require('assets/images/fabric-2.svg'),
    text: 'We only offer the best fabrics to make it comfortable next to skin and keep you stylish.'
  },
  {
    title: 'Easy Customization',
    image: require('assets/images/easy-customization.svg'),
    text: 'You can do customization on your suit as you like.'
  },
  {
    title: 'Perfect Fit',
    image: require('assets/images/perfect-fit.svg'),
    text: 'We do online and direct measurement to make it perfect to your body.'
  },
  {
    title: '1 Year Guarantee',
    image: require('assets/images/guarantee.svg'),
    text: 'We accept product returns if there is damage'
  },
]

function SocialProof() {
  return(
    <div id="social-proof-section">
      <Container>
        <h5 className="title-proof">Why use our services?</h5>
        <p className="subtitle-proof">Here are some of the advantages that we proud of having</p>
        <Row className="data-list justify-content-center">
          {data.map((v, k) => (
            <Col md={2} key={k} className="data-item">
              <img src={v.image} alt={v.title} className="item-img" />
              <h6 className="item-title">{v.title}</h6>
              <p className="item-text">{v.text}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default SocialProof;