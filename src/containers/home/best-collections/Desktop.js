import React from 'react'
import { Container, Row, Col, Button} from 'reactstrap'
import { Link } from 'react-router-dom'

const imgInfo = require('assets/images/collections.png')
const data = [
  {
    image: require('assets/images/collections-1.jpg'),
    state: {}
  },
  {
    image: require('assets/images/collections-2.jpg'),
    state: {}
  },
  {
    image: require('assets/images/collections-3.jpg'),
    state: {}
  }
]

function BestCollections() {
  return(
    <div id="best-collections-section">
      <Container>
        <Row className="info-section">
          <Col lg={4} xs={12} className="left-section">
            <h6 className="tag-collection">PREMIUM</h6>
            <h2 className="title-collection">Our best collections</h2>
            <p className="text-collection">
              Looking for inspiration? Check our best collection this season! You can also customize the looks after you select our collection
            </p>
          </Col>
          <Col lg={8} xs={12} className="right-section">
            <img src={imgInfo} alt="best collection" className="img-collection" />
          </Col>
        </Row>
        <Row className="data-section">
          {data.map((v, k) => (
            <Col md={4} xs={12} key={k} className="data-item">
              <Link to="/collection"><img src={v.image} className="item-img"/></Link>
            </Col>
          ))}
        </Row>
        <Row className="more-section">
          <Button className="btn-outline-black">SEE MORE COLLECTIONS</Button>
        </Row>
      </Container>
    </div>
  )
}

export default BestCollections;