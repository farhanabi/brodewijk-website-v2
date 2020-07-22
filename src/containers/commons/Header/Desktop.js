import React, { useState, useEffect } from 'react'
import { Container, Button, Row, Col, Nav, NavItem, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import DropdownLang from 'components/DropdownLang'

const logoGram = require('assets/images/Logogram.svg')
const logoText = require('assets/images/Brodewijk-white.png')

function Header(props) {
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
    <header id="desktop-header" 
      className={`${scrollPosition > 1 ? 'sticky' : ''} ${props.white && 'bg-white'}`}
    >
      <Container>
        <Row className="header-bar">
          <Col md={4}>
            <a href="/" className="header-logo">
              <img src={logoGram} alt="Logo-gram" className="img-logogram"/>
              <img src={logoText} alt="Logo-text" className={`img-logotext ${scrollPosition < 655 ? 'd-none' : ''}`}/>
            </a>
          </Col>
          <Col md={8} className="nav-menu">
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
                    <DropdownToggle className={`${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>
                      {t("customize")}
                    </DropdownToggle>
                    <DropdownMenu className={`customize-bar ${props.white && 'bg-white'}`}>
                      <DropdownItem className="item">
                        <Link to="/collections">
                          <Button className={`btn-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("suit")}</Button>
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="item">
                        <Link to="/collections">
                          <Button className={`btn-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("shirt")}</Button>
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="item">
                        <Link to="/collections">
                          <Button className={`btn-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("pants")}</Button>
                        </Link>
                      </DropdownItem>
                      <DropdownItem className="item">
                        <Link to="/collections">
                          <Button className={`btn-item ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("vest")}</Button>
                        </Link>
                      </DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </NavItem>
                <NavItem>
                  <Link to="/book-appointment">
                    <Button className={`${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("book-appointment")}</Button>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/collections">
                    <Button className={`${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("collections")}</Button>
                  </Link>
                </NavItem>
                <NavItem>
                  <Link to="/login">
                    <Button className={`all ${props.white ? 'btn-outline-black' : 'btn-outline-white'}`}>{t("login-button")}</Button>
                  </Link>
                </NavItem>
                <NavItem>
                  {props.white ? (<DropdownLang white/>) : (<DropdownLang />)}
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