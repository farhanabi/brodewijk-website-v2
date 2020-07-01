import React, { useState, useEffect } from 'react'
import { Container, Button, Row, Col, Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'
const logo = require('assets/images/Brodewijk-white.png')

function HeaderDesktop() {
  const [scrollPosition, setSrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <header className={`section-header ${scrollPosition > 100 ? 'sticky' : ''}`} >
      <Container>
        <Row className="header-bar">
          <Col md={5}>
            <a href="/" className="header-logo">
              <img src={logo} alt="Logo" className="img-logo"/>
            </a>
          </Col>
          <Col md={7} className="nav-menu ml-auto">
            <Nav className="ml-auto">
              <NavItem>
                <Button size="sm" className="btn-outlinewhite">CUSTOMIZE</Button>
              </NavItem>
              <NavItem>
                <Link to="/book-appointment"><Button size="sm" className="btn-outlinewhite">BOOK APPOINTMENT</Button></Link>
              </NavItem>
              <NavItem>
                <Button to="/collections" size="sm" className="btn-outlinewhite">COLLECTIONS</Button>
              </NavItem>
              <NavItem>
                <Button to="/login" size="sm" className="btn-outlinewhite all">SIGN UP / LOGIN</Button>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default HeaderDesktop