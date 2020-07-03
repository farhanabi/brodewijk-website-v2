import React, { useState, useEffect } from 'react'
import { Container, Button, Row, Col, Nav, NavItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import DropdownLang from 'components/DropdownLang'
const logoGram = require('assets/images/Logogram.svg')
const logoText = require('assets/images/Brodewijk-white.png')

function Header() {
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
              <img src={logoGram} alt="Logo-gram" className="img-logogram"/>
              <img src={logoText} alt="Logo-text" className={`img-logotext ${scrollPosition < 100 ? 'd-none' : ''}`}/>
            </a>
          </Col>
          <Col md={7} className="nav-menu ml-auto">
            <Nav className="ml-auto">
              <NavItem>
                <Link to="/customize"><Button size="sm" className="btn-outlinewhite">CUSTOMIZE</Button></Link>
              </NavItem>
              <NavItem>
                <Link to="/book-appointment"><Button size="sm" className="btn-outlinewhite">BOOK APPOINTMENT</Button></Link>
              </NavItem>
              <NavItem>
                <Link to="/collections"><Button size="sm" className="btn-outlinewhite">COLLECTIONS</Button></Link>
              </NavItem>
              <NavItem>
                <Link to="/login"><Button size="sm" className="btn-outlinewhite all">SIGN UP / LOGIN</Button></Link>
              </NavItem>
              <NavItem>
                <DropdownLang/>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header;