import React from 'react'
import { Container, Button, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

const data = [
  {
    label: 'SUIT',
    image: require('assets/images/suit.jpg'),
    link: '/customize'
  },
  {
    label: 'SHIRTS',
    image: require('assets/images/shirts.jpg'),
    link: '/customize'
  },
  {
    label: 'VEST',
    image: require('assets/images/vest.jpg'),
    link: '/customize'
  },
  {
    label: 'PANTS',
    image: require('assets/images/pants.jpg'),
    link: '/customize'
  }
]

function Features() {

  return(
    <div id="features-section">
      <Container>
        <Row>
          <Col lg={4} className="left-section">
            <div className="wrapper-text">
              <h4 className="title">Premium Made to Measure Online Suit Maker</h4>
              <p className="text">Make your made-to-measure formal wear for any events.</p>
            </div>
          </Col>
          <Col lg={8} className="right-section">
            <Row className="data-list">
              {data.map((v, k) => (
                <Col md={3} xs={6} key={k} className="data-item">
                  <div className="wrapper-btn">
                    <Link to={v.link}><Button size="sm" className="btn-outlinewhite all">{v.label}</Button></Link>
                  </div>
                  <img src={v.image} alt={v.label} className="item-img" />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Features;