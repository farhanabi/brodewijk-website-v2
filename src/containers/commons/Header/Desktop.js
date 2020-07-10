import React, { useState, useEffect } from 'react'
import { Container, Button, Row, Col, Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import DropdownLang from 'components/DropdownLang'

const logoGram = require('assets/images/Logogram.svg')
const logoText = require('assets/images/Brodewijk-white.png')

function Header() {
  const { t } = useTranslation("translation");

  const [scrollPosition, setSrollPosition] = useState(0);
  const [showCustomize, setShowCustomize] = useState(false)

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
    <header id="desktop-header"className={scrollPosition > 100 ? 'sticky' : ''}>
      <Container>
        <Row className="header-bar">
          <Col md={5}>
            <a href="/" className="header-logo">
              <img src={logoGram} alt="Logo-gram" className="img-logogram"/>
              <img src={logoText} alt="Logo-text" className={`img-logotext ${scrollPosition < 100 ? 'd-none' : ''}`}/>
            </a>
          </Col>
          <Col md={7} className="nav-menu">
            <Row className="justify-content-end mr-0 ml-0">
              <Nav>
                <NavItem>
                  <Dropdown isOpen={showCustomize} 
                    onMouseOver={() => setShowCustomize(true)}
                    onFocus={() => setShowCustomize(true)}
                    onMouseLeave={() => setShowCustomize(false)}
                    onBlur={() => setShowCustomize(false)}
                    toggle={() => setShowCustomize(!showCustomize)}
                  >
                    <DropdownToggle className="btn-outline-white">{t("customize")}</DropdownToggle>
                    <DropdownMenu className="customize-bar">
                      <DropdownItem className="item">
                        <Link to="/collections">
                          <Button className="btn-outline-white btn-item">{t("suit")}</Button>
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="item">
                        <Link to="/collections">
                          <Button className="btn-outline-white btn-item">{t("shirt")}</Button>
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="item">
                        <Link to="/collections">
                          <Button className="btn-outline-white btn-item">{t("pants")}</Button>
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="item">
                        <Link to="/collections">
                          <Button className="btn-outline-white btn-item">{t("vest")}</Button>
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
                <NavItem>
                  <Link to="/book-appointment">
                    <Button className="btn-outline-white">{t("book-appointment")}</Button>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/collections">
                    <Button className="btn-outline-white">{t("collections")}</Button>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/login">
                    <Button className="btn-outline-white all">{t("login-button")}</Button>
                  </Link>
                </NavItem>
                <NavItem>
                  <DropdownLang/>
                </NavItem>
              </Nav>
            </Row>
          </Col>
        </Row>
      </Container>
    </header>
  )
}

export default Header;