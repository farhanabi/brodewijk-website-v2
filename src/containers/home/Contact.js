import React from 'react'
import { Container, Row, Col, Button} from 'reactstrap'

const img = require('assets/images/contact.svg')
function Contact() {
  return(
    <div id="contact-section">
      <Container>
        <Row>
          <Col lg={6} xs={12} className="wrapper-text">
            <Row>
              <Col xs={12} md={3} lg={2}>
                <img src={img} alt="contact"/>
              </Col>
              <Col xs={12} md={9} lg={10} className="text">
                <h5 className="title-contact">What are you waiting for?</h5>
                <p className="subtitle-contact">Sign up or consult now</p>
              </Col>
            </Row>
          </Col>
          <Col lg={6} xs={12} className="wrapper-btn">
            <Button className="btn-black sm">SIGN UP</Button>
            <Button className="btn-outline-black sm"><i className="fab fa-whatsapp"/>&nbsp;CONSULT NOW</Button>
          </Col>
        </Row>
        
      </Container>
    </div>
  )
}

export default Contact;