import React from 'react'
import { Container, Row, Col, Button} from 'reactstrap'
import { Link } from 'react-router-dom'

const img = require('assets/images/book-appointment.png')

function BookAppointment() {
  return(
    <div id="book-appointment-section">
      <Container>
        <Row className="data">
          <Col lg={5} xs={12} className="left-section">
            <h3 className="title-book">Let Us Come To You</h3>
            <p className="text-book">
              Make your made-to-measure formal wear for any events. Exclusively tailor-made for you, directly measured by our talented tailor. Book an Appointment now!
            </p>
            <Link to="/book-appointment">
              <Button className="btn-black">BOOK APPOINTMENT</Button>
            </Link>
          </Col>
          <Col lg={7} xs={12} className="right-section">
            <img src={img} alt="book appointment" className="img-book" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default BookAppointment;